function get(request, response) {
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
			<h1>Sign up</h1>
			<form action="/signup" method="POST">
				<label for="username">Username<span aria-hidden="true">*</span></label>
				<input type="text" name="username" required />

				<label for="email">Email<span aria-hidden="true">*</span></label>
				<input type="email" name="email" required />

				<label for="password">Password<span aria-hidden="true">*</span></label>
				<div id="passwordRequirements">
					Passwords must contain at least one letter and one number, and contain
					at least 8 characters.
				</div>
				<input
					type="password"
					name="password"
					aria-describedby="passwordRequirements"
                    pattern=".*\d.*"
                    minlength="8"
					required
				/>
				<button type="submit">Sign up</button>
			</form>
			<a id="back-home" href="/">Back to home</a>
		</section>
		
	</body>
</html>`;

	response.send(html);
}

module.exports = { get };
