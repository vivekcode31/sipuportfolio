"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlignCenter } from "lucide-react";

type AboutSectionProps = {
  className?: string;
};

type Skill = {
  id: string;
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { id: "html", name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { id: "css", name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
  { id: "javascript", name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { id: "typescript", name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { id: "react", name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
  { id: "nextjs", name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { id: "tailwind", name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { id: "framer", name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
  { id: "shadcn", name: "Shadcn", icon: "https://cdn.simpleicons.org/radixui" },
  { id: "nodejs", name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { id: "express", name: "ExpressJS", icon: "https://cdn.simpleicons.org/express" },
  { id: "mongodb", name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
];

const traits = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging"
];

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={cn("py-16 relative", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-aayush-blue mb-2"
          >
            MORE ABOUT ME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-white relative inline-block mb-16"
          >
            Full-Stack Developer and a little bit of everything
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-lg"
              
              
            >
              
              I'm SIPU KUMAR, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/80 text-lg"
            >
              When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/80 text-lg font-medium italic"
            >
              I believe in waking up each day eager to make a difference!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="https://www.linkedin.com/in/sipu-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </Link>
              <Link
                href="https://github.com/aayushbharti"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </Link>
              <Link
                href="https://x.com/"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                Twitter
              </Link>
              <Link
                href="https://bsky.app/profile/aayushbhar"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm8.07 7.282L8.646 18.706c-.247.247-.557.421-.989.421-.796 0-1.293-.557-1.293-1.293 0-.278.108-.556.248-.773L16.694 5.784c.363-.33.731-.5 1.262-.5.793 0 1.324.526 1.324 1.325-.001.2-.062.463-.309.673zm-4.467 7.107c0 1.581-1.171 2.593-3.206 2.593-1.874 0-3.13-1.048-3.296-2.625h1.95c.094.763.64 1.152 1.389 1.152.763 0 1.265-.42 1.265-1.016 0-.598-.454-.951-1.2-.951h-.763v-1.467h.763c.64 0 1.048-.362 1.048-.887 0-.557-.44-.904-1.08-.904-.67 0-1.095.362-1.189 1.016h-1.858c.094-1.499 1.368-2.531 3.109-2.531 1.795 0 2.953.951 2.953 2.375 0 .815-.362 1.454-1.048 1.844.772.33 1.163.993 1.163 1.901z" />
                </svg>
                Bluesky
              </Link>
            </motion.div>
          </div>

          
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-aayush-blue mb-2">
              I constantly try to improve
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              My Tech Stack
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-aayush-navyDark/20 hover:bg-aayush-navyDark/40 transition-colors"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="text-white"
                />
                <span className="text-white/80 text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-aayush-navyDark/30 text-white/80 text-sm"
              >
                {trait}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-aayush-blue"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
