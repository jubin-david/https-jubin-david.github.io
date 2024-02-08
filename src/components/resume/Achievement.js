import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Awars & Recognitions</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-auto h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Customer Delight/ Customer First Award- June 2022."
            subTitle=""
            result="Success"
            des="Customer Delight/Customer First Award generally refers to an award given to individuals within an organization for exceeding customer expectations and providing exceptional service."
          />
                    <ResumeCard
            title="Going Above and Beyond Award - October 2021"
            subTitle=""
            result="Success"
            des="Going Above and Beyond Award commonly recognizes individuals who demonstrate exceptional performance exceeding their regular duties and expectations. "
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
      <div>

      </div>
    </motion.div>
  );
};

export default Achievement;
