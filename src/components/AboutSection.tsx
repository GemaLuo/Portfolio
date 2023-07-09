"use client";
import React from "react";
import Image from "next/image";
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Webpack" },
];
const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-8 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-indigo-400 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-5 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center font-semibold text-2xl mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {" "}
              Hi, my name is WenJun and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivation"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Taiwan.
            </p>
            <br />
            <p>
              I graduated from National Tsing Hua University in 2022 with a
              Bachelor of Humanities and Social Sciences, specializing in both
              Chinese Literature and Laws. Due to my immense interest, I pursued
              self-study and currently transitioned into a career as a Front-End
              Engineer. I am dedicated to continuous learning and mastering
              programming languages.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From gardening, doing yoga, learning language, making pour-over
              black coffee. I am always seeking new experiences and love to keep
              myself engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-indigo-500">
                never stop growing
              </span>{" "}
              and that's what I strive to do, I have a passion for technology
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities.😊
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center font-semibold text-2xl mb-5 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              alt="picture"
              src="./undraw_At_work_re_qotl-removebg-preview.png"
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
