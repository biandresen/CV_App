import { useState, useEffect, useContext, useRef } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

function CVApp() {
  const [filled, setFilled] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const alertMessage = "Write something before adding";

  const handleNameClick = (nameInput) => {
    if (nameInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, name: !filled.name });
  };

  const handleEmailClick = (emailInput) => {
    if (emailInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, email: !filled.email });
  };

  const handlePhoneClick = (phoneInput) => {
    if (phoneInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, phone: !filled.phone });
  };

  return (
    <div>
      <h1>CV form</h1>
      <GeneralInfo
        nameFilled={filled.name}
        emailFilled={filled.email}
        phoneFilled={filled.phone}
        handleNameClick={handleNameClick}
        handleEmailClick={handleEmailClick}
        handlePhoneClick={handlePhoneClick}
      />
      <Education />
      <Experience />
    </div>
  );
}

export default CVApp;
