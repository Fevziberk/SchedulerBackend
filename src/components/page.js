import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [courseData, setCourseData] = useState({courseName:"",courseHours:""});
  
  function handleFormChange(event) {
    const { name, value } = event.target;
    setCourseData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/", courseData);
      const { status, courseHours } = response.data;
  
      if (status === "exist") {
        alert("Course exists");
        alert(courseData.courseName + " "+courseHours);
      } else if (status === "notexist") {
        alert("No course has been found");
      } else if (status === "error") {
        alert("Database error");
      }
    } catch (error) {
      console.error(error);
      alert("Connection failed");
    }
  }
  
  
  

 

  return (
    <form method="POST">
      <div className="input1Filed">
        <input
          type="text"
          name="courseName"  // Add this line
          className="input1"
          value={courseData.courseName}
          onChange={handleFormChange}
/>
      </div>
      <button className="save" onClick={handleSubmit}>
        Kaydet
      </button>
    </form>
  );
}

export default Page;
