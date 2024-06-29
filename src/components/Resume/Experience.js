import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2020-2023</p>
        <h2 className="md:text-4xl text-2xl font-bold">Job Experience</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Gis Engineer"
          subTitle="RMSI Pvt.Ltd (2020-2023)"
          result="Hyderabad"
          des="Spearheaded geospatial data analysis and mapping projects.Collaborated with cross-functional teams to ensure accurate GIS data representation.Implemented GIS solutions to address specific project requirements.Provided technical support and training to team members on GIS tools.Resolved GIS software issues and optimized system performance."
        />
      </div>
    </motion.div>
  );
};

export default Experience;
