"use client";
import classes from "./service-details.module.css";
import { notFound } from "next/navigation";
import CentralTopPages from "../centralTopPages/centralTopPages";
import ServiceAndExecutiveTeam from "@/components/team/team";
import EachService from "../eachservice/eachservice";
import SideBar from "../sideBar/sideBar";

export default function ServiceDetailsPage({
  heading,
  image,
  content,
  slug,
  sections,
  serviceList,
  link,
  key,
}) {
  if (!heading) {
    notFound();
  }
  //   instructions = instructions.replace(/\n/g, "<br />");
  return (
    <article key={key}>
      <CentralTopPages
        // image="/images/services/services.jpg"
        image={image || "/images/services/services.jpg"}
        title={heading || "Our Services"}
      />
      <SideBar>
        <main className={classes.serviceDetails}>
          <EachService
            type="services"
            propertyArray={sections}
            heading={"Explore our" + " " + heading}
            content={content}
          />
        </main>
      </SideBar>
    </article>
  );
}
