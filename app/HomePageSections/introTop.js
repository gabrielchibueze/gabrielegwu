import CtaButton from "@/components/buttons/ctabuttonlink";
import classes from "./introTop.module.css";

export default function IntroTop() {
  return (
    <div className={classes.intro}>
      <div className={classes.content}>
        <section className={classes.sections}>
          <h1 className={classes.intotext}>
            Transform Ideas into Impactful Digital Experiences
          </h1>
          <div className={classes.subsection}>
            <p>
              I design and develop scalable, responsive web applications that
              bring your vision to life, leveraging modern technologies to drive
              business growth and enhance user engagement.
            </p>

            <div>
              <h5>Innovative, Reliable, and User-Centered Development</h5>
              <p style={{ color: "yellow" }}>★★★★★</p>
            </div>
            <div className={classes.introTopBtn}>
              <CtaButton action="/contact" design="transparent" type="link">
                Get in Touch
              </CtaButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
