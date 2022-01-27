const express = require("express");
const server = express();
const cookieParser = require("cookie-parser");

const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded({ extended: false });
server.use(bodyParser);

const PORT = process.env.PORT || 3333;

const home = require("./routes/home");
const signup = require("./routes/signup");
const login = require("./routes/login");
const newsfeed = require("./routes/newsfeed.js");
const errorpage = require("./routes/404");

// COOKIE_SECRET lives in .env to stop it ending up on GitHub
// it is used to sign cookies so we can trust them
server.use(cookieParser(process.env.COOKIE_SECRET));

// get
server.get("/", home.get);
server.get("/signup", signup.get);
server.get("/login", login.get);
server.get("/newsfeed", newsfeed.get);

// post
// server.post("/newsfeed", newsFeed.post);
server.post("/signup", signup.post);
server.post("/login", login.post);

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});