"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          MovieBlitz
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ZulfikarAzmi/next-movie-app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
