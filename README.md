# Devpop

A place for devs to sell their vintage clothing!

[*Deployed version here!*](https://devpop.herokuapp.com/)✨/

## How to install
Git clone https://github.com/fac-23/week3-auth-team2
Run command `npm install` in terminal

## Local Database Setup
* run `./scripts/create_db <name of your local database>`
* run `./scripts/populate_db`
* run `psql`
* run `\connect <name of your local database>`
* run `\dt` to check the tables are there. There should be only one table named "reviews"
* To start sever run command `npm run dev`
* For cypress testing run command `npm run test`

Access locally on[localhost:3333](http://localhost:3333/)

## Core User stories
- [x] As a user, I want to: submit information to your site for anyone to see
- [x] As a user, I want to: come back to your site later and see what I posted is still there
- [ ] As a user, I want to: be the only person allowed to delete my stuff
## Acceptance Criteria
- [x] Forms for users to sign up and log in
- [x] A form for users to submit data only accessible to logged in users
- [x] A page showing all the data
- [x] A way for logged in users to delete their own data
- [x] Semantic form elements with correctly associated labels
- [x] A Postgres database hosted on Heroku
- [x] Hidden environment variables (i.e. not on GitHub)
## Stretch Criteria
- [x] Tests for all routes
- [ ] A user page that shows everything posted by a single user
- [ ] GitHub Actions CI setup to run your tests when you push

## Roles:
* Scrum Facilitator - Miah
* UX Design - Orian
* DevOps - Milly
* Quality Assurance - Juliette
