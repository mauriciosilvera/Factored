"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#0a0a0a] border-b-2 border-white/20 p-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex gap-12">
          <Link
            href="/"
            className={`hover:text-yellow-400 transition-colors ${
              pathname === "/" ? "text-yellow-400 font-bold" : "text-white/70"
            }`}
          >
            Home
          </Link>
          <Link
            href="/characters"
            className={`hover:text-yellow-400 transition-colors ${
              pathname === "/characters"
                ? "text-yellow-400 font-bold"
                : "text-white/70"
            }`}
          >
            Characters
          </Link>
          <Link
            href="/films"
            className={`hover:text-yellow-400 transition-colors ${
              pathname === "/films"
                ? "text-yellow-400 font-bold"
                : "text-white/70"
            }`}
          >
            Films
          </Link>
          <Link
            href="/about"
            className={`hover:text-yellow-400 transition-colors ${
              pathname === "/about"
                ? "text-yellow-400 font-bold"
                : "text-white/70"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
