import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign, SiProgress } from "react-icons/si";
import { FaBars, FaGlobe, FaMobile } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title tittle="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          tittle="Building User Interfaces"
          des="Developing and implementing visual components that users interact with directly."
          Icon={<FaBars />}
        />
        <Card
          tittle="State Management"
          des="Managing the state of an application, which includes handling data that changes over time."
          Icon={<AiFillAppstore />}
        />
        <Card
          tittle="Component Development"
          des="Creating reusable components that can be used across different parts of the app."
          Icon={<SiProgress />}
        />
        <Card
          tittle="Responsive Design"
          des="Ensuring that the application works well on a variety of devices and screen sizes."
          Icon={<FaMobile />}
        />
        <Card
          tittle="Performance Optimization"
          des="Improving the performance of the application by optimizing code, minimizing load times."
          Icon={<SiAntdesign />}
        />
        <Card
          tittle="Integration with APIs"
          des="Fetching and handling data from APIs (Application Programming Interfaces) to display dynamic content."
          Icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
