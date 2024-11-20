import { useState, useEffect, useContext, useRef } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import ReactLogo from "./ReactLogo";

function CVApp() {
  const [filled, setFilled] = useState({
    name: false,
    email: false,
    phone: false,
    school: false,
    title: false,
    gradDate: false,
    company: false,
    position: false,
    responsibilities: false,
    dateFrom: false,
    dateTo: false,
  });

  const alertMessage = "Write something before adding";
  const formIsFilled = Object.values(filled).every((value) => value === true);

  function traverseSibling(e, number) {
    let currentSibling = e.target.nextSibling;
    for (let i = 0; i < number; i++) {
      if (currentSibling.nextSibling) {
        currentSibling = currentSibling.nextSibling;
      }
    }
    if (currentSibling) {
      currentSibling.focus();
    }
  }

  const handleNameClick = (e, nameInput) => {
    if (nameInput == undefined || nameInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, name: !filled.name });
    traverseSibling(e, 9);
  };

  const handleEmailClick = (e, emailInput) => {
    if (emailInput == undefined || emailInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, email: !filled.email });
    traverseSibling(e, 9);
  };

  const handlePhoneClick = (e, phoneInput) => {
    if (phoneInput == undefined || phoneInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, phone: !filled.phone });
  };

  const handleSchoolClick = (e, schoolInput) => {
    if (schoolInput == undefined || schoolInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, school: !filled.school });
    traverseSibling(e, 9);
  };

  const handleTitleClick = (e, titleInput) => {
    if (titleInput == undefined || titleInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, title: !filled.title });
    traverseSibling(e, 9);
  };

  const handleGradDateClick = (e, gradDateInput) => {
    if (gradDateInput == undefined || gradDateInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, gradDate: !filled.gradDate });
  };

  const handleCompanyClick = (e, companyInput) => {
    if (companyInput == undefined || companyInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, company: !filled.company });
    traverseSibling(e, 9);
  };

  const handlePositionClick = (e, positionInput) => {
    if (positionInput == undefined || positionInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, position: !filled.position });
    traverseSibling(e, 9);
  };

  const handleResponsibilitiesClick = (e, responsibilitiesInput) => {
    if (
      responsibilitiesInput == undefined ||
      responsibilitiesInput.trim() == ""
    )
      return alert(alertMessage);
    setFilled({ ...filled, responsibilities: !filled.responsibilities });
    traverseSibling(e, 9);
  };

  const handleDateFromClick = (e, dateFromInput) => {
    if (dateFromInput == undefined || dateFromInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, dateFrom: !filled.dateFrom });
    traverseSibling(e, 9);
  };

  const handleDateToClick = (dateToInput) => {
    if (dateToInput == undefined || dateToInput.trim() == "")
      return alert(alertMessage);
    setFilled({ ...filled, dateTo: !filled.dateTo });
  };

  const handleSendCV = () => {
    const CVContent = document.querySelector(".CV-content");
    const CVSentMessage = document.querySelector(".CV-sent-message");
    CVContent.style.display = "none";
    CVSentMessage.style.display = "block";
  };

  return (
    <div className="CV-container">
      <ReactLogo size="120px" />
      <h1>CV FORM</h1>
      <hr />
      <div className="CV-sent-message">CV sent!</div>
      <div className="CV-content">
        <GeneralInfo
          nameFilled={filled.name}
          emailFilled={filled.email}
          phoneFilled={filled.phone}
          handleNameClick={handleNameClick}
          handleEmailClick={handleEmailClick}
          handlePhoneClick={handlePhoneClick}
        />
        <Education
          schoolFilled={filled.school}
          titleFilled={filled.title}
          studyFilled={filled.study}
          gradDateFilled={filled.gradDate}
          handleSchoolClick={handleSchoolClick}
          handleTitleClick={handleTitleClick}
          handleGradDateClick={handleGradDateClick}
        />
        <Experience
          companyFilled={filled.company}
          positionFilled={filled.position}
          responsibilitiesFilled={filled.responsibilities}
          dateFromFilled={filled.dateFrom}
          dateToFilled={filled.dateTo}
          handleCompanyClick={handleCompanyClick}
          handlePositionClick={handlePositionClick}
          handleResponsibilitiesClick={handleResponsibilitiesClick}
          handleDateFromClick={handleDateFromClick}
          handleDateToClick={handleDateToClick}
        />
        <button
          onClick={handleSendCV}
          className="form-button"
          style={formIsFilled ? { display: "block" } : { display: "none" }}
        >
          Send CV
        </button>
      </div>
    </div>
  );
}

export default CVApp;
