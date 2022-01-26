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
	cy.get('button[type="submit"]').click();

	cy.get("li").contains("ada123");
	cy.get("li").contains("Amazing cord trousers");
	cy.get("li").contains("Trousers");
	cy.get("li").contains("They fit so well!");
});

// test that an item can be deleted from news feed

// test for 404 page
