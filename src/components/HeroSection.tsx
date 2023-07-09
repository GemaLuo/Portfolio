"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-7 py-10 sm:py-18 md:flex-row md:space-x-4 md:text-left md:py-36">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full"
            src="./undraw_Programmer_re_owql.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-3/5 md:mt-2">
          <h1 className="font-bold text-4xl mt-4 md:text-5xl md:mt-0">
            Hi, I&#39;m WenJun!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl ">
            I&#39;m a{" "}
            <span className="font-semibold text-indigo-600">
              Front-End Engineer{" "}
            </span>
            based in Taiwan. Working towards creating meaningful web
            experiences.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-indigo-600 rounded shadow hover:bg-indigo-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
