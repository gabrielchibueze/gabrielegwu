import CtaButton from "@/components/buttons/ctabuttonlink";
import ProjectsPage from "../page";
import styles from "./classes.module.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Backend Projects | Gabriel Egwu",
  description:
    "Explore backend projects developed by Gabriel Egwu, showcasing expertise in Node.js, Express.js, MongoDB, and building scalable server-side applications.",
};

export default function BackendProjects() {
  const projects = [
    {
      title: "Authentication Service",
      description:
        "Built a secure authentication and authorization service using Node.js, Express, and JWT for token management.",
      tech: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/username/auth-service",
      projectlink: "https://auth-service-demo.com",
    },
    {
      title: "File Upload API",
      description:
        "Created an API for secure file uploads to AWS S3 with user authentication and access control.",
      tech: ["Node.js", "AWS S3", "MongoDB"],
      githubLink: "https://github.com/username/file-upload-api",
      projectlink: "https://file-upload-demo.com",
    },
    {
      title: "E-Commerce Backend",
      description:
        "Developed a scalable backend for e-commerce platforms with product, cart, and order management features.",
      tech: ["Node.js", "PostgreSQL", "GraphQL"],
      githubLink: "https://github.com/username/ecommerce-backend",
      projectlink: "https://ecommerce-backend-demo.com",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Implemented a real-time chat application backend using WebSocket and Redis for efficient messaging.",
      tech: ["Node.js", "WebSocket", "Redis"],
      githubLink: "https://github.com/username/chat-backend",
      projectlink: "https://chat-backend-demo.com",
    },
    {
      title: "Analytics Dashboard API",
      description:
        "Designed an API for a data analytics dashboard with role-based access and dynamic reports.",
      tech: ["Node.js", "MySQL", "Docker"],
      githubLink: "https://github.com/username/analytics-api",
      projectlink: "https://analytics-demo.com",
    },
    {
      title: "Task Scheduler Service",
      description:
        "Created a task scheduling service to run background jobs using Node.js and BullMQ.",
      tech: ["Node.js", "BullMQ", "Redis"],
      githubLink: "https://github.com/username/task-scheduler",
      projectlink: "https://task-scheduler-demo.com",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Integrated third-party payment gateways into backend services, ensuring secure and efficient transactions.",
      tech: ["Node.js", "Stripe", "PayPal API"],
      githubLink: "https://github.com/username/payment-gateway",
      projectlink: "https://payment-demo.com",
    },
    {
      title: "Inventory Management System",
      description:
        "Built a backend system for tracking inventory with RESTful APIs and real-time stock updates.",
      tech: ["Node.js", "MongoDB", "Socket.IO"],
      githubLink: "https://github.com/username/inventory-management",
      projectlink: "https://inventory-demo.com",
    },
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Backend Projects</h1>
      <p className={styles.description}>
        Explore my collection of Bacxkend projects, showcasing expertise in
        modern technologies and clean design principles.
      </p>
      <div className={styles.projectsWrapper}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="coloredTexts">
                <ul>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="projectLinks">
              <div>
                <CtaButton
                  action={project.projectlink}
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
        ))}
      </div>
      <section className="projectExplore">
        <ProjectsPage filter="backend" />
      </section>
    </main>
  );
}
