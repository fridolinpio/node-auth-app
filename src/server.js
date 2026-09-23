const express = require("express");
require("dotenv").config();

const signupMessage = require("./signup");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node Auth App is running!");
});

app.get("/signup", (req, res) => {
  res.send(signupMessage);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

