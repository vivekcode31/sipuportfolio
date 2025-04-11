"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-aayush-dark border-t border-aayush-navyDark pt-16 pb-8", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Sipu kumar</h2>
            <p className="text-sm text-white/70 max-w-xs">
              Help you create experiences where aesthetics & functionality seamlessly come together.
            </p>
            <div className="flex items-center space-x-3 mt-3">
              <Link
                href="https://www.linkedin.com/in/sipu-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
              <Link
                href="https://x.com/"
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
              <Link
                href="https://bsky.app/profile/aayushbharti.bsky.l"
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm8.07 7.282L8.646 18.706c-.247.247-.557.421-.989.421-.796 0-1.293-.557-1.293-1.293 0-.278.108-.556.248-.773L16.694 5.784c.363-.33.731-.5 1.262-.5.793 0 1.324.526 1.324 1.325-.001.2-.062.463-.309.673zm-4.467 7.107c0 1.581-1.171 2.593-3.206 2.593-1.874 0-3.13-1.048-3.296-2.625h1.95c.094.763.64 1.152 1.389 1.152.763 0 1.265-.42 1.265-1.016 0-.598-.454-.951-1.2-.951h-.763v-1.467h.763c.64 0 1.048-.362 1.048-.887 0-.557-.44-.904-1.08-.904-.67 0-1.095.362-1.189 1.016h-1.858c.094-1.499 1.368-2.531 3.109-2.531 1.795 0 2.953.951 2.953 2.375 0 .815-.362 1.454-1.048 1.844.772.33 1.163.993 1.163 1.901z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* General Links Column */}
          <div className="space-y-4">
            <h3 className="text-white/90 font-medium">General</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/project" className="text-white/70 hover:text-white transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* The Website Links Column */}
          <div className="space-y-4">
            <h3 className="text-white/90 font-medium">The Website</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guestbook" className="text-white/70 hover:text-white transition-colors text-sm">
                  Guest Book
                </Link>
              </li>
              <li>
                <Link href="/bucket-list" className="text-white/70 hover:text-white transition-colors text-sm">
                  Bucket List
                </Link>
              </li>
              <li>
                <Link href="/links" className="text-white/70 hover:text-white transition-colors text-sm">
                  Links
                </Link>
              </li>
              <li>
                <Link href="/cal" className="text-white/70 hover:text-white transition-colors text-sm">
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 border-t border-aayush-navyDark pt-6">
          <p className="text-white/90 mb-4">
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
          <a
            href="mailto:hello@ati.in?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
            className="text-aayush-blue hover:text-aayush-lightBlue flex items-center transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            sipuk1896@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-white/60 text-sm">
          <p>Copyright © 2025 Sipu kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
