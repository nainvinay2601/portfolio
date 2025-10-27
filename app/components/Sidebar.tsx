"use client";

import { useState } from "react";
import { FileText, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-black border-b border-gray-800">
        <div className="flex items-center justify-between px-3 py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <h1 className="text-white text-sm hover:text-gray-300 transition">
              Vinay Nain
            </h1>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg hover:bg-gray-800 text-white transition"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-80 bg-black border-r border-zinc-900 text-gray-300 z-40
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-3 pt-20 lg:pt-6">
          {/* Header - Desktop Only */}
          <div className="mb-8 hidden lg:block">
            <Link
              href="/"
              className="flex items-center gap-3 mb-2 hover:opacity-80 transition"
            >
              <h1 className="text-white text-sm">Vinay Nain.</h1>
            </Link>
          </div>

          {/* Projects Section */}
          <div className="mb-8">
            <h3 className="text-gray-400  text-xs mb-1">Projects</h3>
            <nav className="text-sm tracking-tight font-mono">
              <Link
                href="https://mydearnikes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Mydearnikes
              </Link>
              <Link
                href="https://ashpm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Ashpm
              </Link>
              <Link
                href="https://swoley-fit-gymapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Swoley Gym
              </Link>
              <Link
                href="https://simongamechlnge.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Simon Says Game
              </Link>
              <Link
                href="https://bbscosmetic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                BB Cosmetics
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-gray-400 text-xs mb-1">Contact</h3>
            <nav className="font-mono text-sm">
              <Link
                href="mailto:dev.vinaynain@gmail.com"
                className="flex items-center gap-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <Mail size={12} className="text-white" />
                <span>Email</span>
              </Link>
              <Link
                href="https://linkedin.com/in/vinaynain26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <Linkedin size={12} />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/@nainvinay26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-gray-500">𝕏</span>
                <span>X</span>
              </Link>
              <Link
                href="https://github.com/nainvinay2601"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-gray-500">
                  <Github size={12} />
                </span>
                <span>Github</span>
              </Link>
              <Link
                href="/Vinay_Nain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <FileText size={12} />
                <span>Resume</span>
              </Link>
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-gray-800">
            <p className="text-gray-100 text-xs font-mono tracking-tight">
              © Vinay Nain, 2025
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
