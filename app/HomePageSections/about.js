import classes from "./about.module.css";
import about2 from "/public/images/about1.jpg";
import about1 from "/public/images/about2.jpg";
import Image from "next/image";
import CtaButton from "@/components/buttons/ctabuttonlink";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.aboutIntro}>
        <h4>Empowering Your Vision</h4>
        <h1>Bringing Ideas to Life with Reliable Web Development</h1>
        <p>
          I am a full stack developer dedicated to creating dynamic and
          efficient web applications. Whether you need a robust backend, an
          engaging user interface, or seamless integration, I provide solutions
          that enhance performance and support your goals.
        </p>
        <div className={classes.cta}>
          <CtaButton action="/contact" design="flat" type="link">
            CONNECT WITH ME
          </CtaButton>
        </div>
      </div>
      <div className={classes.imageSection}>
        <div className={classes.aboutImage}>
          <Image src={about1} fill alt="About Gabriel Egwu" />
        </div>
        <div className={classes.aboutImage}>
          <Image src={about2} fill alt="More About Gabriel Egwu" />
        </div>
      </div>
    </div>
  );
}
