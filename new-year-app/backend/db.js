const mongoose = require("mongoose");
// mongodb url handy
// mongodb+srv://himanshujagtap05:oib4CbhVFWeNeTzf@cluster0.0cnw4.mongodb.net/
mongoose.connect("mongodb+srv://himanshujagtap05:oib4CbhVFWeNeTzf@cluster0.0cnw4.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}