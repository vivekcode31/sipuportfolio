"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, px } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  className?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn("min-h-screen pt-32 relative", className)}>
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          {/* Announcement Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-aayush-navyDark/40 backdrop-blur-sm w-fit rounded-full px-4 py-1 border border-aayush-blue/20"
          >
           
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            I am a software developer which adapts very well in any{" "}
            <span className="heading-gradient">situations</span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
          >
            <h2 className="text-lg sm:text-xl text-white/80">
              Hello, I&apos;m Sipu kumar
              <Image
                src="https://ext.same-assets.com/2505313082/924496316.gif"
                alt="Hand wave"
                width={20}
                height={20}
                className="inline-block ml-1"
              />
            </h2>
            <span className="text-white/60">a Full Stack Developer</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/cal"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Let&apos;s Connect
              <Image
                src="https://ext.same-assets.com/2505313082/2563901416.svg"
                alt="Connect icon"
                width={16}
                height={16}
              />
            </Link>
          </motion.div>
        </div>

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            {/* Connection dots */}
           

            {/* Profile Image */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-aayush-navyDark/30 backdrop-blur-sm z-10 mx-auto">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQHFRulXSgrKvQ/profile-displayphoto-shrink_400_400/B4DZP4ar3wHcAg-/0/1735039566903?e=1749686400&v=beta&t=6xkuCzwW3XgBBSdZf3Y0FuM1YCPg-Ro10U2RILD-nRY"       
                alt="sipu picture"
                fill
                className="object-cover"
              />
            </div>

            {/* Connection Images */}
            

           
          </div>
        </motion.div>
      </div>

      {/* Services Highlights */}
      <div className="container mx-auto px-4 mt-12 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Collaboration Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-aayush-navyDark/30 backdrop-blur-sm rounded-xl p-6 border border-aayush-navyDark/50"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
            <p className="text-white/70 mb-4">
              I prioritize client collaboration, fostering open communication
            </p>
            <Link href="/cal" className="text-aayush-blue hover:text-aayush-lightBlue font-medium inline-flex items-center">
              
            </Link>
          </motion.div>

          {/* Remote Work Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-aayush-navyDark/30 backdrop-blur-sm rounded-xl p-6 border border-aayush-navyDark/50"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Remote</h3>
            <p className="text-white/70 mb-4">
              I&apos;m very flexible with time zone communications
            </p>
            <div className="text-aayush-blue font-medium">
              India - {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
            </div>
            <Link href="/cal" className="text-aayush-blue hover:text-aayush-lightBlue font-medium inline-flex items-center mt-3">
              
            </Link>
          </motion.div>

          {/* Tech Enthusiast Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-aayush-navyDark/30 backdrop-blur-sm rounded-xl p-6 border border-aayush-navyDark/50"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Tech Enthusiast</h3>
            <p className="text-white/70 mb-4">
              Passionate about cutting-edge development technologies
            </p>
            <Link href="/#skills" className="text-aayush-blue hover:text-aayush-lightBlue font-medium inline-flex items-center">
              
            </Link>
          </motion.div>
        </div>

        {/* CTA Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 mb-24"
        >
          <Link href="/cal" className="text-white/90 hover:text-white text-lg transition-colors">
            Let&apos;s work together on your next project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
