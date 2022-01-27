function get(request, response) {
	const html = `
    <!DOCTYPE html>
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
                <h1>Log in</h1>
                <form action="/login" method="POST">
                    <label for="email">Email<span aria-hidden="true">*</span></label>
                    <input type="email" name="email" required />
    
                    <label for="password">Password<span aria-hidden="true">*</span></label>
                    <input
                        type="password"
                        name="password"
                        pattern=".*\d.*"
                        minlength="8"
                        required
                    />
                    <button type="submit">Log in</button>
                </form>
                <a id="back-home" href="/">Back to home</a>
            </section>
            
        </body>
    </html>`;

	response.send(html);
}

module.exports = { get };
