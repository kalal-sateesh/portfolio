import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          tittle="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-COMMERCE APPLICATION"
          des="Developed an e-commerce web application using
React.js and Implemented all functionalities including cart
functionality Created a completely responsive UI"
          src={projectOne}
          gitLink="https://github.com/kalal-sateesh/ShoppersStop"
          webLink="https://shoppers-stop-six.vercel.app/"
        />
        <ProjectsCard
          title="TRAVEL-THRILL APPLICATION"
          des="Developed the TravelThrill application using React.js and Implemented login and signup functionalities, Created a completely responsive UI"
          src={projectTwo}
          gitLink="https://github.com/kalal-sateesh/travelThrill"
          webLink="https://travel-thrill.vercel.app/"
        />
        <ProjectsCard
          title="WEATHER-REPORT APPLICATION"
          des="Developed a Weather-app Project Using React Js, If the user enters any valid city name it will show the weather report of that particular city if user allows the location it show the weather at that location"
          src={projectThree}
          gitLink="https://github.com/kalal-sateesh/react-whether-report-project"
          webLink="https://react-whether-report-project.vercel.app/"
        />
        <ProjectsCard
          title="QUICKBITE APPLICATION"
          des="Developed a food ordering app using React Native and Ensured the application is completely responsive"
          src={projectFour}
          gitLink="https://github.com/kalal-sateesh/QuickBite"
          webLink="https://drive.google.com/file/d/1hOabkgOjIRhN_gCZ2IQwSirV5gygHl2E/view"
        />
        <ProjectsCard
          title="TODO-LIST APPLICATION"
          des="Developed a todo list application using React Native framework, Implemented functionalities such as authentication, add, edit, and delete and Created a completely responsive UI"
          src={projectFive}
          gitLink="https://github.com/kalal-sateesh/todolist"
          webLink="https://drive.google.com/file/d/1Zgj1_6-1lGyFY9ggyrr6HL1DX3rFCTEC/view"
        />
        <ProjectsCard
          title="COLOR-PICKER-APP"
          des="Developed a Color-Picket-app Using React Js If user enter any kind of color and clicks on add button or enter key the color is added to the container."
          src={projectSix}
          gitLink="https://github.com/kalal-sateesh/react-third-project-color-picker"
          webLink="https://react-third-project-color-picker.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
