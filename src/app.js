const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(
    "req params are ==>",
    req.params.userId,
    req.params.name,
    req.params.password,
  );
  console.log("req queries are==>",req.query.city,req.query.state)
  res.send("Get Method for user");
});
app.post("/user", (req, res) => {
  res.send("Post Method for user here user data will be saved");
});
app.patch("/user", (req, res) => {
  res.send("Patch Method for user here user data will be updated");
});
app.delete("/user", (req, res) => {
  res.send("Delete Method for user here user will be deleted");
});

app.use((req, res) => {
  res.send("welcome here");
});
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
