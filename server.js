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
  const courseData = req.body;
  const courseName = courseData.courseName;
  const courseHours = courseData.courseHours;  // Extract courseHours from request
  console.log(courseName, courseHours);

  try {
    const course = await courses.findOne({ name: courseName });
    console.log(course);
    if (course) {
      res.json({ status: "exist", courseHours: course.schedules });
    } else {
      res.json({ status: "notexist", courseHours: [] });
    }
  } catch (error) {
    console.error(error);
    res.json({ status: "error", courseHours: [] });
  }
});

app.listen(3000, () => {
  console.log("port connected to 3000");
});