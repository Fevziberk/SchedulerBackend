const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Berqque:Database123321@atlascluster.vt1is9m.mongodb.net/")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log('failed');
  });

const courseSchema = new mongoose.Schema({
  name: {
    type: String
  },
  schedules: {
    type: [String]
  }
});

const courses = mongoose.model("courses", courseSchema);

module.exports = courses;
