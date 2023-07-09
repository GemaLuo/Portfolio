import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Mudio",
    description:
      "MUDIO is an user-friendly music website that offers users the experience of listening to music online.",
    image: "./mudio.png",
    github: "https://github.com/GemaLuo/Mudio.git",
    link: "https://mudio-enjoy-music.web.app/",
  },
  {
    name: "Taipei-Day-Trip",
    description:
      "Taipei-day-trip is a travel e-commerce website that allows you to discover and book one-day sightseeing tours in Taipei City.",
    image: "./desktop taipei.png",
    github: "https://github.com/GemaLuo/taipei-day-trip.git",
    link: "https://github.com/GemaLuo/taipei-day-trip#Features",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-indigo-400 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28 pb-10">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-10px 0px -10px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        priority={true}
                        src={project.image}
                        alt="project image"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 border-8 border-stone-300"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2 space-y-2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row algin-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
