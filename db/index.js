const Poll = require("pg").Pool
const poll = new Poll({
    user:"postgres",
    password:"password",/* your password */
    host:"localhost",
    port:5432,
    database:"todoapp"
})

module.exports = poll
