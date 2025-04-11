"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ProjectsSectionProps = {
  className?: string;
};

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  link: string;
  github?: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    id: "next-ventures",
    title: "Netflix clone",
    subtitle: "A fully functional netflix clone that works similar to netflix usescases.",
    description: "Developed by me as a initial project that replicates similar to netflix",
    icon: "https://ext.same-assets.com/2505313082/2116589346.svg",
    image: "data:image/png;base64,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",
    link: "https://ab-next-vel.app",
    github: "https://github.com/Are",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "zenith-minds",
    title: "Voice assistant",
    subtitle: "A voice assistant made by html css and javascript which takes command through voice",
    description: "Developed voice assistant,which execute the commands given by voice ",
    icon: "https://ext.same-assets.com/2505313082/395157150.svg",
    image: "data:image/jpeg;base64,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",
    link: "/",
    github: "https://github.com/AayushBharti/ZenithMinds",
    techStack: ["HTML","JAVASCRIPT","TAILWIND CSS","CSS"]
  },
  {
    id: "flux-lura",
    title: "password manager",
    subtitle: "Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!",
    description: "a free online tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos with ease and elevate your content instantly!..",
    icon: "https://ext.same-assets.com/2505313082/3114313562.svg",
    image: "https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg",
    link: "https://fluxlura.vercel.app",
    github: "https://github.com/AayushBharti/flux-lura",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Shadcn", "FFmpeg"]
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
  return (
    <section id="work" className={cn("py-16 relative", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-aayush-blue mb-2"
          >
            FEATURED CASE STUDIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white relative inline-block"
          >
            Curated <span className="heading-gradient">work</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                "grid grid-cols-1 md:grid-cols-12 gap-8 items-center",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              {/* Project Image */}
              <div className="md:col-span-5 relative overflow-hidden rounded-xl group">
                <Link href={project.link} target="_blank" className="block relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-aayush-blue/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                    
                  </div>
                  <div className="overflow-hidden rounded-xl border border-aayush-navyDark">
                    <div className="w-full aspect-[16/9] relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aayush-dark/90 z-[1]" />
                      <div className="absolute bottom-4 left-4 z-[2] flex gap-2 items-center">
                        
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1500}
                          height={900}
                          className="fit"
                        />
                      </div>
                      {/* Placeholder gradient for actual website screenshot */}
                      <div className="absolute inset-0 bg-gradient-to-br from-aayush-blue/30 to-purple-600/30" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Project Details */}
              <div className="md:col-span-7 space-y-4">
                <Link href={project.link} target="_blank">
                  <h3 className="text-2xl md:text-3xl font-bold text-white/90 hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-white/70">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="text-xs px-3 py-1 rounded-full bg-aayush-navyDark/50 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-aayush-blue hover:text-aayush-lightBlue transition-colors text-sm font-medium"
                    >
                      Source code
                    </Link>
                  )}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-aayush-blue hover:text-aayush-lightBlue transition-colors text-sm font-medium"
                  >
                    Website
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-16 text-center">
          <Link
            href="/project"
            className="inline-block px-6 py-3 rounded-full border border-aayush-blue text-white/90 hover:text-white hover:bg-aayush-blue/20 transition-all duration-300"
          >
            See more projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
