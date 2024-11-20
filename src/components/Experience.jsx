import { useState } from "react";

export default function Experience({
  companyFilled,
  positionFilled,
  responsibilitiesFilled,
  dateFromFilled,
  dateToFilled,
  handleCompanyClick,
  handlePositionClick,
  handleResponsibilitiesClick,
  handleDateFromClick,
  handleDateToClick,
}) {
  const [companyInput, setCompanyInput] = useState("");
  const [positionInput, setPositionInput] = useState("");
  const [responsibilitiesInput, setResponsibilitiesInput] = useState("");
  const [dateFromInput, setDateFromInput] = useState("");
  const [dateToInput, setDateToInput] = useState("");

  const handleCompanyChange = (e) => {
    setCompanyInput(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPositionInput(e.target.value);
  };

  const handleResponsibilitiesChange = (e) => {
    setResponsibilitiesInput(e.target.value);
  };

  const handleDateFromChange = (e) => {
    setDateFromInput(e.target.value);
  };

  const handleDateToChange = (e) => {
    setDateToInput(e.target.value);
  };

  return (
    <section>
      <h2>Experience</h2>
      <button onClick={(e) => handleCompanyClick(e, companyInput)}>
        {companyFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="company">Company: </label>
      <span style={companyFilled ? { display: "inline" } : { display: "none" }}>
        {" "}
        {companyInput}
      </span>
      <br style={companyFilled ? { display: "none" } : { display: "inline" }} />
      <input
        style={companyFilled ? { display: "none" } : { display: "inline" }}
        value={companyInput}
        onChange={handleCompanyChange}
        id="company"
        type="text"
        placeholder="Enter company name..."
      />
      <br />

      <button onClick={(e) => handlePositionClick(e, positionInput)}>
        {positionFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="position">Position: </label>
      <span
        style={positionFilled ? { display: "inline" } : { display: "none" }}
      >
        {" "}
        {positionInput}
      </span>
      <br
        style={positionFilled ? { display: "none" } : { display: "inline" }}
      />
      <input
        style={positionFilled ? { display: "none" } : { display: "inline" }}
        value={positionInput}
        onChange={handlePositionChange}
        id="position"
        type="text"
        placeholder="Enter position title..."
      />
      <br />

      <button
        onClick={(e) => handleResponsibilitiesClick(e, responsibilitiesInput)}
      >
        {responsibilitiesFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="responsibilities">Responsibilities: </label>
      <span
        style={
          responsibilitiesFilled ? { display: "inline" } : { display: "none" }
        }
      >
        {" "}
        {responsibilitiesInput}
      </span>
      <br
        style={
          responsibilitiesFilled ? { display: "none" } : { display: "inline" }
        }
      />
      <textarea
        style={
          responsibilitiesFilled ? { display: "none" } : { display: "inline" }
        }
        value={responsibilitiesInput}
        onChange={handleResponsibilitiesChange}
        id="responsibilities"
        placeholder="Enter responsibilities..."
      />
      <br />

      <button onClick={(e) => handleDateFromClick(e, dateFromInput)}>
        {dateFromFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="dateFrom">Date from: </label>
      <span
        style={dateFromFilled ? { display: "inline" } : { display: "none" }}
      >
        {" "}
        {dateFromInput}
      </span>
      <br
        style={dateFromFilled ? { display: "none" } : { display: "inline" }}
      />
      <input
        style={dateFromFilled ? { display: "none" } : { display: "inline" }}
        value={dateFromInput}
        onChange={handleDateFromChange}
        id="dateFrom"
        type="date"
      />
      <br />

      <button onClick={() => handleDateToClick(dateToInput)}>
        {dateToFilled ? "Edit" : "Add"}
      </button>
      <label htmlFor="dateTo">Date to: </label>
      <span style={dateToFilled ? { display: "inline" } : { display: "none" }}>
        {" "}
        {dateToInput}
      </span>
      <br style={dateToFilled ? { display: "none" } : { display: "inline" }} />
      <input
        style={dateToFilled ? { display: "none" } : { display: "inline" }}
        value={dateToInput}
        onChange={handleDateToChange}
        id="dateTo"
        type="date"
      />
      <br />
    </section>
  );
}
