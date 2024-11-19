import { useState } from "react";

export default function Education({
  schoolFilled,
  titleFilled,
  gradDateFilled,
  handleSchoolClick,
  handleTitleClick,
  handleGradDateClick,
}) {
  const [schoolInput, setSchoolInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [gradDateInput, setGradDateInput] = useState("");

  const handleSchoolChange = (e) => {
    setSchoolInput(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleGradDateChange = (e) => {
    setGradDateInput(e.target.value);
  };

  return (
    <section>
      <h2>Education</h2>
      <button onClick={() => handleSchoolClick(schoolInput)}>
        {schoolFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="school">School: </label>
      <span style={schoolFilled ? { display: "inline" } : { display: "none" }}>
        {" "}
        {schoolInput}
      </span>
      <br style={schoolFilled ? { display: "none" } : { display: "inline" }} />
      <input
        style={schoolFilled ? { display: "none" } : { display: "inline" }}
        value={schoolInput}
        onChange={handleSchoolChange}
        id="school"
        type="text"
        placeholder="Enter school name..."
      />
      <br />

      <button onClick={() => handleTitleClick(titleInput)}>
        {titleFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="title">Title: </label>
      <span style={titleFilled ? { display: "inline" } : { display: "none" }}>
        {" "}
        {titleInput}
      </span>
      <br style={titleFilled ? { display: "none" } : { display: "inline" }} />
      <input
        style={titleFilled ? { display: "none" } : { display: "inline" }}
        value={titleInput}
        onChange={handleTitleChange}
        id="title"
        type="text"
        placeholder="Enter study title..."
      />
      <br />

      <button onClick={() => handleGradDateClick(gradDateInput)}>
        {gradDateFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="gradDate">Graduation date: </label>
      <span
        style={gradDateFilled ? { display: "inline" } : { display: "none" }}
      >
        {" "}
        {gradDateInput}
      </span>
      <br
        style={gradDateFilled ? { display: "none" } : { display: "inline" }}
      />
      <input
        style={gradDateFilled ? { display: "none" } : { display: "inline" }}
        value={gradDateInput}
        onChange={handleGradDateChange}
        id="date"
        type="date"
      />
      <br />
    </section>
  );
}
