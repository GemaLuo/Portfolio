import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "WenJun Luo",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
