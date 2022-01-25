const express = require("express");
const app = express();
const port = 3000;

//Middleware so that Express can read JSON and URL encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // looks for folder called public

app.get("/", (req, res) => {
  res.status(202);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
