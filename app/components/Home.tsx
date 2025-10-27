"use client";

import { MapPin, Clock, ExternalLink, ChevronDown, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [isExperienceSectionOpen, setIsExperienceSectionOpen] = useState(false);
  const [openExperience, setOpenExperience] = useState<number | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleExperience = (index: number) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  const isOpen = (index: number) => {
    return openExperience === index;
  };

  const toggleProjectDescription = (index: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isProjectExpanded = (index: number) => expandedProjects.has(index);

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const experiences = [
  {
    company: "Mydearnikes",
    role: "Full Stack Developer & UI/UX Designer",
    year: "Aug 2025 - Present",
    logo: "/juice.png",
    details: [
      "Developed full-stack e-commerce platform with 150+ products, improving Lighthouse performance from 45 to 70 (56% improvement)",
      "Integrated Shopify Storefront API with GraphQL for real-time inventory management",
      "Designed responsive UI/UX from scratch in Figma for 10+ page templates with Framer Motion animations",
      "Optimized Core Web Vitals through code splitting and lazy loading, improving LCP by 40%",
    ],
    tech: "Next.js, TypeScript, Tailwind CSS, Shopify Storefront API, GraphQL, Framer Motion",
  },
  {
    company: "Quantum IT Innovation",
    role: "Frontend Developer Intern",
    year: "Nov 2024 - May 2025",
    logo: "https://quantumitinnovation.com/_next/image?url=%2Fassets%2Flogo-white.png&w=256&q=75",
    details: [
      "Delivered 4 custom frontend projects on WordPress, Shopify, WIX, and Webflow with 100% on-time delivery",
      "Managed client communication for 3+ concurrent projects, coordinating with 5+ team members",
      "Resolved 15+ critical production issues including PHP conflicts and plugin vulnerabilities with zero downtime",
    ],
    tech: "WordPress, Shopify, WIX, Webflow, HTML, CSS, JavaScript",
  },
  {
    company: "BirthVenue",
    role: "Frontend Developer & UI/UX Designer Intern",
    year: "Jan 2024 - Jun 2024",
    logo: "https://images.yourstory.com/cs/images/companies/birthvenue-1615811417548.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75",
    details: [
      "Designed mobile application interface and 20+ presentation deck layouts using Figma",
      "Enhanced user experience by 30% through iterative design improvements across 5+ device types",
      "Developed responsive website using ReactJS ensuring seamless performance across all devices",
    ],
    tech: "React.js, Figma, HTML, CSS, JavaScript",
  },
];

  const projects = [
    {
      title: "Mydearnikes",
      url: "https://mydearnikes.com",
      subtitle: "Full-Stack E-commerce Platform",
      description:
        "Built a performant e-commerce store with 90+ Lighthouse score. Features include product catalog, cart management, and Shopify integration, with the use of GraphQL & Storefront API.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Shopify",
        "Framer Motion",
        "GraphQL",
        "Storefront API",
      ],
      bgImage: "/nikesBg.webp",
    },
    {
      title: "Ashpm",
      url: "https://ashpm.com",
      subtitle: "Client Project - Business Application",
      description:
        "Developed during internship at Quantum IT Innovation. Worked directly with client and BA team to deliver a custom business application using WordPress as the primary technology stack.",
      tech: ["WordPress", "PHP", "JavaScript", "CSS"],
      bgImage: "/ashpm.webp",
    },
    {
      title: "Swoley Gym",
      url: "https://swoley-fit-gymapp.netlify.app/",
      subtitle: "Gym Web Application",
      description:
        "A basic gym web application built while learning React. Features workout routines, exercises, and a clean, responsive interface showcasing fundamental React concepts and Tailwind styling.",
      tech: ["ReactJS", "Tailwind CSS", "JavaScript"],
      bgImage: "/swoley.webp",
    },
  ];

  return (
    <main className="min-h-screen mx-auto px-3 lg:px-12 pt-16 lg:pt-6">
      {/* Hero Section */}
      <section className="mb-8">
        {/* Profile Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6">
          <Image
            src="/profile.webp"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* Headline */}
        <div className="text-xl md:text-2xl font-bold mb-6 text-white leading-tight">
          Developer & <span className="text-[#c77dff]">designer</span> building
          performant web experiences.
        </div>

        {/* Description */}
        <div className="text-gray-400 space-y-2 mb-6 max-w-2xl font-mono text-sm">
          <p>
            I build and ship modern web applications with Next.js, React, and
            TypeScript.
          </p>
          <p>Passionate about clean code, performance, and user experience.</p>
        </div>

        {/* Previous Work */}
        <p className="text-gray-400 mb-8 font-mono text-sm">
          Current. <span className="text-white font-medium">Mydearnikes</span>
        </p>

        {/* Location & Time */}
        <div className="flex items-center gap-6 text-sm text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>India</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{currentTime || "Loading..."}</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - ENTIRE SECTION AS ACCORDION */}
      <section className="mb-10 border-b border-gray-800">
        {/* Section Header - Clickable */}
        <button
          onClick={() => setIsExperienceSectionOpen(!isExperienceSectionOpen)}
          className="w-full flex items-center justify-between py-4 hover:bg-gray-900/30 transition-colors group"
        >
          <h2 className="text-sm text-gray-500 font-mono group-hover:text-gray-300 transition-colors tracking-tight">
            Work Experience
          </h2>
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform ${
              isExperienceSectionOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Section Content - Expandable */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExperienceSectionOpen
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-0 pb-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="border-b border-gray-800 last:border-0 overflow-hidden"
              >
                {/* Experience Item Header - Clickable */}
                <button
                  onClick={() => toggleExperience(i)}
                  className="w-full flex items-center justify-between py-4 hover:bg-gray-900/30 transition-colors group text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Company Logo */}
                    <div className="w-8 h-8 relative flex items-center justify-center bg-white/5 rounded-md overflow-hidden shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={32}
                        height={32}
                        className="object-contain p-1"
                        unoptimized={exp.logo.startsWith("http")}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium group-hover:text-[#c77dff] transition-colors font-mono text-sm">
                        {exp.company}
                      </h3>
                      <p className="text-gray-500 text-xs font-mono">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-xs font-mono">
                      {exp.year}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-500 transition-transform ${
                        isOpen(i) ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Experience Item Details - Expandable */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen(i)
                      ? "max-h-96 opacity-100 pb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pl-12 text-sm text-gray-400 font-mono space-y-2">
                    {exp.details?.map((detail, idx) => (
                      <p key={idx} className="text-xs">
                        • {detail}
                      </p>
                    ))}
                    {exp.tech && (
                      <p className="text-gray-500 mt-3 text-xs ">
                        <span className="text-gray-400">Tech:</span> {exp.tech}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-10">
        <h2 className="text-sm text-gray-500 mb-6 font-mono">
          Featured Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </Link>
                </div>
                <p className="text-gray-500 text-xs mb-4 font-mono">
                  {project.subtitle}
                </p>
                <div className="text-white font-mono text-xs">
                  <p className="inline">
                    {isProjectExpanded(index) 
                      ? project.description 
                      : truncateText(project.description)}
                  </p>
                  {project.description.length > 120 && (
                    <button
                      onClick={() => toggleProjectDescription(index)}
                      className="ml-2 text-[#c77dff] hover:text-[#b76eef] transition-colors inline"
                    >
                      {isProjectExpanded(index) ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </div>

              {/* Tech Stack - Desktop/Tablet Capsules */}
              <div className="hidden md:flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-900 text-gray-100 border border-[#c77dff]/30 rounded-full text-xs font-mono hover:border-[#c77dff] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tech Stack - Mobile Plain Text */}
              <p className="md:hidden text-gray-400 font-mono text-xs">
                <span className="text-gray-500">Tech Stack:</span> {project.tech.join(", ")}
              </p>

              {/* Project Image/Card */}
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundImage: `url('${project.bgImage}')` }}
                className="mt-5 bg-cover bg-center rounded-2xl overflow-hidden aspect-video flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer border border-gray-800"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact me */}
      <section className="mb-5 border-t border-gray-800 pt-6">
        <h2 className="text-sm text-gray-500 mb-6 font-mono">Get in Touch</h2>
        
        <div className="space-y-4">
          <p className="text-gray-400 font-mono text-sm max-w-2xl">
            Interested in working together? Have a project in mind? Feel free to reach out!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:dev.vinaynain@gmail.com"
              className="px-6 py-3 text-white rounded-lg font-mono text-sm border-gray-800 border hover:border-[#c77dff] transition-colors inline-flex items-center gap-2"
            >
               <Mail size={16}/>
              Email Me
            </Link>
            
            <Link
              href="https://wa.me/919517930608"
              className="px-6 py-3 text-white border border-gray-800 rounded-lg font-mono text-sm hover:border-[#c77dff] transition-colors inline-flex items-center gap-2"
            >
              <Phone size={16}/> +91 9517930608
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}