const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25,
    city: "New York",
    profession: "Software Engineer",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 30,
    city: "San Francisco",
    profession: "Designer",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 40,
    city: "Chicago",
    profession: "Businessman",
  },
];

// Set view engine to EJS
app.set("view engine", "ejs");

// Set up routes
app.get("/", (req, res) => {
  res.render("index", { users });
});

app.get("/user/add", (req, res) => {
  res.render("add-user");
});

app.post("/user/add", (req, res) => {
  const { name, email, age, city, profession } = req.body;
  const newUser = { name, email, age, city, profession };
  users.push(newUser);
  res.redirect("/");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
