const express = require("express");
const courses = require("./mongo");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.post("/", async (req, res) => {
  console.log("Request received!");
  const { courseName } = req.body;

  try {
    
    const course = await courses.findOne({ name: courseName });
    console.log(course);
    if (course) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error(error);
    res.json("error");
  }
});

app.listen(3000, () => {
  console.log("port connected to 3000");
});
