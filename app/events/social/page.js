// components/events/SocialLife.js
import Link from "next/link";
import styles from "../eventsPage.module.css";
import CtaButton from "@/components/buttons/ctabuttonlink";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const socialEvents = [
  {
    title: "Community Picnic",
    description: "Relax and unwind with a fun-filled community picnic.",
    link: "/events/social/picnic",
  },
  {
    title: "Networking Brunch",
    description: "Meet like-minded individuals over brunch and coffee.",
    link: "/events/social/networking-brunch",
  },
  // Add more social events here
];

export default function SocialLife() {
  return (
    <div className={styles.mainEvents}>
      <h1>Social Life</h1>
      <p>Engage in fun and relaxed events to boost your social life.</p>

      <div className={styles.eventsSummary}>
        {socialEvents.map((event, index) => (
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
