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
		<section class="flex">
			<h1 class="sr-only">DevPop</h1>
			<div class="logo"></div>
			<a href="/signup" id="sign-up" class="btn">Sign Up</a>
			<a href="/login" id="log-in" class="btn">Log In</a>
		</section>
	</body>
</html>`;

	response.send(html);
}

module.exports = { get }