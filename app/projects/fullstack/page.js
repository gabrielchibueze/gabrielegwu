import Link from "next/link";
import Image from "next/image";
import styles from "../frontend/classes.module.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CtaButton from "@/components/buttons/ctabuttonlink";
import ProjectsPage from "../page";

export const metadata = {
  title: "Full-Stack Projects | Gabriel Egwu",
  description:
    "Browse full-stack projects developed by Gabriel Egwu, demonstrating proficiency in building end-to-end applications with modern frontend and backend technologies.",
};

export default function FullstackProjectsPage() {
  const projects = [
    {
      title: "Fullstack E-commerce App",
      description:
        "Developed a fully functional e-commerce platform with user authentication, product management, and payment gateway integration.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/yourgithub/fullstack-ecommerce",
      image: "/images/social2.jpg",
    },
    {
      title: "Social Media Platform",
      description:
        "Created a social media app with real-time chat, post sharing, and notification features.",
      tech: ["React", "Express.js", "Socket.IO"],
      projectLink: "https://social-platform-example.com",
      githubLink: "https://github.com/yourgithub/social-platform",
      image: "/images/social2.jpg",
    },
    {
      title: "Project Management Tool",
      description:
        "Built a project management application with task assignment, deadlines, and collaboration tools.",
      tech: ["React", "Node.js", "PostgreSQL"],
      projectLink: "https://project-management-example.com",
      githubLink: "https://github.com/yourgithub/project-management-tool",
      image: "/images/social2.jpg",
    },
    {
      title: "Online Learning Platform",
      description:
        "Developed an online course platform with video streaming, progress tracking, and user reviews.",
      tech: ["Vue.js", "Firebase", "Stripe"],
      projectLink: "https://learning-platform-example.com",
      githubLink: "https://github.com/yourgithub/online-learning-platform",
      image: "/images/social2.jpg",
    },
    {
      title: "Blog CMS",
      description:
        "Designed a content management system for bloggers with rich text editing, post scheduling, and analytics.",
      tech: ["Next.js", "GraphQL", "Prisma"],
      projectLink: "https://blog-cms-example.com",
      githubLink: "https://github.com/yourgithub/blog-cms",
      image: "/images/social2.jpg",
    },
    {
      title: "Real Estate Marketplace",
      description:
        "Built a platform for property listings with advanced search filters and map integration.",
      tech: ["Angular", "Spring Boot", "MySQL"],
      projectLink: "https://real-estate-example.com",
      githubLink: "https://github.com/yourgithub/real-estate-marketplace",
      image: "/images/social2.jpg",
    },
    {
      title: "Health Tracker App",
      description:
        "Developed a health tracking app with exercise logs, diet tracking, and goal-setting features.",
      tech: ["React Native", "Django", "SQLite"],
      projectLink: "https://health-tracker-example.com",
      githubLink: "https://github.com/yourgithub/health-tracker",
      image: "/images/social2.jpg",
    },
    {
      title: "Travel Booking App",
      description:
        "Created a travel booking app with itinerary planning and user reviews.",
      tech: ["React", "Node.js", "MongoDB"],
      projectLink: "https://travel-booking-example.com",
      githubLink: "https://github.com/yourgithub/travel-booking",
      image: "/images/social2.jpg",
    },
    {
      title: "Event Management Platform",
      description:
        "Built an event management tool with ticketing, RSVPs, and live updates.",
      tech: ["Next.js", "Express.js", "MongoDB"],
      projectLink: "https://event-management-example.com",
      githubLink: "https://github.com/yourgithub/event-management",
      image: "/images/social2.jpg",
    },
    {
      title: "Job Board Platform",
      description:
        "Designed a job board with advanced search, resume uploads, and job recommendations.",
      tech: ["Vue.js", "Flask", "PostgreSQL"],
      projectLink: "https://job-board-example.com",
      githubLink: "https://github.com/yourgithub/job-board",
      image: "/images/social2.jpg",
    },
  ];

  return (
    <main className={styles.frontendProjectsPage}>
      <h1 className={styles.title}>Fullstack Projects</h1>
      <p className={styles.description}>
        Discover my collection of fullstack projects, highlighting my expertise
        in both frontend and backend development.
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
                      <h1>
                        <MdOutlineArrowRightAlt />
                      </h1>
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
      <section className="projectExplore">
        <ProjectsPage filter="fullstack" />
      </section>
    </main>
  );
}
