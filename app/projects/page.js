import Link from "next/link";
import styles from "./projectsPage.module.css";

export const metadata = {
  title: "Projects | Gabriel Egwu",
  description:
    "Explore a diverse range of projects developed by Gabriel Egwu, showcasing expertise in full-stack, frontend, backend development, engineering, and research.",
};

export default function ProjectsPage({ filter }) {
  const projectsList = [
    { title: "Frontend Projects", link: "/projects/frontend" },
    { title: "Backend Projects", link: "/projects/backend" },
    { title: "Fullstack Projects", link: "/projects/fullstack" },
    { title: "Engineering Projects", link: "/projects/engineering" },
    { title: "Research Projects", link: "/projects/research" },
  ];
  if (filter) {
    const projectFilter = projectsList.filter(
      (project) =>
        !project.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <main className="viewMoreListContainer">
        <h3
          className={styles.title}
          style={{ textAlign: "left", fontSize: "1.8rem" }}
        >
          More Projects
        </h3>
        <p style={{ textAlign: "left" }}>
          Explore more of my work. Click on a category to dive deeper!{" "}
        </p>
        <ul className="viewMoreLists">
          {projectFilter.map((proj, index) => (
            <li key={index}>
              <Link href={proj.link}>{proj.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  } else {
    return (
      <main className={styles.projectsPage}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.description}>
          Explore my portfolio of work, categorized into different domains.
          Click on a category to dive deeper!{" "}
        </p>
        <ul className={styles.categories}>
          {projectsList.map((project, index) => (
            <li key={index} className={styles.categoryItem}>
              <Link href={project.link} className={styles.category}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
