import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Knowledge Lens</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technology Lead"
            subTitle="Knowledge Lens: A Rockwell Automation Company - (Present)"
            result="Bengaluru"
            des="Leading a development team, providing technical guidance and oversight for ongoing project execution while actively mentoring junior developers. Conducting regular code reviews and ensuring adherence to evolving best practices and coding standards. Continuously analyzing emerging business requirements, identifying updated technical solutions, and designing adaptable system architectures"
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Knowledege Lens - (September, 2018 - March, 2021)"
            result="Bengaluru"
            des="Developed multiple Python/Flask web applications and REST APIs. Setup CI/CD pipelines and Docker/ECS-based deployments. Automated software delivery processes and ensured smooth deployment and monitoring of applications."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">ZS Associates - Contractor</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr.Full Stack Developer"
            subTitle="ZS Associates - (April, 2021 - January, 2024)"
            result="Bengaluru"
            des="Worked on both front-end and back-end
            aspects of web applications, creating
            interactive user interfaces using React,
            CSS, HTML and JavaScript.
            Collaborated with designers to
            implement responsive designs and
            ensure a seamless user experience.
            Utilized AWS services like S3, Lambda
            and API Gateway to build scalable and
            reliable cloud-based applications.
            Implemented serverless architectures
            and managed infrastructure as code."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
