"use client";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 border-t border-pink-500 mt-20 z-10 relative">
      <p className="text-sm">
        © {new Date().getFullYear()} Tamara Hovhannisyan.
      </p>
      <p className="text-xs mt-1">Built with ❤️ using Next.js & TailwindCSS.</p>
    </footer>
  );
};

export default Footer;
