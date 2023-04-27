import React, { useState } from "react";

const PersonDetails = () => {
  const [storePersonDetails, setStorePersonDetails] = useState({
    name:"",
    age: "",
    qualification: "",
    courses: [],
  });
  const [name,setName] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [individualCourse, setIndividualCourse] = useState("");

  
const handleNameChange = (e) => {
  setName(e.target.value)
}  
const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };
  const handleCoursesChange = (e) => {
    setIndividualCourse(e.target.value);
  };
  const showDetails = (e) => {
    e.preventDefault();
    const courseList = [...storePersonDetails.courses, individualCourse];
    setStorePersonDetails({
      name,
      age,
      qualification,
      courses: courseList,
    });
  };
  return (
    <div>
      <form onSubmit={showDetails}>
      <label className="font-bold">Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label className="font-bold">Age:</label>
        <input
          type="number"
          value={age}
          className="border p-1"
          onChange={handleAgeChange}
        />
        <label className="font-bold">Qualification</label>
        <input
          type="text"
          value={qualification}
          onChange={handleQualificationChange}
        />
        <label className="font-bold">Courses</label>
        <input type="text" value={individualCourse} onChange={handleCoursesChange} />
        <button type="submit">Show details</button>
      </form>
      <ul className="list-none text-lg mx-auto my-4 w-full">
        <li>Name: {storePersonDetails.name}</li>
        <li>Age: {storePersonDetails.age}</li>
        <li>Qualification: {storePersonDetails.qualification}</li>
        <li>Courses:</li>
          {storePersonDetails.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
      </ul>
    </div>
  );
};

export default PersonDetails;