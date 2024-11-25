import React from "react";
import styles from "./classes.module.css"; // Importing the CSS module for styling
import SingleHeadedLists from "@/components/headedLists/singleHeadedLists";
import ResumePage from "../page";

export const metadata = {
  title: "Technology | Gabriel Egwu",
  description:
    "Explore the technologies and tools Gabriel Egwu utilizes, including frontend, backend, hosting platforms, and deployment services.",
};

const TechnologyPage = () => {
  const technologies = [
    {
      title: "Frontend Technologies",
      description:
        "The tools and frameworks I use for building modern and responsive user interfaces.",
      items: ["React", "Next.js", "HTML5", "CSS3", "SASS", "Tailwind CSS"],
    },
    {
      title: "Backend Technologies",
      description:
        "Server-side languages, frameworks, and technologies I utilize to build scalable and efficient applications.",
      items: ["Node.js", "Express", "NestJS", "GraphQL", "MongoDB", "MySQL"],
    },
    {
      title: "DevOps Tools",
      description:
        "Tools and technologies for continuous integration, deployment, and automating operations.",
      items: ["Git", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Cloud Services",
      description:
        "Cloud platforms and services I use to deploy and scale applications in the cloud.",
      items: ["AWS", "Google Cloud", "Firebase"],
    },
    {
      title: "Version Control",
      description:
        "Version control systems I use to collaborate and track changes in projects.",
      items: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
    {
      title: "Hosting & Domain Management",
      description:
        "Platforms I use for deploying, hosting, and managing domains, including email configurations.",
      items: [
        "Vercel (Hosting)",
        "Netlify (Hosting)",
        "cPanel (Hosting & Email Management)",
        "Namecheap (Domain Services)",
      ],
    },
  ];

  return (
    <main className={styles.technologyPage}>
      <h1 className={styles.title}>Technology</h1>
      <p className={styles.introduction}>
        Explore the technology stack I work with to build scalable and
        maintainable applications.
      </p>

      <div className={styles.technologyContainer}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.technologySection}>
            <p className={styles.sectionDescription}>{tech.description}</p>
            <h2 className={styles.sectionTitle}>{tech.title}</h2>
            {/* <ul className={styles.technologyList}>
              {tech.items.map((item, idx) => (
                <li key={idx} className={styles.technologyItem}>
                  {item}
                </li>
              ))}
            </ul> */}
            <SingleHeadedLists lists={tech.items} type="highlights" />
          </div>
        ))}
        <section className="projectExplore">
          <ResumePage filter="technology" />
        </section>
      </div>
    </main>
  );
};

export default TechnologyPage;
