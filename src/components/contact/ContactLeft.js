import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const redirectToInstagram = () => {
  window.open('https://www.instagram.com/jubin_david', '_blank'); // Replace 'your-username' with your Instagram username or the desired URL
};

const redirectToLinkedIn = () => {
  window.open('https://www.linkedin.com/in/jubin-david', '_blank'); // Replace 'your-username' with your LinkedIn username or the desired URL
};

const redirectToGitHub = () => {
  window.open('https://github.com/jubin-david/', '_blank');
}
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Jubin David</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8714363576</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jubindavid390@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={redirectToInstagram}>
            <FaInstagram />
          </span>
          <span className="bannerIcon" onClick={redirectToGitHub}>
            <FaGithub />
          </span>
          <span className="bannerIcon" onClick={redirectToLinkedIn}>
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft