const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {

    httpOnly : true,
    maxAge : 600000, 
    sameSite : 'strict', 
    signed: true

    }

function createUser(name, email, password) {
    return bcrypt.hash(password, 10)
    .then((hash) => {
        model.createUserDB(name, email, hash)
    })
    }

function saveUserSession(name) {
    const sid = crypto.randomBytes(18)
    .toString("base64");
    return model.createSession(sid, {name})

}



module.exports = {COOKIE_OPTIONS, createUser, saveUserSession}