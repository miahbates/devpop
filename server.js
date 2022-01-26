const express = require("express");
const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

const PORT = 3333;

server.get("/", (request, response) => { 
  const html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="./style.css">
      <title>Document</title>
    </head>
    <body>
     <h1>hello world</h1>
    </body>
    </html>`;
    
  response.send(html);
});

server.listen(PORT, () => { 
  console.log(`listening on http://localhost:${PORT}`);
});

