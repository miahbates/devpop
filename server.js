const express = require("express");
const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded({ extended: false });
server.use(bodyParser);

const PORT = process.env.PORT || 3333;

const home = require("./routes/home");
const signup = require("./routes/signup");
const login = require("./routes/login");
const newsFeed = require("./routes/newsfeed.js");
const errorPage = require("./routes/404");

// get
server.get("/", home.get);
server.get("/signup", signup.get);
server.get("/login", login.get);

// post
server.post("/newsfeed", newsFeed.post);

server.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});