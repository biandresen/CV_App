import { useState } from "react";

export default function GeneralInfo({
  nameFilled,
  emailFilled,
  phoneFilled,
  handleNameClick,
  handleEmailClick,
  handlePhoneClick,
}) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneInput(e.target.value);
  };

  return (
    <section>
      <h2>General Information</h2>
      <button onClick={() => handleNameClick(nameInput)}>
        {nameFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="fullName">Full name:</label>
      <span style={nameFilled ? { display: "inline" } : { display: "none" }}>
        {" "}
        {nameInput}
      </span>
      <br style={nameFilled ? { display: "none" } : { display: "inline" }} />
      <input
        style={nameFilled ? { display: "none" } : { display: "inline" }}
        value={nameInput}
        onChange={handleNameChange}
        id="fullName"
        type="text"
        placeholder="Tom Johnson"
      />
      <br />

      <button onClick={() => handleEmailClick(emailInput)}>
        {emailFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="email">Email: </label>
      <span style={emailFilled ? { display: "inline" } : { display: "none" }}>
        {" "}
        {emailInput}
      </span>
      <br style={emailFilled ? { display: "none" } : { display: "inline" }} />
      <input
        style={emailFilled ? { display: "none" } : { display: "inline" }}
        value={emailInput}
        onChange={handleEmailChange}
        id="email"
        type="email"
        placeholder="tom@email.com"
      />
      <br />

      <button onClick={() => handlePhoneClick(phoneInput)}>
        {phoneFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="phoneNumber">Phone number: </label>
      <span style={phoneFilled ? { display: "inline" } : { display: "none" }}>
        {" "}
        {phoneInput}
      </span>
      <br style={phoneFilled ? { display: "none" } : { display: "inline" }} />
      <input
        style={phoneFilled ? { display: "none" } : { display: "inline" }}
        value={phoneInput}
        onChange={handlePhoneChange}
        id="phoneNumber"
        type="tel"
        placeholder="123 45 678"
      />
      <br />
    </section>
  );
}
