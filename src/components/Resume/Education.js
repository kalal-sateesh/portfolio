import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex flex-col md:flex-row gap-20">
      <div>

        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2020</p>
          <h2 className="text-4xl font-bold">Education</h2>
        </div>


        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology"
            subTitle="Geethanjali College Of Engineering and Technology (2016-2020)"
            result="7.47/10"
            des="Completed Bachelor of Technology in Civil-Engineering with 74%"
          />
          <ResumeCard
            title="Intermediate"
            subTitle="Sri Vivekananda Junior College (2014-2016)"
            result="90%"
            des="Completed Intermediate With MPC Group with 90%"
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="ZPHS High School (2014)"
            result="9.5/10"
            des="Completed SSC in ZPHS High school with 95%"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
