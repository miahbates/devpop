const db = require("./connection.js");

function createUserDB(name, email, hash) {
	const INSERT_USER = `
    INSERT INTO devpop_users (name, email, password) VALUES ($1, $2, $3)
    RETURNING id, name, email
  `;
	return db.query(INSERT_USER, [name, email, hash]).then((result) => {
		console.log('createUserDb', result.rows[0]);
		result.rows[0];
	});
}

function createSession(sid, data) {
	const INSERT_SESSION = `INSERT INTO sessions
    (sid, data) VALUES ($1, $2) RETURNING sid`;
	return db.query(INSERT_SESSION, [sid, data]).then((result) => {
		console.log(result.rows[0].sid);
		result.rows[0].sid;
	});
}

// createUser("Holly", "email@fake.com", "1234")

module.exports = { createUserDB, createSession };
