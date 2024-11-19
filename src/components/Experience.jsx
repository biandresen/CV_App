import { useState } from "react";

export default function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <label htmlFor="company">Company:</label>
      <br />
      <input id="company" type="text" /> <br />
      <label htmlFor="title">Title: </label>
      <br />
      <input id="title" type="text" /> <br />
      <label htmlFor="responsibilities">Responsibilities: </label>
      <br />
      <textarea id="responsibilities"></textarea>
    </section>
  );
}
