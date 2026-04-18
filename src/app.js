const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use( express.json());
app.post("/signup", async (req, res) => {
  console.log(req.body);
  
  try {
    // Creating a new instance of the User model
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      mobileNo: req.body.mobileNo,
      password: req.body.password,
      age: req.body.age,
      gender: req.body.gender,
    });
    try {
      await user.save();
      res.send("User created successfully");
    } catch (err) {
      console.log("error==>", err);
      res.status(400).send("Error occured,try correct input data");
    }
  } catch (err) {
    console.log(err);
    res.send("error occured");
  }
});
connectDB()
  .then(() => {
    console.log("database connected succsffully");
    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("error occured , unable to connect to db");
  });
