import { useState } from "react";

export default function GeneralInfo() {
  return (
    <section>
      <h2>General Information</h2>
      <label htmlFor="fullName">Full name:</label>
      <br />
      <input id="fullName" type="text" /> <br />
      <label htmlFor="email">Email: </label>
      <br />
      <input id="email" type="text" /> <br />
      <label htmlFor="phoneNumber">Phone number: </label>
      <br />
      <input id="phoneNumber" type="text" />
    </section>
  );
}
