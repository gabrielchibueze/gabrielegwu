import CtaButton from "@/components/buttons/ctabuttonlink";
import classes from "./page.module.css";
import IntroTop from "./HomePageSections/introTop";
import About from "./HomePageSections/about";
import MoreonGabrielegwu from "./HomePageSections/moreonGabrielegwu";
import EmailSection from "./HomePageSections/emailSection";
import Reviews from "./HomePageSections/portfolioReviews";
import LocationDropBySection from "./HomePageSections/locationDropBy";
import ContactSection from "./HomePageSections/contactSection";
import PortfolioProjects from "./HomePageSections/portfolioProjects";
export default function BlogPage() {
  return (
    <main
    // className={classes.blogPage}
    >
      <section>
        <IntroTop />
      </section>
      <section>
        <About />
      </section>
      <section>
        <MoreonGabrielegwu />
      </section>
      <section>
        <EmailSection />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <PortfolioProjects />
      </section>
      <section>
        <LocationDropBySection />
      </section>
      <ContactSection />
    </main>
  );
}
