"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ContactCTAProps = {
  className?: string;
};

const ContactCTA: React.FC<ContactCTAProps> = ({ className }) => {
  return (
    <section className={cn("py-16 relative", className)}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aayush-navyDark to-aayush-navyDeep p-8 md:p-12">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://ext.same-assets.com/2505313082/2245949176.svg"
              alt="Wings pattern"
              fill
              className="object-cover"
            />
          </div>

          {/* Animated dots */}
          <div className="absolute top-12 right-12 size-40 rounded-full bg-aayush-blue/20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-8 left-8 size-32 rounded-full bg-aayush-blue/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center md:justify-start gap-2 mb-2"
              >
                <span className="inline-flex items-center justify-center bg-aayush-blue/30 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  OPEN TO WORK
                </span>
                <span className="inline-flex items-center justify-center bg-aayush-blue/30 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  OPEN TO WORK
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl font-bold text-white mb-1"
              >
                FROM CONCEPT TO CREATION
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-bold text-white"
              >
                LET&apos;S MAKE IT HAPPEN!
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full md:w-auto"
            >
              <Link
                href="/cal"
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-aayush-navyDark rounded-full px-6 py-3 font-medium transition-colors duration-300"
              >
                Get In Touch
                <Image
                  src="https://ext.same-assets.com/2505313082/3716944837.svg"
                  alt="Arrow right"
                  width={16}
                  height={16}
                />
                <Image
                  src="https://ext.same-assets.com/2505313082/322207032.svg"
                  alt="Send message"
                  width={16}
                  height={16}
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10 mt-8 text-white/70 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
          >
            <p>I&apos;m available for full-time roles & freelance projects.</p>
            <p>I thrive on crafting dynamic web applications, and delivering seamless user experiences.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
