"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-aayush-dark/80 backdrop-blur-md py-3"
          : "bg-transparent py-4",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className="text-white">SK</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-1"
        >
          <Link href="/" className="nav-item text-white/90">
            Home
          </Link>
          <Link href="/project" className="nav-item text-white/90">
            Work
          </Link>
          <Link href="/about" className="nav-item text-white/90">
            About
          </Link>
          <Link href="/blog" className="nav-item text-white/90">
            Blog
          </Link>
          <div className="relative group">
            <button className="nav-item text-white/90">
              More
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-aayush-darkBg border border-aayush-navyDark rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/guestbook" className="block px-4 py-2 text-sm text-white/90 hover:bg-aayush-navyDark hover:text-white">
                  Guest Book
                </Link>
                <Link href="/bucket-list" className="block px-4 py-2 text-sm text-white/90 hover:bg-aayush-navyDark hover:text-white">
                  Bucket List
                </Link>
                <Link href="/links" className="block px-4 py-2 text-sm text-white/90 hover:bg-aayush-navyDark hover:text-white">
                  Links
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Book a Call Button */}
        

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="block md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-aayush-darkBg border-t border-aayush-navyDark md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <Link
                href="/"
                className="text-white/90 py-2 border-b border-aayush-navyDark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/project"
                className="text-white/90 py-2 border-b border-aayush-navyDark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-white/90 py-2 border-b border-aayush-navyDark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-white/90 py-2 border-b border-aayush-navyDark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/guestbook"
                className="text-white/90 py-2 border-b border-aayush-navyDark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Guest Book
              </Link>
              <Link
                href="/bucket-list"
                className="text-white/90 py-2 border-b border-aayush-navyDark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bucket List
              </Link>
              <Link
                href="/links"
                className="text-white/90 py-2 border-b border-aayush-navyDark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Links
              </Link>
              
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
