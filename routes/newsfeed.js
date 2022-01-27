// for the get request: check if user is logged in and redirect to newsfeed
// if not signed up or logged in - redirect to homepage
const model = require("../database/model.js");

function get(request, response) {
  const sid = request.signedCookies.sid;
  if (sid) {
    model
      .getSession(sid)
      .then((session) => {
        response.send(html)
      }
    )} 
    else {
      response.redirect("/");
      // send html page to say has been unsuccessful...
    }

  const html = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" type="text/css" href="./style.css" />
            <title>DevPop</title>
        </head>
        <body>
            <section>
                <h1>DevPop Feed</h1>
                <p id="user-name-display"></p>
                <section id="news-feed-container">
    
                </section>
        </body>
    </html>`;
}

module.exports = { get };
