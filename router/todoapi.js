const db = require("../db")
const Router = require("express")
const router = new Router()

router.get("/getall", async (req, res)=>{
    const todos = await db.query("SELECT * from todos")
    res.json(todos.rows)
})

router.post("/add", async (req, res) =>{
    const {title, body} = req.body
    await db.query(`INSERT INTO todos(title, body) VALUES ('${title}', '${body}');`)
    res.json("ok")
})

router.get("/get/:id", async (req, res) => {
    const id = req.params.id
    const detail = await db.query(`SELECT * FROM todos WHERE id =${id}`)
    res.json(detail.rows)
})

module.exports = router