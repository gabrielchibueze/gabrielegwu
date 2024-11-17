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
        image: "/projects/images/nedgab-consults.png",
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
        projectLink: "/projects/sustainable-engineering",
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
    <div className={classes.portfolioProjects}>
      {isPreviewImage && (
        <dialog className="dialog">
          <section className="imagePreview">
            <h1
              className="closePreviewModal"
              onClick={() => setImagePreview(null)}
            >
              Close Modal
            </h1>
            <h2>{imagePreview?.title}</h2>

            <div className="imageContainer">
              <Image src={imagePreview?.image} fill />
            </div>
            <p>{imagePreview?.content}</p>
          </section>
        </dialog>
      )}
      <div className={classes.header}>
        <p>{portfolioProjects.caption}</p>
        <h1>{portfolioProjects.heading}</h1>
      </div>
      <ul className={classes.portfolioContents}>
        {portfolioProjects.articles.map((article) => {
          return (
            <li key={article.title}>
              <div className={classes.portfolioBottom}>
                <div>
                  <h2
                    // style={{ cursor: "pointer" }}
                    onClick={() => setImagePreview(article)}
                  >
                    {article.title}
                  </h2>
                  <p style={{ marginTop: "0.5rem" }}>{article.content}</p>
                  <SingleHeadedLists lists={article.tools} type="highlights" />
                </div>
                <div className={classes.projectLinks}>
                  <Link
                    href={article.projectLink}
                    className={classes.projectLink}
                  >
                    <div className={classes.moreProjectsBtn}>
                      <span> Visit site</span>
                      <h1>
                        <MdOutlineArrowRightAlt />
                      </h1>
                    </div>
                  </Link>
                  <Link
                    href={article.githubLink}
                    className={classes.githubLink}
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
              <div
                className={classes.aboutImage}
                onClick={() => setImagePreview(article)}
              >
                <Image src={article.image} fill alt={article.title} />
              </div>
            </li>
          );
        })}
      </ul>
      <div style={{ marginRight: "auto", marginTop: "-1rem" }}>
        <CtaButton
          action="/projects" // Update to your email
          design="raised"
          type="link"
        >
          <div className={classes.moreProjectsBtn}>
            <span> MORE PROJECTS</span>
            <h1>
              <MdOutlineArrowRightAlt />
            </h1>
          </div>
        </CtaButton>
      </div>
    </div>
  );
}
