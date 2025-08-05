"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 99, icon: "📜" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 75, icon: "🚀" },
        { name: "Tailwind", level: 70, icon: "💨" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 60, icon: "🟢" },
        { name: "Express", level: 70, icon: "🌐" },
        { name: "MongoDB", level: 60, icon: "🍃" },
        { name: "PostgreSQL", level: 60, icon: "🐘" },
        { name: "Nest.js", level: 70, icon: "🔌" },
      ],
    },
    {
      category: "Tools & Other",
      skills: [
        { name: "Git", level: 50, icon: "📂" },
        { name: "Docker", level: 50, icon: "🐳" },
        { name: "Linux", level: 50, icon: "🔥" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-20 px-[20px] md:px-[40px] relative z-10"
    >
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse z-30 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500 rounded-full opacity-30 blur-2xl animate-pulse z-30 pointer-events-none" />

      <div className="text-center mb-16 z-20 relative">
        <h2 className="text-5xl font-bold text-pink-400">My Skills</h2>
        <p className="text-gray-400 mt-4">
          A glance at the technologies I am confident with.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 z-20 relative">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-black/30 border border-pink-500 rounded-3xl p-6 w-full md:w-1/3 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-pink-300 text-center">
              {category.category}
            </h3>
            <ul className="space-y-4">
              {category.skills.map((skill, idx) => (
                <li key={idx}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-200">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-sm text-pink-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 transition-all duration-1000`}
                      style={{
                        width: animateProgress ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
