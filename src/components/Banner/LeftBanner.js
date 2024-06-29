import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiJavascript, SiReact, SiHtml5, SiCss3 } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Profesional Coder.",
      "Front-end Developer.",
      "React Js Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELLCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'am{" "}
          <span className="text-designColor capitalize">
            Sateesh Kumar Goud
          </span>
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
          Targeting a challenging role as a Frontend Developer, leveraging
          expertise in HTML, CSS, JavaScript, and React.js to contribute to
          dynamic web application development.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a target="_blank" rel="noreferrer" href="https://react.dev/">
              <span className="bannerIcon">
                <SiReact />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.w3schools.com/js/"
            >
              <span className="bannerIcon">
                <SiJavascript />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.w3schools.com/cssref/index.php"
            >
              <span className="bannerIcon">
                <SiCss3 />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.w3schools.com/html/html_intro.asp"
            >
              <span className="bannerIcon">
                <SiHtml5 />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
