import CtaButton from "@/components/buttons/ctabuttonlink";
import classes from "./ContactIntroTop.module.css";

export default function ContactIntroTop() {
  return (
    <section className={classes.intro}>
      <div className={classes.content}>
        <section className={classes.sections}>
          <p> Get in Touch</p>
          <h1 className={classes.intotext}>
            Let’s Build Something Great Together
          </h1>
        </section>
      </div>
    </section>
  );
}
