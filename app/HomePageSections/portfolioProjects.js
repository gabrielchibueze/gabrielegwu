"use client";
import Link from "next/link";
import classes from "./portfolioProjects.module.css";
import { GrFormCheckmark } from "react-icons/gr";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import CtaButton from "@/components/buttons/ctabuttonlink";
import { ArrowRight } from "@mui/icons-material";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SingleHeadedLists from "@/components/headedLists/singleHeadedLists";
import { useEffect, useState } from "react";
export default function PortfolioProjects() {
  const portfolioProjects = {
    caption: "Empowering Ideas Through Code",
    heading: "Portfolio of Cutting-Edge Projects and Solutions",
    articles: [
      {
        title: "Collaborative Development Platform",
        content:
          "An advanced task management platform that enables seamless collaboration across remote teams. Built with Next.js and integrated with real-time WebSocket communication.",
        tools: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
        image: "/projects/images/nedgab-consults.png",
        projectLink: "/projects/collaboration-platform",
        githubLink: "https://github.com/yourusername/collaboration-platform",
      },
      {
        title: "AI-Powered Analytics Dashboard",
        content:
          "A comprehensive dashboard that utilizes AI models to generate actionable business insights, featuring dynamic data visualization with D3.js.",
        tools: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
        image: "/images/social2.jpg",
        projectLink: "/projects/ai-dashboard",
        githubLink: "https://github.com/yourusername/ai-dashboard",
      },
      {
        title: "E-Commerce Ecosystem",
        content:
          "A robust, scalable e-commerce platform supporting multi-vendor functionality, secure payment integrations, and dynamic inventory management.",
        tools: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
        image: "/projects/images/nedgab-consults.png",
        projectLink: "/projects/ecommerce-ecosystem",
        githubLink: "https://github.com/yourusername/ecommerce-ecosystem",
      },
      {
        title: "Interactive Educational Platform",
        content:
          "A gamified learning application designed to make technical concepts engaging and interactive. Includes custom animations and real-time performance tracking.",
        tools: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
        image: "/projects/images/nedgab-consults.png",
        projectLink: "/projects/interactive-education",
        githubLink: "https://github.com/yourusername/interactive-education",
      },
      {
        title: "Sustainable Engineering Tools",
        content:
          "Software designed for engineering analysis and sustainability assessments, integrated with OpenLCA for environmental impact evaluations.",
        tools: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
        image: "/projects/images/nedgab-consults.png",
        image: "/images/social2.jpg",
        projectLink: "/projects/portfolio-showcase",

        githubLink: "https://github.com/yourusername/sustainable-engineering",
      },
      {
        title: "Personalized Portfolio Showcase",
        content:
          "A sleek, responsive portfolio that dynamically highlights your skills, projects, and professional growth. Developed with cutting-edge React and Next.js features.",
        tools: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
        image: "/projects/images/nedgab-consults.png",
        projectLink: "/projects/portfolio-showcase",
        githubLink: "https://github.com/yourusername/portfolio-showcase",
      },
    ],
  };
  const [imagePreview, setImagePreview] = useState(null);
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  useEffect(() => {
    if (imagePreview) {
      setIsPreviewImage(true);
    } else {
      setIsPreviewImage(false);
    }
  }, [imagePreview]);
  return (
    <main className={classes.engineeringProjectsPage}>
      {isPreviewImage && (
        <dialog className="dialog">
          <section className="imagePreview">
            <p
              className="closePreviewModal"
              onClick={() => setImagePreview(null)}
            >
              Close Modal
            </p>
            <h3>{imagePreview?.title}</h3>

            <div className="imageContainer">
              <Image src={imagePreview?.image} alt={imagePreview.title} fill />
            </div>
            <p>{imagePreview?.content}</p>
          </section>
        </dialog>
      )}
      <p className={classes.description}>{portfolioProjects.caption}</p>
      <h1 className={classes.title}>{portfolioProjects.heading}</h1>

      <div className={classes.projectGrid}>
        {portfolioProjects.articles.map((project, index) => (
          <div key={index} className={classes.projectCard}>
            <div
              className={classes.projectImageWrapper}
              onClick={() => setImagePreview(project)}
            >
              {/* Optional: You can add an image here if desired */}
              <img
                className={classes.projectImage}
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className={classes.projectContent}>
              <h2 className={classes.projectTitle}>
                <Link
                  href={project.projectLink}
                  className={classes.projectLink}
                >
                  {project.title}
                </Link>
              </h2>
              <p className={classes.projectDescription}>{project.content}</p>
              {/* <div style={{ marginLeft: "1rem" }}>
                  <SingleHeadedLists lists={project.tools} type="highlights" />
                </div> */}
              <div className="coloredTexts">
                <ul>
                  {project.tools.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="projectLinks">
                <div>
                  <CtaButton
                    action={project.projectLink}
                    target="_blank"
                    design="underlined"
                    type="link"
                  >
                    <div className="textWithIcon">
                      <span>Visit Site</span>
                      <h3>
                        <MdOutlineArrowRightAlt />
                      </h3>
                    </div>
                  </CtaButton>
                </div>

                <Link href={project.githubLink} className="githubLink">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: "2rem auto 1rem 0" }}>
        <CtaButton type="link" action="/projects" design="transparent">
          Explore More Projects
        </CtaButton>
      </div>
    </main>
  );
}
