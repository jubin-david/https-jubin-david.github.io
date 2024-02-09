// import React, { useState, useEffect } from 'react';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';

// import { Link } from 'react-router-dom'; // Use React Router Link
// import { FaInstagram, FaGithub, FaLinkedinIn, FaCloud } from 'react-icons/fa';
// import { SiJavascript, SiPython } from 'react-icons/si';

// function LeftBanner() {
//   const [textIndex, setTextIndex] = useState(0); // Use state for typewriter effect

//   const delaySpeed = 2000; // Adjust if needed

//   const skills = ['Python', 'JavaScript', 'Cloud']; // Use an array for skills

//   const texts = [
//     'Software Engineer.',
//     'Frontend Developer.',
//     'Backend Developer.',
//     'Database Designer.',
//   ];

//   const handleTypewriterLoop = () => {
//     const nextIndex = (textIndex + 1) % texts.length;
//     setTimeout(() => {
//       setTextIndex(nextIndex);
//     }, delaySpeed);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(useTypewriter, delaySpeed);
//     return () => clearInterval(intervalId);
//   }, []); // Run effect once

//   return (
//     <div className="w-full lgl:w-1/2 flex flex-col gap-20">
//       {/* Use Semantic HTML */}
//       <section className="flex flex-col gap-5">
//         <h4 className="font-normal text-lg">WELCOME TO MY PROFILE</h4>
//         <h1 className="text-6xl font-bold text-white">
//           Hi, I'm <span className="text-designColor capitalize">Jubin David</span>
//         </h1>
//         <h2 className="text-bold text-4xl text-white">
//           a <span>{texts[textIndex]}</span>
//           <Cursor
//             cursorBlinking="false"
//             cursorStyle="|"
//             cursorColor="#ff014f"
//           />
//         </h2>
//         <p className="text-bodyFont font-base leading-6 tracking-wide">
//           {/* Consider summarizing description */}
//           A highly experienced Python developer with 5 years of experience. Skilled in various web frameworks and technologies. I am passionate about building high-performing and scalable web applications.
//         </p>
//       </section>
//       <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
//         <div>
//           <h2 className="uppercase font-titleFont mb-4">Find me in</h2>
//           <div className="flex gap-4">
//             <Link to="https://www.instagram.com/jubin_david/" className="bannerIcon">
//               <FaInstagram />
//             </Link>
//             <Link to="https://www.linkedin.com/in/jubin-david/" className="bannerIcon">
//               <FaLinkedinIn />
//             </Link>
//             <Link to="https://github.com/jubin-david" className="bannerIcon">
//               <FaGithub />
//             </Link>
//           </div>
//         </div>
//         <div>
//           <h2 className="uppercase font-titleFont mb-4">Best Skills</h2>
//           <div className="flex gap-4">
//             {skills.map((skill) => (
//               <span key={skill} className="bannerIcon">
//                 {skill === 'Python' && <SiPython />}
//                 {skill === 'JavaScript' && <SiJavascript />}
//                 {skill === 'Cloud' && <FaCloud />}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftBanner;

import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaGithub, FaLinkedinIn, FaCloud } from "react-icons/fa";
import { SiJavascript, SiPython} from "react-icons/si";

function redirectToPage(redirectTo) {
  const redirectMap = {
    "instagram": "https://www.instagram.com/jubin_david",
    "github": "https://github.com/jubin-david",
    "linkedln": "https://www.linkedin.com/in/jubin-david/"};
    if (redirectMap.hasOwnProperty(redirectTo)){
      console.log("reached here....")
      window.open = redirectMap[redirectTo];}
      else{
        window.location.href = redirectMap["github"];
      }
  };

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Engineer.", "Frontend Developer.", "Backend Developer.", "Database Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PROFILE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Jubin David</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A highly experienced Python developer with 5 years of experience in developing and maintaining
complex software systems. Skilled in a variety of web frameworks, including Flask, Fast API, and
Django. Proficient in relational and non-relational database management systems and adept at
front-end technologies such as React, CSS, HTML, and JavaScript. I am skilled in utilizing AWS
services, including S3, EC2, ECS, Lambda, API Gateway etc. Well-versed in Git for effective version
control. Familiar with Agile methodology and experienced in working with Scrum teams. I have a
proven track record of delivering high-performing and scalable web applications on time and on
budget while continuously adapting to evolving industry trends and best practices.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={redirectToPage("instagram")}> 
            <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaGithub/>
              </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            {/* <span className="bannerIcon">
              <FaReact />
            </span> */}
            <span className="bannerIcon">
              <FaCloud/>
            </span> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
