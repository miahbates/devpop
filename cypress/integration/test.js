beforeEach(() => {
  cy.task("resetDb");
});

it("can navigate to homepage", () => {
  cy.visit("/");
  cy.url().should("include", "/");
});

// test for user sign up form on home page and redirect to news feed where username is displayed
it("user can sign up on homepage", () => {
  cy.visit("/");
  cy.get("section").find('a[id="sign-up"]').click();
  cy.url().should("include", "/signup");
  cy.get("form").find('input[name="name"]').type("ada123");
  cy.get("form").find('input[name="email"]').type("ada.lovelace@gmail.com");
  cy.get("form").find('input[name="password"]').type("ilovecoding2");
  cy.get("form").find('button[type="submit"]').click();
  cy.url().should("include", "/login");
});

//  test that user can login on login page and redirect to news feed
it("user can login", () => {
  cy.visit("/");
  cy.get("section").find('a[id="sign-up"]').click();
  cy.url().should("include", "/signup");
  cy.get("form").find('input[name="name"]').type("ada123");
  cy.get("form").find('input[name="email"]').type("ada.lovelace@gmail.com");
  cy.get("form").find('input[name="password"]').type("ilovecoding2");
  cy.get("form").find('button[type="submit"]').click();
  // login in
  cy.url().should("include", "/login");
  cy.get('input[name="email"]').type("ada.lovelace@gmail.com");
  cy.get('input[name="password"]').type("ilovecoding2");
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "/newsfeed");
});

// test that an item can be added to news feed
it("can add item to news feed", () => {
  //sign up
  cy.visit("/");
  cy.get("section").find('a[id="sign-up"]').click();
  cy.url().should("include", "/signup");
  cy.get("form").find('input[name="name"]').type("ada123");
  cy.get("form").find('input[name="email"]').type("ada.lovelace@gmail.com");
  cy.get("form").find('input[name="password"]').type("ilovecoding2");
  cy.get("form").find('button[type="submit"]').click();
  // login in
  cy.url().should("include", "/login");
  cy.get('input[name="email"]').type("ada.lovelace@gmail.com");
  cy.get('input[name="password"]').type("ilovecoding2");
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "/newsfeed");

  cy.get('input[name="name"]').type("ada123");
  cy.get('input[name="title"]').type("Amazing cord trousers");
  cy.get("select").select("trousers");
  cy.get('input[name="description"]').type("These are really really sparkly");
  cy.get('input[name="price"]').type("15");
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "/newsfeed");

  cy.get("li").contains("Amazing cord trousers");
  cy.get("li").contains("Trousers");
  cy.get("li").contains("These are really really sparkly");
  cy.get("li").contains("15");
});

// test that an item can be deleted from news feed
it("can delete item from news feed"),
  () => {
    //add new item
    cy.visit("/newsfeed");
    cy.get('input[name="item-title"]').type("Amazing cord jacket");
    cy.get("select").select("jacket");
    cy.get("textarea").type("the best jacket ever!");
    cy.get('input[name="price"]').type("150");
    cy.get('button[type="submit"]').click();

    //check how many items are on page

    //delete item from page
    cy.get("li:first").find('button[id="delete-btn"]').click();

    //check total number of items in one less

    //item not on page
    cy.get("li").contains("Amazing cord jacket").should("not.exist");
  };

// test for 404 page
it("404 if page not found", () => {
  cy.request({ url: "/jeoanfieg", failOnStatusCode: false }).should(
    (response) => {
      expect(response.status).to.eq(404);
    }
  );
});