import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [courseName, setCourseName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/", { courseName });
      if (response.data === "exist") {
        alert("Course exists");
      } else if (response.data === "notexist") {
        alert("No course has been found");
      } else if (response.data === "error") {
        alert("Error occurred");
      }
    } catch (error) {
      console.log(error);
      alert("Unknown error");
    }
  }

  function handleFormChange(event) {
    const { value } = event.target;
    setCourseName(value);
  }

  return (
    <form>
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