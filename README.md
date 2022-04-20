# [Founders and Coders](https://www.foundersandcoders.com/) (apprenticeship) 

## Devpop 👚

*Co-authored with [Orian](https://github.com/OrianP), [Milly](https://github.com/millipede-cpu) and [Juliette](https://github.com/julietteorpen).*

A shop for dev to post items of their vintage clothing, the focus of the project was on authentication.

[Deployed version here!](https://devpop.herokuapp.com/)

## Team members
* Scrum Facilitator - Miah
* UX Design - Orian
* DevOps - Milly
* Quality Assurance - Juliette

## How to install 🛠️
* Git clone `https://github.com/miahbates/devpop`
* Run command `npm install` in terminal

## Local Database Setup
* run `./scripts/create_db <name of your local database>`
* run `./scripts/populate_db`
* run `psql`
* run `\connect <name of your local database>`
* run `\dt` to check the tables are there. There should be only one table named "reviews"
* To start sever run command `npm run dev`
* For cypress testing run command `npm run test`

Access locally on [localhost:3333](http://localhost:3333/)

## User Stories :busts_in_silhouette:
### Core User stories
- [x] As a user, I want to: submit information to your site for anyone to see
- [x] As a user, I want to: come back to your site later and see what I posted is still there
- [x] As a user, I want to: be the only person allowed to delete my stuff
### Acceptance Criteria
- [x] Forms for users to sign up and log in
- [x] A form for users to submit data only accessible to logged in users
- [x] A page showing all the data
- [x] A way for logged in users to delete their own data
- [x] Semantic form elements with correctly associated labels
- [x] A Postgres database hosted on Heroku
- [x] Hidden environment variables (i.e. not on GitHub)
### Stretch Criteria
- [x] Tests for all routes
- [ ] A user page that shows everything posted by a single user
- [ ] GitHub Actions CI setup to run your tests when you push

## Features: 🌟
* Able to login/log out.
* Post an item of clothing. 
* Delete an item of clothing using a form with a type input of hidden.
* Deployed on heroku.

## Learning 🌱
* We can store passwords securely.
* We can hash and salt passwords using bcrypt.
* We describe why it’s important to hash and salt passwords.
* We can authenticate users by setting and reading cookies.
* We can store session IDs in a cookie.
* We can describe why we need session IDs.
* We can ensure only authenticated users can see certain content.
* We can ensure only authenticated users can take certain actions.
* We can describe the difference between a stateful and stateless server.
* We can create our own promises.
* We can wrap a function that takes a callback in a promise.
* We can design a usable sign in form.
* We can create a sign in form with semantic accessible HTML.
* We can help users enter the right information with HTML5 validation.r
* We can use the Application tab in Chrome dev tools to view cookies

## Improvements and future ideas ✨
- Add validation to form to allow only number input for cohort.
- When submiting fact, redirect to page wit all facts.
- Improve css hover to ensure only 1 card is revealed.
- Edit uploaded item. 
- Filter items.
- Create a profile.
- Delete facts.

