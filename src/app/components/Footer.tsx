// src/components/Footer.tsx
"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        {/* Left: Brand */}
        <div>
          <h2 className="text-xl font-bold">MovieBlitz</h2>
          <p className="text-sm text-gray-400">All Movies. One Blitz.</p>
          <p className="text-sm mt-2">
            Made with ❤️ by <span className="font-semibold">Zulfikar</span>
          </p>
        </div>

        {/* Center: Attribution */}
        <div className="text-xs text-gray-400 whitespace-nowrap">
          This website uses the TMDB API but is not endorsed or certified by TMDB.
        </div>

        {/* Right: Socials */}
        <div className="flex justify-center md:justify-end gap-4">
          <Link
            href="https://github.com/ZulfikarAzmi/next-movie-app"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/zulfikar-azmi/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            <FaLinkedin /> LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
