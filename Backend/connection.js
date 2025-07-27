const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://pibobif143:user@cluster0.f4veefd.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
