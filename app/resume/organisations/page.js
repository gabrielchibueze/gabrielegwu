import React from "react";
import styles from "./classes.module.css"; // Importing the CSS module for styling
import ResumePage from "../page";
export const metadata = {
  title: "Organisations | Gabriel Egwu",
  description:
    "Explore the organisations Gabriel Egwu has founded, co-founded, and contributed to, including Hairsby, Nedgab Consults, and UnplugVr.",
};

const organisations = [
  {
    name: "COSENG Ltd.",
    role: "Full Stack Engineer",
    duration: "Jan 2022 - Present",
    description:
      "Contributing to the development of full-stack applications, enhancing system efficiency, and implementing scalable web solutions.",
    link: "https://www.coseng.co.uk",
  },
  {
    name: "Nedgab Consults Ltd.",
    role: "Co-Owner and Front-End Web Developer",
    duration: "Jun 2019 - Present",
    description:
      "Co-owning and managing Nedgab Consults, a consultancy that specializes in web development, business solutions, and IT consulting.",
    link: "https://www.nedgabconsults.com",
  },

  {
    name: "XMARR Project",
    role: "Co-Supervisor/Project Manager",
    duration: "Ongoing",
    description:
      "Leading the development of an escrow platform to enhance trust in online transactions across the Nigerian and African markets.",
    link: "https://www.xmarr.com",
  },
  {
    name: "Hairsby",
    role: "Founder and Owner",
    duration: "Ongoing",
    description:
      "Founded Hairsby, a hair styling and barber service platform designed to connect customers with professional hair stylists through a seamless app and web interface.",
    link: "https://www.hairsby.com",
  },
  {
    name: "Uwadiomimi Ltd.",
    role: "Co-Owner",
    duration: "Ongoing",
    description:
      "Co-owning Uwadiomimi Ltd., a wholesale dealer of Minimie Noodles, based in Afikpo, Ebonyi State. Overseeing business operations and growth in the food distribution sector.",
    // link: "https://www.uwadiomimi.com",
  },
  {
    name: "UnplugVr",
    role: "Full Stack Developer",
    duration: "Ongoing",
    description:
      "Developing the full-stack platform for UnplugVr, a VR gaming company based in Newcastle, UK. Responsible for building the user experience, system architecture, and backend functionalities.",
    link: "https://www.unplugvr.com",
  },
  {
    name: "Rezon Ltd.",
    role: "Project Contributor",
    duration: "Contributed to LCA projects (Jan. 2023 - May 2023)",
    description:
      "Participated in life cycle assessments, utilizing tools like SimaPro and GaBi ThinkStep to evaluate environmental impacts.",
    link: "https://www.rezon.co.uk",
  },
  {
    name: "Emma-Tob Technologies",
    role: "Mechanical Engineering Technician",
    duration: "Jun 2021 - Dec 2021",
    description:
      "Supported teams in projects, conducted inventory management, assisted with system assembly, and improved system performance, my presence in the organisation proved to contribute to a 15% efficiency boost.",
    link: "https://emma-tob.com/", // Add the company's website link
  },
];

export default function OrganisationsPage() {
  return (
    <main className={styles.organisationsPage}>
      <h1 className={styles.title}>Organisations</h1>
      <p className={styles.introduction}>
        Throughout my career, I have collaborated with various organizations,
        contributing to impactful projects and driving innovation.
      </p>

      <div className={styles.organisationsContainer}>
        {organisations.map((org, index) => (
          <div key={index} className={styles.organisationCard}>
            <h2 className={styles.organisationName}>{org.name}</h2>
            <h3 className={styles.organisationRole}>{org.role}</h3>
            <p className={styles.organisationDuration}>{org.duration}</p>
            <p className={styles.organisationDescription}>{org.description}</p>
            {org.link && (
              <a
                href={org.link}
                target="_blank"
                className={styles.organisationLink}
              >
                Visit Website
              </a>
            )}
          </div>
        ))}
        <section className="projectExplore">
          <ResumePage filter="organisations" />
        </section>
      </div>
    </main>
  );
}
