import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [courseName, setCourseName] = useState("");
  function handleFormChange(event) {
    const { value } = event.target;
    setCourseName(value);
  }
  async function handleSubmit(e) {
    
    e.preventDefault();
    

    try {
      await axios.post("http://localhost:3000/", {
        courseName
    })
      .then(res=>{
        if (res.data === "exist") {
          alert("Course exists");
        } else if (res.data === "notexist") {
          alert("No course has been found");
        }else if(res.data ==="error"){
          alert("database error");
        }
       
      }).catch(e=>{
        console.log(e);
        alert("connection failed")
        
      })
    } catch (event) {
      console.log(e);
    }
  }
  

 

  return (
    <form method="POST">
      <div className="input1Filed">
        <input
          type="text"
          name="input1"
          className="input1"
          value={courseName}
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
