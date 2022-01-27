const db = require("./connection.js");

function createUserDB(name, email, hash) {
  const INSERT_USER = `
    INSERT INTO devpop_users (name, email, password) VALUES ($1, $2, $3)
    RETURNING id, name, email
  `;
  return db.query(INSERT_USER, [name, email, hash]).then((result) => {
    console.log("createUserDb", result.rows[0]);
    return result.rows[0];
  });
}

function createSession(sid, data) {
  const INSERT_SESSION = `INSERT INTO sessions
    (sid, data) VALUES ($1, $2) RETURNING sid`;
  return db.query(INSERT_SESSION, [sid, data]).then((result) => {
    console.log("create sid", result.rows[0].sid);
    return result.rows[0].sid;
  });
}

function addItem(name, title, product_type, description, price) {
  const SELLER_ID = `SELECT devpop_users.id WHERE devpop_users.name=${name}`;

  const INSERT_ITEM = `INSERT INTO products(seller_id, title, product_type, description, price) VALUES ($1, $2, $3, $4, $5) RETURNING title, product_type, description, price`;
  return db.query(INSERT_ITEM, [SELLER_ID, title, product_type, description, price]).then((result) => {
    // console.log("items added to db", result.rows[0]);
    return result.rows[0];
  });
};

function getUser(email) {
  //SQL command to select ID, email, password and name
  //from devpop users table where email matches user input
  const SELECT_USER = `
  SELECT id, name, email, password FROM devpop_users WHERE email = $1`;
  //santizes email to stop SQL injection checks DB for email
  return db.query(SELECT_USER, [email]).then((result) => {
    console.log("getUser", result.rows[0]);
    return result.rows[0];
  });
}

// function displayItem(email) {
//   //SQL command to select ID, email, password and name
//   //from devpop users table where email matches user input
//   const SELECT_USER = `
//   SELECT id, name, email, password FROM devpop_users WHERE email = $1`;
//   //santizes email to stop SQL injection checks DB for email
//   return db.query(SELECT_USER, [email]).then((result) => {
//     console.log("getUser", result.rows[0]);
//     return result.rows[0];
//   });

function getSession(sid) {
  const SELECT_SESSION = `SELECT data FROM sessions WHERE sid=$1`;

  return db.query(SELECT_SESSION, [sid]).then((result) => {
    const singleResult = result.rows[0];
    console.log("get session", singleResult, singleResult.data);
    return singleResult && singleResult.data;
  });
}
module.exports = { createUserDB, createSession, getUser, getSession, addItem};
