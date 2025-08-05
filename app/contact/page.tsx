"use client";

import React, { useEffect, useState } from "react";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "tamarahovhanny@gmail.com",
      href: "mailto:tamarahovhanny@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "(+374) 41 88 99 39",
      href: "tel:+37441889939",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Yerevan, Armenia",
      href: "https://maps.google.com/?q=Yerevan,Armenia",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Tamara Hovhannisyan",
      href: "https://www.linkedin.com/in/tamara-hovhannisyan-800b552aa/",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/TamaraHovhannisyan",
    },
    {
      name: "Telegram",
      icon: "✈️",
      url: "https://t.me/venixor_studio",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-20 px-[20px] md:px-[40px] relative overflow-visible z-10 scroll-mt-32"
    >
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse z-30 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse z-30 pointer-events-none" />

      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-5xl font-bold text-pink-400">Contact Me</h2>
        <p className="text-gray-400 mt-4">
          Reach out through any of the channels below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 z-10 relative">
        <div className="bg-black/30 border border-pink-500 rounded-3xl p-6 w-full md:w-[45%] shadow-lg backdrop-blur-sm space-y-6 text-lg text-gray-300">
          {contactInfo.map((contact, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start"
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors text-center md:text-left"
              >
                <p className="text-xl">
                  {contact.icon}{" "}
                  <span className="font-semibold">{contact.label}</span>
                </p>
                <p>{contact.value}</p>
              </a>
            </div>
          ))}
        </div>

        <div className="bg-black/30 border border-pink-500 rounded-3xl p-6 w-full md:w-[35%] shadow-lg backdrop-blur-sm text-center space-y-6">
          <h3 className="text-2xl font-semibold text-pink-300">Follow Me</h3>
          <div className="flex flex-col gap-4 items-center">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-blue-400 transition-colors"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
