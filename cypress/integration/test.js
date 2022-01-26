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
  cy.get('input[name="username"]').type("ada123");
  cy.get('input[name="email]').type("ada.lovelace@gmail.com");
  cy.get('input[name="password"]').type("ilovecoding2");
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "/newsfeed").contains("ada123");
});

//  test that user can login on login page and redirect to news feed
it("user can login", () => {
  cy.visit("/");
  cy.get('button[id="login"]').click();
  cy.url().should("include", "/login");
  cy.get('input[name="email]').type("ada.lovelace@gmail.com");
  cy.get('input[name="password"]').type("ilovecoding2");
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "/newsfeed").contains("ada123");
});

// test that an item can be added to news feed
it("can add item to news feed", () => {
  cy.visit("/newsfeed");
  cy.get('input[name="item-title"]').type("Amazing cord trousers");
  cy.get("select").select("trousers");
  cy.get("textarea").type("They fit so well!");
  cy.get('input[name="price"]').type("15");
  cy.get('button[type="submit"]').click();

  cy.get("li").contains("ada123");
  cy.get("li").contains("Amazing cord trousers");
  cy.get("li").contains("Trousers");
  cy.get("li").contains("They fit so well!");
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
