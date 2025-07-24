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
        list +=
        `
        <div class="todo-item">
            <span class="todo-text">${todo.title}</span>
            <button class="delete-btn" onclick="deleteTodo('${todo.id}')">Delete!</button>
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