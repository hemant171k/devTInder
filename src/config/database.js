const mongoose = require("mongoose");

// "mongodb+srv://hemant171k:cpG3604NJlkg0jrr@cluster0.bttyw8v.mongodb.net/?appName=Cluster0/devTinder",
const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://hemant171k:cpG3604NJlkg0jrr@cluster0.bttyw8v.mongodb.net/devTinder",
  );
};
module.exports = connectDB;
