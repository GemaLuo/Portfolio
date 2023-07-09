import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="flex flex-col text-center mx-auto p-4 text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center md:flex-row text-neutral-500 dark:text-neutral-100">
          ©️ 2023 WenJun Luo <span className="flex flex-row items-center justify-center md:mx-2"><AiOutlineMail className="m-1"/>gemaluowenjun@gmail.com</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/GemaLuo" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-400"
              size={30}
            />
          </a>
          <a
            href="www.linkedin.com/in/gema-luo2023"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-400"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
