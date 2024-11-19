import { useState, useEffect, useContext, useRef } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

function CVApp() {
  return (
    <>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  );
}

export default CVApp;
