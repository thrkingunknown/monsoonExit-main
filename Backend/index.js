const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here
const BlogModel = require("./model");
require("./connection");

//Write your POST API here
app.post("/post", async (req, res) => {
  try {
    BlogModel(req.body).save();
    res.send("Posted Successfully")
  } catch (error) {
    console.log(error);
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send("Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
});

app.put('/:id', async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Updated Successfully");
  } catch (error) {
    console.log(error);
  }
});


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
