import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { contactImg } from "../../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      ></img>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sateesh Kumar Goud</h3>
        <p className="text-lg font-normal text-gray-400">Front-End Developer</p>
        <p className="text-base tracking-wide text-gray-400 text-justify">
          Targeting a challenging role as a Front-end Developer, leveraging
          expertise in HTML, CSS, JavaScript, and React.js to contribute to
          dynamic web applications development
        </p>
        <p className="text-base flex items-center gap-2 text-gray-400">
          Phone: <span className="text-lightText">+91 9550984239</span>
        </p>
        <p className="text-base flex items-center gap-2 text-gray-400">
          Email:{" "}
          <span className="text-lightText">kalalsateesh893@gmail.com</span>
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sateesh-kumar-goud-5b1321243/"
          >
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
          </a>
          <a target="_blank" rel="noreferrer" href="https://wa.me/9550984239">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
