const express = require("express");

//creates server
let app = express();

// Port that the server will run on
const port = parseInt(process.env.PORT, 10) || 3000;

//Middleware so that Express can read JSON and URL encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//will listen out to index.html file
app.use(express.static("public")); // Gets code from folder called public

//Endpoints
app.get("/l", function (req, res) {
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

//export default app;
// ENDPOINTS
// Get all todos: GET /api/todos
// Add todo POST: /api/todos
// Get a single todo: GET /api/todos/<todo_id>
// Update a todo: PUT /api/todos/<todo_id>
// Delete a todo: DELETE /api/todos/<todo_id></todo_id>
