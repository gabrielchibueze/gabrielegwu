// components/events/MainEvents.js
import Link from "next/link";
import styles from "./eventsPage.module.css";
import CtaButton from "@/components/buttons/ctabuttonlink";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const eventCategories = [
  {
    title: "Upcoming Events",
    description:
      "Stay ahead and plan your schedule with the latest upcoming events. Don't miss out on exciting opportunities to learn and network.",
    link: "/events/upcoming",
  },
  {
    title: "Popular Events",
    description:
      "Discover the most popular events that everyone is talking about! These events are highly recommended and attract huge participation.",
    link: "/events/popular",
  },
  {
    title: "Social Life",
    description:
      "Be part of fun and relaxed events! Whether it's a picnic or a holiday party, we’ve got your social life covered.",
    link: "/events/social",
  },
];

export default function EventsPage() {
  return (
    <div className={styles.mainEvents}>
      <h1>My Events</h1>
      <p>
        Explore upcoming, popular, and social events that are happening soon.
        Join me to stay updated, meet like-minded people, and engage in exciting
        activities!
      </p>

      <div className={styles.eventsSummary}>
        {eventCategories.map((event, index) => (
          <div className={styles.eventCard} key={index}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>

            <div>
              <CtaButton action={event.link} design="transparent" type="link">
                <div className="textWithIcon">
                  <span> View {event.title}</span>
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
