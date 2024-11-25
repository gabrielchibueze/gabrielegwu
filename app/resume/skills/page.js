import React from "react";
import styles from "./classes.module.css"; // Importing the CSS module for styling
import SingleHeadedLists from "@/components/headedLists/singleHeadedLists";
import ResumePage from "../page";
export const metadata = {
  title: "Skills | Gabriel Egwu",
  description:
    "A comprehensive list of Gabriel Egwu's technical and soft skills, including programming languages, frameworks, and project management abilities.",
};

const SkillsPage = () => {
  const skills = [
    {
      title: "Programming Languages",
      description: "Core programming languages I use to build applications.",
      items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
    },
    {
      title: "Frameworks",
      description: "Frameworks I use for efficient and scalable development.",
      items: ["React", "Next.js", "Node.js", "Express", "Redux", "SASS"],
    },
    {
      title: "Tools",
      description:
        "Tools I use to streamline development and enhance productivity.",
      items: [
        "Git",
        "GitHub",
        // "Docker",
        "Webpack",
        "Postman",
        "Jira",
        "VS Code",
      ],
    },
    {
      title: "Databases",
      description:
        "Databases I work with to handle and store data effectively.",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Cloud Services",
      description: "Cloud platforms I use to deploy and manage applications.",
      items: ["AWS", "Google Cloud", "Firebase"],
    },
    {
      title: "Deployment & Hosting",
      description: "Deploying and managing web applications and domains.",
      items: [
        "Vercel (Hosting)",
        "Netlify (Hosting)",
        "cPanel (Hosting & Email Management)",
        "Namecheap (Domain Services)",
      ],
    },
    {
      title: "Management and Project Skills",
      description:
        "These skills highlight my capabilities beyond technical expertise, showcasing my strengths as a well-rounded professional.",
      items: [
        "Project Management: Proficient in leading cross-functional teams, overseeing project timelines, and delivering high-quality results.",
        "Communication: Strong verbal and written communication skills, ensuring clear collaboration across teams and stakeholders.",
        "Leadership: Experienced in mentoring teams and fostering an environment that encourages growth, innovation, and accountability.",
        "Problem-Solving: Adept at identifying challenges and implementing effective solutions to drive project success.",
        "Time Management: Skilled in prioritizing tasks and managing resources efficiently to meet tight deadlines.",
        "Adaptability: Flexible in adjusting to new technologies and evolving project requirements.",
        "Collaboration: Excellent teamwork skills, promoting a culture of mutual respect and collective achievement.",
        "Critical Thinking: Analytical mindset with the ability to assess complex situations and make data-driven decisions.",
      ],
    },
    {
      title: "Other Skills",
      description:
        "Additional skills such as methodologies and architectural patterns.",
      items: ["Agile Methodology", "RESTful APIs", "GraphQL", "CI/CD"],
    },
  ];

  return (
    <main className={styles.skillsPage}>
      <h1 className={styles.title}>Skills</h1>
      <p className={styles.introduction}>
        Here is a list of technologies, frameworks, and tools that I am
        proficient in.
      </p>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>{skill.title}</h2>
            <p className={styles.sectionDescription}>{skill.description}</p>
            {/* <ul className={styles.skillsList}>
              {skill.items.map((item, idx) => (
                <li key={idx} className={styles.skillItem}>
                  {item}
                </li>
              ))}
            </ul> */}
            <SingleHeadedLists lists={skill.items} type="highlights" />
          </div>
        ))}
        <section className="projectExplore">
          <ResumePage filter="skills" />
        </section>
      </div>
    </main>
  );
};

export default SkillsPage;
