const express = require("express");
const app = express();
const port = 3000;

//Middleware so that Express can read JSON and URL encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
