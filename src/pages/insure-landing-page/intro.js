import styles from "./intro.module.scss";
import hero from "../../assets/insure-landing-page-master/images/image-intro-desktop.jpg";
import heroMobile from "../../assets/insure-landing-page-master/images/image-intro-mobile.jpg";
import patternLeft from "../../assets/insure-landing-page-master/images/bg-pattern-intro-left-desktop.svg";
import patternRight from "../../assets/insure-landing-page-master/images/bg-pattern-intro-right-desktop.svg";

const Intro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <hr></hr>
        <h1>
          Humanizing
          <br />
          your insurance.
        </h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our expertise and
          technology to help you find the plan that's right for you. Ensure you and your
          loved ones are protected.
        </p>
        <button>View Plans</button>
      </div>
      <img src={hero} alt="hero" className={styles.hero}></img>
      <img src={heroMobile} alt="hero small" className={styles.heroMobile}></img>
      <img src={patternLeft} alt="pattern left" className={styles.patternLeft}></img>
      <img src={patternRight} alt="pattern right" className={styles.patternRight}></img>
    </section>
  );
};

export default Intro;
