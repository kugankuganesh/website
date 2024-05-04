import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaDatabase } from 'react-icons/fa';


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional coder.",
      "Full Stack Developer.",
      "Special In Laravel And React",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-20 p-4 md:p-0">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I am {""}
          <span className="text-designColor capitalize">
            Kuganesan Kangatharan
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-white">
          As a Laravel and React developer, I specialize in crafting robust and
          dynamic web applications by leveraging the strengths of both Laravel,
          a popular PHP framework, and React, a versatile JavaScript library. My
          role involves collaborating with a team of designers, back-end
          developers, and other stakeholders to understand project requirements
          and translate them into scalable and efficient solutions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-base md:text-lg uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/kugan.kuganesh.5"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/kuganesan-kangatharan-20220b17a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base md:text-lg uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaLaravel />
            </span>
            <span className="bannerIcon">
              <FaNetworkWired />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>

            <span className="bannerIcon">
              <FaDatabase />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
