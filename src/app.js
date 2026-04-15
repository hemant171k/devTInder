const express = require("express");

const app = express();

// Authorized admin login user usign middleware and then processed it to actual its respective route

app.use("/admin", (req, res, next) => {
  let token = "abcxyz"; //get token token firstly from req and then check it from db or session
  if (token != "abcxyz") {
    res.status(401).send("unauthrized access");
  } else {
    next();
  }
});
app.get("/admin/getAllData", (req, res) => {
  res.send("here get all user data");
});
app.get("/admin/deletUser", (req, res) => {
  res.send("requested user deleted");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
