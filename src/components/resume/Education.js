import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Master's Degree</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Application (MCA)"
            subTitle="University of Kerala (2015 - 2018)"
            result="3.5/4"
            des="The University of Kerala offers a three-year Master of Computer Applications (MCA) program. The program is a postgraduate professional program that teaches students how to develop computer applications by learning a modern programming language. The program is six semesters long and lasts three years."
          />
          
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2015</p>
          <h2 className="text-3xl md:text-4xl font-bold">Bachelor's Degree</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Sc. Computer Science"
            subTitle="University of Kerala (2012 - 2015)"
            result="3.25/4"
            des="The First Degree Programme in Computer Science is designed with the objective of equipping the
            students to cope with the emerging trends and challenges in field of computers and interrelated disciplines
            like computer engineering, computer science, information systems, information technology, and software
            engineering."
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Education;
