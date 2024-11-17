"use client";
import classes from "./eachservice.module.css";
import { useState } from "react";
import Link from "next/link";
import userIcon from "@/public/images/aboutus/usericon.png";
import Image from "next/image";
import CtaButton from "@/components/buttons/ctabuttonlink";
import ConatactComponent from "../contactComponent/contact";
import { IoIosArrowDropright } from "react-icons/io";

export default function EachService({ type, propertyArray, heading, content }) {
  return (
    <section className={classes.ourTeam}>
      <h2>{heading}</h2>
      <p style={{ marginBottom: "1rem", textAlign: "justify" }}>{content}</p>
      <main className={classes.centralServices}>
        <ul
          className={
            type === "team" ? classes.executiveTeam : classes.ourServices
          }
        >
          {propertyArray.map((prop, index) => (
            <li key={prop.heading} className={`${classes.eachService}`}>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Link href={prop.link}>
                  <section className={classes.topTeamSection}>
                    <div className={classes.teamProfile}>
                      {type === "team" && (
                        <div
                          className={classes.userIcon}
                          style={{
                            minHeight: `${
                              teamIndex === index ? "100px" : "50px"
                            }`,
                            maxHeight: `${
                              teamIndex === index ? "100px" : "50px"
                            }`,
                            minWidth: `${
                              teamIndex === index ? "100px" : "50px"
                            }`,
                            maxWidth: `${
                              teamIndex === index ? "100px" : "50px"
                            }`,
                          }}
                        >
                          <Image
                            src={prop.photo ? prop.photo : userIcon}
                            alt={prop.photo ? prop.name : "service photo"}
                            fill
                          />
                        </div>
                      )}
                      <div>
                        <h3>{prop.heading}</h3>
                        <p className={classes.position}>{prop?.position}</p>
                      </div>
                    </div>
                    <p>
                      <span>
                        <IoIosArrowDropright />
                      </span>
                    </p>
                  </section>
                </Link>

                <p style={{ textAlign: "justify", minHeight: "200px" }}>
                  {prop.content || "No update. Check back later..."}
                </p>
              </section>
              <CtaButton type="link" design="raised" action={prop.link}>
                Learn more
              </CtaButton>
            </li>
          ))}
        </ul>
        <ConatactComponent />
      </main>
    </section>
  );
}
