const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User({
    firstName: "Pramod",
    lastName: "Sharma",
    emailId: "pramodsharma@gmail.com",
    mobileNo: 723538675,
    password: "jdfhiaud87236",
    age: "39",
    gender: "M",
  });
  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    console.log("error==>", err);
    res.status(400).send("Error occured,try correct input data");
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
