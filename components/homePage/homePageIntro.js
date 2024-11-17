import classes from "./homePageIntro.module.css";
export default function HomePgaeIntro() {
  return (
    <section className={classes.introSection}>
      <div className={classes.autoContainer}>
        <div className={classes.contentBox}>
          <h2>We ensure excellent service delivery</h2>
          <p>
            We create sustainable value for our stakeholders through consistent
            excellent service delivery, respect for the environment and
            aggressive pursuit of profitability through responsible and ethical
            business practices.
          </p>
        </div>
      </div>
    </section>
  );
}
