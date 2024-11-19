import { useState, useEffect, useContext, useRef } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

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

  const handleSchoolClick = (schoolInput) => {
    if (schoolInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, school: !filled.school });
  };

  const handleTitleClick = (titleInput) => {
    if (titleInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, title: !filled.title });
  };

  const handleGradDateClick = (gradDateInput) => {
    if (gradDateInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, gradDate: !filled.gradDate });
  };

  const handleCompanyClick = (companyInput) => {
    if (companyInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, company: !filled.company });
  };

  const handlePositionClick = (positionInput) => {
    if (positionInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, position: !filled.position });
  };

  const handleResponsibilitiesClick = (responsibilitiesInput) => {
    if (responsibilitiesInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, responsibilities: !filled.responsibilities });
  };

  const handleDateFromClick = (dateFromInput) => {
    if (dateFromInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, dateFrom: !filled.dateFrom });
  };

  const handleDateToClick = (dateToInput) => {
    if (dateToInput.trim() == "") return alert(alertMessage);
    setFilled({ ...filled, dateTo: !filled.dateTo });
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
    </div>
  );
}

export default CVApp;
