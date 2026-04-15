const express = require("express");

const app = express();

// Authorized admin login user usign middleware and then processed it to actual its respective route

app.use("/", (err, req, res, next) => {
  // this function not gonna work for error handling becuase express follows its order to resolve route handling
  res.status(500).send("Something went wrong");
});
app.get("/admin/getAllData", (req, res) => {
  throw new Error("error occured");
  res.send("here get all user data");
});
app.get("/admin/deletUser", (req, res) => {
  // error handling use try/catch
  try {
    res.send("requested user deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use("/", (err, req, res, next) => {
  // this function  gonna work for error and handles the error raised by /admin/getAllData
  if (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
