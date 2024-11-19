import { useState } from "react";

export default function Education() {
  return (
    <section>
      <h2>Education</h2>
      <label htmlFor="schoolName">School name:</label>
      <br />
      <input id="schoolName" type="text" /> <br />
      <label htmlFor="study">Study: </label>
      <br />
      <input id="study" type="text" /> <br />
      <label htmlFor="studyDate">Date: </label>
      <br />
      <input id="studyDate" type="text" />
    </section>
  );
}
