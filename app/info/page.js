"use client";
import { useState } from "react";
import classes from "./infoPage.module.css";
import { usePathname } from "next/navigation";

export default function InfoPage() {
  const path = usePathname();
  let pathName = path.split("/").slice(-1)[0];
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "About Me",
      content: (
        <p>
          I am a dedicated Full-Stack Developer and Engineering Manager with a
          strong background in web development and mechanical engineering. With
          hands-on experience in both frontend and backend technologies, I
          specialize in building scalable applications using modern frameworks
          like Node.js, React, and Next.js. My passion lies in creating
          innovative solutions that address real-world problems, and I thrive in
          collaborative environments where I can lead teams and drive projects
          to success.
        </p>
      ),
    },
    {
      title: "Education",
      content: (
        <ul className={classes.infoList}>
          <li>
            <strong>
              MSc Engineering Management (Distinction) - University of
              Northumbria at Newcastle (2024)
            </strong>
            <br />
            Specialized in sustainable development, CO2 emissions management,
            and green hydrogen fuel cell technology.
          </li>
          <li>
            <strong>
              BEng Mechanical Engineering - Michael Okpara University of
              Agriculture, Umudike (2021)
            </strong>
            <br />
            Focused on mechanical system design, energy systems, and
            environmental sustainability.
          </li>
        </ul>
      ),
    },
    {
      title: "Employment",
      content: (
        <ul className={classes.infoList}>
          <li>
            <strong>
              Co-Supervisor / Project Manager - XMARR (2023 - Present)
            </strong>
            <br />
            Led the development of a secure escrow platform to reduce online
            fraud in Nigeria and Africa. Integrated payment gateways, dispute
            resolution systems, and ensured a user-friendly design.
          </li>

          <li>
            <strong>
              Owner / Full-Stack Developer - Hairsby (2024 - Present)
            </strong>
            <br />
            Founded and developed a Mobile hairstyling platform for easy booking
            and management of mobile hair styling and barber services.
            Integrated appointment scheduling, loyalty programs, and secure
            payment systems.
          </li>

          <li>
            <strong>
              Co-Owner & Lead Developer - Nedgab Consults Ltd. (2019 - 2022)
            </strong>
            <br />
            Spearheaded web development projects for Nedgab Consults, a company
            specializing in providing exceptional educational consulting
            services. Managed client relationships, translating business needs
            into technical solutions and overseeing all aspects of project
            management, including timelines and deliverables.
          </li>

          <li>
            <strong>Full-Stack Developer - COSENG Ltd. (2022 - Present)</strong>
            <br />
            Developed and maintained scalable web applications. Collaborated
            with cross-functional teams to implement solutions.
          </li>

          <li>
            <strong>
              Mechanical Engineer Technician - Emma-Tob Technologies (2021)
            </strong>
            <br />
            Assisted in system assembly and efficiency optimization,
            contributing to a 15% boost in production efficiency.
          </li>
        </ul>
      ),
    },
    {
      title: "Career",
      content: (
        <p>
          I started my career as a Mechanical Engineer Technician, where I honed
          my problem-solving and technical skills. Transitioning into software
          development, I quickly advanced to Full-Stack Developer and Project
          Manager roles. My journey includes founding Hairsby, a mobile
          Hairstylists and barber service platform, and co-founding Nedgab
          Consults Ltd., specializing in Education Consulting solutions.
          Currently, I lead development projects for XMARR, UnplugVr and COSENG
          Ltd., focusing on secure, scalable web platforms.
        </p>
      ),
    },
    {
      title: "Hobby",
      content: (
        <p>
          Outside of my professional work, I am passionate about Virtual Reality
          (VR) gaming and development. I am the developer behind UnplugVR, a VR
          gaming company in Newcastle, UK. I also enjoy contributing to
          open-source projects, building personal tools, and experimenting with
          emerging technologies like AI integrations and IoT devices.
        </p>
      ),
    },
    {
      title: "Philanthropy",
      content: (
        <p>
          I believe in giving back to the community. My philanthropic efforts
          include mentoring aspiring developers and engineering students.
          Additionally, I support educational initiatives focused on providing
          underprivileged students access to technology and learning resources.
          I actively participate in local community development programs,
          especially those promoting STEM education and sustainable development.
        </p>
      ),
    },
  ];
  const currentPath = sections.findIndex(
    (section) => section.title === pathName
  );
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <main className={classes.infoPage}>
      <h1 className={classes.title}>Information</h1>
      <p className={classes.description}>
        Explore different facets of my journey, including employment, career
        achievements, hobbies, and philanthropic activities.
      </p>
      <div className={classes.sectionContainer}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${classes.section} ${
              activeSection === index ? classes.activeSection : ""
            }`}
          >
            <button
              onClick={() => toggleSection(index)}
              className={`${classes.sectionHeader} ${
                activeSection === index ? classes.activeSectionHeader : ""
              }`}
            >
              {section.title}
            </button>
            {activeSection === index && (
              <div className={classes.sectionContent}>{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
