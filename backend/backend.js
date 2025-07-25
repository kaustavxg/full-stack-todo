const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let todos = [];

function validateInput(req, res, next){

    const title = req.body.title;

    if(!title ) {
        res.status(400).json({
            error: "title or id missing"
        })
        return;
    }    
    next();
}

app.post('/addTodo', validateInput, function(req, res){

    const title = req.body.title;

    const id = parseInt(Date.now().toString() + Math.random().toString(36))

    todos.push({
        title,
        id,
        completed: false //# toggle function
    })

    res.json(todos)

})

app.delete('/:id', function(req, res){
    const id = parseInt(req.params.id);
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            todos.splice(i, 1);
            break;
        }
    }
    res.json({
        message: "todo deleted successfully"
    })

})

app.put('/todos/:id/toggle', function(req, res){
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if(todo){
        todo.completed =! todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({
            error: "Todo not found"
        })
    }
})

app.get('/', function(req, res){
    res.json(todos);
})

app.listen(9090, () => {
    console.log("server running on port 9090");
});