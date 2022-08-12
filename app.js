const express = require("express");
const router = require("./router/todoapi")
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors({origin: ['http://localhost:8080']}))
app.use(express.json())
app.use("/api", router)


app.listen(PORT, () => console.log("server is running"))