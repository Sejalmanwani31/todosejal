const todos = require("../models/tabtab")

const TODO = []
let id = 0

const index = (req, res) => {
    try {
        return res.render('ToDo')
    } catch (error) {
        console.error(error)
    }
}

const addTodo = async(req, res) => {
    try {
        const reqData = req.body;
        const userId = req.user.id;
        if (!reqData.taskinput) {
            return res.send('please fill all mandatory fields') // validation
        }
        const insertData = await todos.create({
            todo : reqData.taskinput,
            userId,
            isDone : false
        })
        if(!insertData) {
            return res.send("Something went wrong");
        }
        return res.json({ message: 'ToDo added successfully!', status: true, toDoObj :insertData })
    } catch (error) {
        console.error(error)
    }
}

const deleteAll = async(req,res) => {
    try{
        console.log("reached");
        const deleted = await todos.destroy({where: {}, truncate: true})
        return res.json({ message : 'Todo Deleted' , status:true ,toDoObjjj : deleted})
    } catch(error){
        console.error(error)
    }
}
const checked = async(req,res) => {
    try{
        console.log("reached");
        const updatedData = await todos.update({isDone: true },{where:{}})
        return res.json({ message : 'Task completed' , status:true ,toDotask : changed})
    } catch(error){
        console.error(error)
    }
}

module.exports = {
    index,
    addTodo,
    deleteAll
}