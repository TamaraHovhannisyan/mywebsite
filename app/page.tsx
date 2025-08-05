"use client";

import Image from "next/image";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row bg-black items-center justify-between px-[20px] md:px-[40px] py-20 relative overflow-visible gap-7 z-10"
      >
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse z-30 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500 rounded-full opacity-30 blur-2xl animate-pulse z-30 pointer-events-none" />
        <div className="flex px-7 flex-col font-bold text-white gap-6 z-20 text-center md:text-left">
          <p className="text-xl md:text-2xl text-gray-400">
            FULL-STACK WEB DEVELOPER
          </p>
          <h2 className="text-5xl md:text-7xl leading-tight">
            Tamara <br /> Hovhannisyan
          </h2>
        </div>

        <div className="relative w-[360px] h-[520px] md:w-[480px] md:h-[680px] flex justify-center items-center z-20">
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-blue-500 border-[6px] border-white shadow-[0_0_100px_25px_rgba(255,0,150,0.5)] blur-sm opacity-95 ring-4 ring-pink-300 ring-offset-4 ring-offset-black z-10" />
          <div className="relative w-[320px] h-[520px] md:w-[380px] md:h-[600px]">
            <Image
              src="/images/personal.webp"
              alt="Tamara"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom" }}
              className="z-20"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mt-25">
        <About />
      </section>

      <section id="skills" className="mt-25">
        <Skills />
      </section>

      <section id="contact" className="mt-25">
        <Contact />
      </section>
    </>
  );
}
