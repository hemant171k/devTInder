const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
app.use(
  "/user",
  (req, res, next) => {
    console.log("first middleware");
    next();
  },
  (req, res, next) => {
    console.log("2nd middleware");
    next();
  },
  (req, res, next) => {
    console.log("third middleware");
    next();
  },
  (req, res, next) => {
    console.log("4th middleware");
    next();
  },
  (req, res) => {
    console.log("welcome to Route handler");
    res.send("welcome to User");
  },
);
