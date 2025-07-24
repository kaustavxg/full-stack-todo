async function getAllTodo(){

    const response = await axios.get("http://localhost:9090/");
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
        <div class="todo-item">
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
            const response = await axios.post("http://localhost:9090/addTodo", {
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
        const response = await axios.delete(`http://localhost:9090/${id}`);
        getAllTodo();
    } catch(error){
        console.log(`ERROR in delete function: ${error}`);
    }
}

async function toggleTodoComplete(id){

    try {
        await axios.put(`http://localhost:9090/todos/${id}/toggle`)
        const todoItem = document.getElementById(`todo-${id}`);
        if(todoItem){
            todoItem.classList.toggle("completed");
        }
    } catch (error){
        console.log("ERROR toggling todo status: " + error);
        
    }
}