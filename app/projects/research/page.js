import React from "react";
import Link from "next/link";
import styles from "./classes.module.css"; // Import CSS Module
import ProjectsPage from "../page";
import Image from "next/image";

const researchProjects = [
  {
    id: 1,
    title: "Green Hydrogen Fuel Integration",
    description:
      "Analyzed the potential of integrating green hydrogen fuel cell technology in the UK transport sector to replace diesel buses, reducing greenhouse gas emissions.",
    image: "/images/green-hydrogen.jpg",
    link: "/research/green-hydrogen",
  },
  {
    id: 2,
    title: "Life Cycle Assessment of Rezon Halo Head Band",
    description:
      "Conducted a comprehensive life cycle assessment using SimaPro and GaBi ThinkStep to evaluate the environmental impact of the Rezon Halo Head Band.",
    image: "/images/lca-rezon-halo.jpg",
    link: "/research/lca-rezon",
  },
  // Add more research projects as needed
];

const ResearchProjectsPage = () => {
  return (
    <main className={styles.researchProjectsPage}>
      <h1 className={styles.title}>Research Projects</h1>
      <p className={styles.description}>
        Explore in-depth research projects focusing on sustainable development,
        lifecycle assessments, and advanced engineering solutions.
      </p>
      <div className={styles.projectList}>
        {researchProjects.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <div className={styles.projectImageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
                width={500}
                height={300}
              />
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <Link href={project.link} className={styles.projectLink}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <section className="projectExplore">
        <ProjectsPage filter="research" />
      </section>
    </main>
  );
};

export default ResearchProjectsPage;
