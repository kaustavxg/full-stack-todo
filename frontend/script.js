async function getAllTodo(){

    const response = await axios.get("https://full-stack-todo-app-753t.onrender.com/");
    const todos = response.data;

    const todoList = document.getElementById('todo-list')

    if(todos.length === 0){
        todoList.innerHTML = '<div class="empty-state">No todos yet. Add one above!</div>';
        return;
    }

    let list = "";
    todos.forEach(todo => {

        const completedClass = todo.completed ? "completed" : "";
        const checkedAtrribute = todo.completed ? "checked" : "";

        list +=
        `
        <div class="todo-item ${completedClass}" id="todo-${todo.id}">
            <input type="radio" onclick="toggleTodoComplete('${todo.id}')" ${checkedAtrribute}>
            <span class="todo-text">${todo.title}</span>
            <button class="delete-btn" onclick="deleteTodo('${todo.id}')">🗑️</button>
        </div>
        `
    })

    todoList.innerHTML = list;
}

async function addTodo(){
    const input = document.getElementById('todo-input');
    const title = input.value;

    if(title === ""){
        alert("Please enter a todo")
    }

    try {
            const response = await axios.post("https://full-stack-todo-app-753t.onrender.com/addTodo", {
            title
        })

        input.value = "";
        getAllTodo();
    } catch (error){
        console.log(`ERROR: ${error}`);
    }
    return;
}

async function deleteTodo(id){
    try {
        const response = await axios.delete(`https://full-stack-todo-app-753t.onrender.com/${id}`);
        getAllTodo();
    } catch(error){
        console.log(`ERROR in delete function: ${error}`);
    }
}

async function toggleTodoComplete(id){

    try {
        await axios.put(`https://full-stack-todo-app-753t.onrender.com/todos/${id}/toggle`)
        const todoItem = document.getElementById(`todo-${id}`);
        if(todoItem){
            todoItem.classList.toggle("completed");
        }
    } catch (error){
        console.log("ERROR toggling todo status: " + error);
        
    }
}

getAllTodo()