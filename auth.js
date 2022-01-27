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
    return model.createUserDB(name, email, hash)
    })
    }

function saveUserSession(user) {
    console.log(user)
    const sid = crypto.randomBytes(18)
    .toString("base64");
    return model.createSession(sid, {user})
    console.log(user)
    

}



module.exports = {COOKIE_OPTIONS, createUser, saveUserSession}