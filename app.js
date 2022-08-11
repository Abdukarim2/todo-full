const express = require("express");
const router = require("./router/todoapi")
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use("/api", router)


app.listen(PORT, () => console.log("server is running"))