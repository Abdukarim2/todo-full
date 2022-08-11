# todo-full
Backend node js,  database postgresql, frontend vue js
#
npm install 
#
create postgresql database todoapp
#
db/ index.js
const poll = new Poll({
    user:"postgres", // your username
    password:"password", // your password
    host:"localhost",
    port:5432, 
    database:"todoapp" 
})
