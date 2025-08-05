"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-[20px] md:px-[40px] py-20 relative gap-10 bg-black text-white z-10"
    >
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse z-30 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse z-30 pointer-events-none" />

      <div className="relative w-[360px] h-[500px] md:w-[480px] md:h-[660px] flex justify-center items-center z-20">
        <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-blue-500 border-[6px] border-white shadow-[0_0_100px_25px_rgba(255,0,150,0.5)] blur-sm opacity-95 ring-4 ring-pink-300 ring-offset-4 ring-offset-black z-10" />
        <div className="relative w-[320px] h-[500px] md:w-[380px] md:h-[580px] z-20">
          <Image
            src="/images/sticker.webp"
            alt="Tamara"
            layout="fill"
            objectFit="contain"
            className="object-[top_20px]"
          />
        </div>
      </div>

      <div className="max-w-2xl z-20 space-y-6 px-2 text-lg text-gray-300 text-center md:text-left">
        <h3 className="text-5xl font-bold text-white">About me</h3>
        <p>
          I am{" "}
          <span className="text-pink-400 font-semibold">
            Tamara Hovhannisyan
          </span>
          , a software engineer from Armenia with a strong background in
          fullstack development, using React, Next.js, NestJS, PostgreSQL, and
          more.
        </p>
        <p className="text-gray-400">
          Over the years, I’ve built a solid foundation in both front-end and
          back-end development. On the front-end, I work with React, Next.js,
          JavaScript, and TypeScript, creating clean, responsive, and
          interactive user interfaces using tools like Tailwind CSS, Material
          UI, and modern state management solutions such as Redux, Zustand, and
          the Context API.
        </p>

        <a
          href="/cv (2).pdf"
          download
          className="inline-block mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-md transition duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
