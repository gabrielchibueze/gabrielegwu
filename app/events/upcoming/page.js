// components/events/UpcomingEvents.js
import Link from "next/link";
import styles from "../eventsPage.module.css";
import CtaButton from "@/components/buttons/ctabuttonlink";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const upcomingEvents = [
  {
    title: "Tech Conference 2024",
    description:
      "A premier conference showcasing the latest in tech innovation.",
    link: "/events/upcoming/tech-conference",
  },
  {
    title: "Startup Pitch Night",
    description:
      "An event for startups to pitch their ideas to potential investors.",
    link: "/events/upcoming/pitch-night",
  },
  // Add more upcoming events here
];

export default function UpcomingEvents() {
  return (
    <div className={styles.mainEvents}>
      <h1>Upcoming Events</h1>
      <p>
        Plan your schedule with these exciting upcoming events. Do not miss out!
      </p>

      <div className={styles.eventsSummary}>
        {upcomingEvents.map((event, index) => (
          <div className={styles.eventCard} key={index}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div>
              <CtaButton action={event.link} design="transparent" type="link">
                <div className="textWithIcon">
                  <span>View Details</span>
                  <h3>
                    <MdOutlineArrowRightAlt />
                  </h3>
                </div>
              </CtaButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
