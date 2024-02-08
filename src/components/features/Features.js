import React from 'react'
import { AiFillAppstore , AiFillSetting} from "react-icons/ai";
import { FaDatabase, FaCloud } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Software Developemt"
          des="Creating, Designing, Testing, and Maintaining computer programs and applications to meet specific requirements and solve problems effectively and efficiently."
          icon={< AiFillSetting />}
         
        />
        <Card
          title="Web App Development"
          des="Build software for browsers, no install needed. Run it on Chrome, Firefox, anywhere!"
          icon={<AiFillAppstore />}
        />
        <Card
          title="Database Design"
          des="Defining, Structuring, and Organizing data in a database to optimize its efficiency, consistency, and reliability."
          icon={<FaDatabase />}
        />
        <Card
          title="Cloud Services"
          des="Automate build, testing, and deployment processes with cloud-based CI/CD pipelines, accelerating development cycles."
          icon={<FaCloud />}
        />
      </div>
    </section>
  );
}

export default Features