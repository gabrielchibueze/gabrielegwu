// components/events/PopularEvents.js
import Link from "next/link";
import styles from "../eventsPage.module.css";
import CtaButton from "@/components/buttons/ctabuttonlink";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const popularEvents = [
  {
    title: "Music Festival 2024",
    description: "Join the largest music festival featuring top artists.",
    link: "/events/popular/music-festival",
  },
  {
    title: "Coding Bootcamp",
    description: "An intensive bootcamp to level up your coding skills.",
    link: "/events/popular/coding-bootcamp",
  },
  // Add more popular events here
];

export default function PopularEvents() {
  return (
    <div className={styles.mainEvents}>
      <h1>Popular Events</h1>
      <p>Check out the events everyone is talking about. Join the hype!</p>

      <div className={styles.eventsSummary}>
        {popularEvents.map((event, index) => (
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
