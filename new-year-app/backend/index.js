const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")
 
app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    console.log(todos)//if it is not a async function it will act as a promise
    res.json({
        todos
    })
})  

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

//write basic express boilerplate code,
//write express.json() middleware

app.listen(3000);