import React from "react";
import styles from "./classes.module.css"; // Importing the CSS module for styling
import ResumePage from "../page";
export const metadata = {
  title: "Experience | Gabriel Egwu",
  description:
    "Discover Gabriel Egwu&apos;s extensive professional experience across full-stack development, engineering management, and project supervision.",
};

const ExperiencePage = () => {
  const experienceList = [
    {
      title: "Full Stack Engineer",
      company: "COSENG Ltd, Newcastle UK",
      duration: "Jan 2022 – Present",
      responsibilities: [
        "Crafted user-friendly web applications, providing access to diverse digital solutions.",
        "Collaborated with cross-functional teams to align project deliverables with strategic goals.",
        "Managed project scopes and timelines using Agile methodologies.",
      ],
    },
    {
      title: "Front-End Web Developer",
      company: "Nedgab Consults Ltd, Nigeria",
      duration: "Jun 2019 – Dec 2022",
      responsibilities: [
        "Developed responsive and user-friendly websites using React, Next.js, and HTML/CSS.",
        "Collaborated with UI/UX designers to create seamless user interfaces.",
        "Optimized websites for performance and ensured mobile responsiveness.",
      ],
    },
    {
      title: "Mechanical Engineer",
      company: "Rezon Ltd, Nigeria",
      duration: "Jan 2021 – Dec 2021",
      responsibilities: [
        "Conducted life cycle assessments to evaluate the environmental impact of products.",
        "Analyzed and improved manufacturing processes, resulting in a 15% increase in efficiency.",
        "Worked closely with cross-functional teams to implement product innovations.",
      ],
    },
    {
      title: "Mechanical Engineering Technician",
      company: "Emma-Tob Technologies, Ogun State, Nigeria",
      duration: "Jun 2021 – Dec 2021",
      responsibilities: [
        "Supported project teams in the assembly and maintenance of engineering systems.",
        "Conducted inventory management and quality assurance checks on components.",
        "Collaborated in technical drawing analysis and system improvement initiatives.",
      ],
    },
    {
      title: "Owner / Full-Stack Developer",
      company: "Hairsby - Mobile Hairstylists and Barbering Service",
      duration: "2024 - Present",
      responsibilities: [
        "Founded and developed a seamless booking and management platform for hair stylists and mobile barber services.",
        "Integrated secure payment processing, appointment scheduling, and direct client-barber communication features.",
        "Designed and implemented a referral and loyalty rewards system to boost user engagement and retention.",
        "Ensured privacy and security with end-to-end encrypted chat and payment systems.",
      ],
    },
    {
      title: "Co-Owner & Director",
      company: "Uwadiomimi Ltd. - Wholesale Dealer (Minimie Noodles)",
      duration: "2024 - Present",
      responsibilities: [
        "Managed logistics, client relations, and supplier negotiations, ensuring smooth business operations.",
        "Expanded distribution channels across various regions in Nigeria, contributing to significant business growth.",
        "Oversaw daily operations, maintaining high standards of service and customer satisfaction.",
      ],
    },
  ];
  return (
    <main className={styles.experiencePage}>
      <h1 className={styles.title}>Experience</h1>
      <p className={styles.introduction}>
        Here is a summary of my professional experience, showcasing the roles I
        have held and some of the key responsibilities I have managed throughout
        my career.
      </p>

      <div className={styles.experienceList}>
        {experienceList.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <h2 className={styles.experienceTitle}>
              {experience.title} at {experience.company}
            </h2>
            <p className={styles.experienceDuration}>{experience.duration}</p>
            <ul className={styles.experienceResponsibilities}>
              {experience.responsibilities.map((task, i) => (
                <li key={i} className={styles.responsibilityItem}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <section className="projectExplore">
          <ResumePage filter="experience" />
        </section>
      </div>
    </main>
  );
};

export default ExperiencePage;
