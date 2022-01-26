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
			<h1>DevPop</h1>
			<a href="/signup" id="sign-up">Sign Up</a>
			<a href="/login" id="log-in">Log In</a>
		</section>
	</body>
</html>`;

	response.send(html);
}

module.exports = { get }