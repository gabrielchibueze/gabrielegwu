"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./ourServices.module.css";
import { SiCrowdsource } from "react-icons/si";
import { GrSettingsOption } from "react-icons/gr";
import { GrDeliver } from "react-icons/gr";
import { TbHomeStats } from "react-icons/tb";
import { FaShopLock } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { BsCassetteFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";
import Link from "next/link";
import CtaButton from "../buttons/ctabuttonlink";

export default function OurServices() {
  const ourServices = [
    {
      name: "Software Technology Services",
      icon: <BsCassetteFill />,
      serviceList: [
        "Web Application Development",
        "Software Solutions",
        "Mobile Application Development",
        "Business Data analytics services",
        "Project Management",
      ],
      link: "/services/software-technology-services",
    },
    {
      name: "gabrielegwu Training Services",
      icon: <SiBookstack />,
      serviceList: [
        "Training and Human Development",
        "Web Development",
        "Data Analysis Training",
        "Entrepreneurship Mentoring",
        "Advocacy",
        "Graduate Internship Programme",
        "Graduate Advancement Programme",
      ],
      link: "/services/training-and-human-development",
    },
    {
      name: "Energy Support Services",
      icon: <GrSettingsOption />,
      serviceList: [
        "Biogas Solutions",
        "Procurement Services",
        "Construction Management Services",
        "Fabrication & Installation Services",
      ],
      link: "/services/energy-support-services",
    },

    {
      name: "Asset and Facility Management",
      icon: <TbHomeStats />,
      serviceList: [
        "Estate Management",
        "Product and Processes Management",
        "Industrial Maintenance Services",
        "Project and Construction Management Services",
        "Integrated Facility Management Services",
      ],
      link: "/services/asset-and-facility-management",
    },
    {
      name: "Project Management",
      icon: <FaProjectDiagram />,
      serviceList: [
        "Project Delivery",
        "Product and Processes Management",
        "Project Cordination",
        "Project and Construction Management Services",
        "Project Planning and Scheduling",
        "Risk Managment",
        "Stakeholder Management",
        "Project Managment Training",
      ],
      link: "/services/project-management-services",
    },
    {
      name: "Business Data Analytics Services",
      icon: <MdAnalytics />,
      serviceList: [
        "Training experts in Data Analytics for business",
        "Integrate Data Driven Decisions in your Organisation",
        "Data Forcasting and Interpretaions",
        "Exploring AI and IOT to Optimise Business Operations",
      ],
      link: "/services/business-data-analytics",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const serviceRefs = useRef([]);

  // Create refs dynamically for each service
  useEffect(() => {
    serviceRefs.current = ourServices.map(
      (_, i) => serviceRefs.current[i] || React.createRef()
    );
  }, [ourServices]);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className={classes.ourServicesSection}>
      <h2>OUR SERVICES</h2>
      <main className={classes.ourServicesMain}>
        {ourServices.map((service, index) => (
          <div
            key={index}
            ref={serviceRefs.current[index]} // Assign the ref
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={classes.service}
          >
            <h1
              className={
                activeIndex === index
                  ? classes.activeServiceText
                  : classes.normal
              }
            >
              {service.icon}
            </h1>
            <h2>{service.name}</h2>
            <ul
              className={`${classes.serviceList} ${
                activeIndex === index && classes.activeServiceBtn
              }`}
            >
              {service.serviceList.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
            {/* <div
              className={
                activeIndex === index
                  ? classes.viewDetailButton
                  : classes.normalBtn
              }
            > */}
            <CtaButton action={service.link} design="raised" type="link">
              View Details
            </CtaButton>
            {/* </div> */}
          </div>
        ))}
      </main>
    </section>
  );
}
