const express = require("express");
const app = express();
const port = 4000;

// built-in middleware to handle urlencoded data
// in other words, form data:
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// routes
app.use("/employees", require("./routes/routes"));
app.get("/", (req, res) => {
  res.send("Welcome to basic NodeJS Express based api project.!");
});

app.listen(port, () => {
  console.log(`Application started listening ${port}.!`);
});
