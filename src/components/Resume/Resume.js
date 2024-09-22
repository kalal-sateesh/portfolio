import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import originalResume from "../../assets/images/Resume/Sateesh_kumar-goud.pdf";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  const handleEducation = () => {
    setEducationData(true);
    setSkillsData(false);
    setExperienceData(false);
  };

  const handleProfessional = () => {
    setEducationData(false);
    setSkillsData(true);
    setExperienceData(false);
  };

  const handleExperience = () => {
    setEducationData(false);
    setSkillsData(false);
    setExperienceData(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = originalResume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title tittle="" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={handleEducation}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            className={`${
              skillsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            onClick={handleProfessional}
          >
            Professional Skills
          </li>
          <li
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            onClick={handleExperience}
          >
            Experience
          </li>
          <li
            className="resumeLi border-transparent text-designColor hover:border-designColor hover:rounded-lg"
            onClick={handleDownloadResume}
          >
            Download Resume
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillsData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
