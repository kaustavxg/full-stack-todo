# Full-Stack To-Do Application

A clean, responsive, and full-stack to-do application that allows users to manage their daily tasks. The frontend is built with vanilla HTML, CSS, and JavaScript, and it communicates with a Node.js and Express backend to persist tasks.

### ✨ [Live Demo](https://full-stack-todo-app-plum.vercel.app/)


---

## Features

* **Create To-Dos**: Quickly add new tasks to your list.
* **Delete To-Dos**: Remove tasks you no longer need.
* **Mark as Complete**: Toggle the completion status of a to-do, which visually marks it as done.
* **Persistent State**: Your to-do list is fetched from a live backend server, so your tasks are saved between sessions.
* **Responsive Design**: A clean and modern UI that works seamlessly on both desktop and mobile devices.
* **Empty State**: A helpful message appears when there are no to-dos yet.

---

## Tech Stack

This project is built with the following technologies:

### Frontend

* **HTML5**
* **CSS3** (with custom styling for a modern, dark-mode look)
* **Vanilla JavaScript** for all the client-side logic.
* **Axios** for making HTTP requests to the backend API.

### Backend

* **Node.js** as the runtime environment.
* **Express.js** as the web server framework.
* **CORS** for handling cross-origin requests.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/get-npm)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/kaustavxg/full-stack-todo.git](https://github.com/kaustavxg/full-stack-todo.git)
    cd full-stack-todo
    ```
2.  **Install Backend Dependencies:**
    Navigate to the backend folder and install the required npm packages.
    ```sh
    cd backend
    npm install
    ```
3.  **Run the Backend Server:**
    Start the Express server. It will run on `http://localhost:9090`.
    ```sh
    npm run node
    ```
4.  **Set Up the Frontend:**
    The frontend is set up to communicate with the deployed backend on Render. To run it with your *local* backend, you'll need to update the API endpoints in `frontend/script.js`.

    Replace all instances of `https://full-stack-todo-app-753t.onrender.com` with `http://localhost:9090`.
5.  **Open the Frontend:**
    Simply open the `frontend/index.html` file in your web browser.
    ```sh
    # On macOS
    open frontend/index.html

    # On Windows
    start frontend/index.html
    ```

---

## API Endpoints

The backend provides the following RESTful API endpoints:

| Method   | Endpoint           | Description                                                        |
| :------- | :----------------- | :----------------------------------------------------------------- |
| `GET`    | `/`                | Retrieves the list of all to-do items.                            |
| `POST`   | `/addTodo`         | Adds a new to-do item. Expects a JSON body with a `title`.         |
| `DELETE` | `/:id`             | Deletes a to-do item by its unique `id`.                           |
| `PUT`    | `/todos/:id/toggle`| Toggles the `completed` status of a to-do item by its `id`. |

---