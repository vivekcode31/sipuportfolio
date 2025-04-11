"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  title: string;
  description: string;
};

type ServicesSectionProps = {
  className?: string;
};

const services: Service[] = [
  {
    id: "subscription-management",
    title: "Subscription Management",
    description: "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience.",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Provides real-time insights into user behavior, system performance, and key business metrics.",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Unified design assets, including logos and themes, ensuring consistent branding across the platform.",
  },
  {
    id: "api-documentation",
    title: "API Documentation",
    description: "Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices.",
  },
  {
    id: "user-onboarding",
    title: "User Onboarding",
    description: "Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits.",
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={cn("py-16 relative", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-aayush-navyDark/30 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 relative",
                hoveredIndex === index
                  ? "border-aayush-blue shadow-lg shadow-aayush-blue/10"
                  : "border-aayush-navyDark/50",
                hoveredIndex !== null && hoveredIndex !== index ? "opacity-70" : "opacity-100"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-lg font-medium text-white mb-3">{service.title}</h3>
              <p className="text-white/70 text-sm">
                <span className="text-aayush-blue font-semibold">&gt; </span>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Inside Scoop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-aayush-navyDark/30 backdrop-blur-sm rounded-xl p-6 border border-aayush-navyDark/50 mt-8"
        >
          <h3 className="text-lg font-medium text-white mb-2">The Inside Scoop</h3>
          <p className="text-white/70 mb-4">
            Currently building a Saas Application
          </p>
          <a
            href="/#work"
            className="text-aayush-blue hover:text-aayush-lightBlue font-medium inline-flex items-center"
          >
            View Recent work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
