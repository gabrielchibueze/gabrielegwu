import Link from "next/link";
import Image from "next/image";
import styles from "./classes.module.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CtaButton from "@/components/buttons/ctabuttonlink";
import ProjectsPage from "../page";

export const metadata = {
  title: "Frontend Projects | Gabriel Egwu",
  description:
    "Discover frontend projects built by Gabriel Egwu, featuring dynamic user interfaces and modern web technologies such as React, Next.js, and TailwindCSS.",
};

export default function FrontendProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a responsive personal portfolio using Next.js. Features a smooth user interface and dynamic project display.",
      tech: ["Next.js", "React", "CSS Modules"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
    {
      title: "E-Commerce Storefront",
      description:
        "Built a modern e-commerce frontend with React, implementing reusable components and optimized performance.",
      tech: ["React", "Redux", "SASS"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
    {
      title: "Weather Dashboard",
      description:
        "Created an interactive weather dashboard with live updates using OpenWeather API integration.",
      tech: ["JavaScript", "HTML5", "CSS3", "API"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
    {
      title: "Task Management App",
      description:
        "Developed a task manager with drag-and-drop functionality for an intuitive user experience.",
      tech: ["React", "TypeScript", "CSS-in-JS"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
    {
      title: "Restaurant Landing Page",
      description:
        "Designed a visually appealing restaurant landing page, optimized for SEO and performance.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
    {
      title: "Interactive Quiz App",
      description:
        "Built a responsive quiz application with customizable categories and real-time score tracking.",
      tech: ["React", "Material-UI"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
    {
      title: "Blog Platform UI",
      description:
        "Created a user-friendly blog platform with rich text editor and responsive design.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
    {
      title: "Travel Planner Website",
      description:
        "Developed a travel planning web app with custom maps and location search.",
      tech: ["React", "Leaflet", "Bootstrap"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/ecommerce-store",
      image: "/images/social2.jpg",
    },
  ];

  return (
    <main className={styles.frontendProjectsPage}>
      <h1 className={styles.title}>Frontend Projects</h1>
      <p className={styles.description}>
        Explore my collection of frontend projects, showcasing expertise in
        modern technologies and clean design principles.
      </p>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
              <div className="coloredTexts">
                <ul>
                  {project.tech.map((tech, i) => (
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
        <section className="projectExplore">
          <ProjectsPage filter="frontend" />
        </section>
      </div>
    </main>
  );
}
