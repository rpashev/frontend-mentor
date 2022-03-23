import styles from "./newsletter.module.scss";
import pattern from "../../assets/insure-landing-page-master/images/bg-pattern-how-we-work-desktop.svg";

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <h2>
        Find out more<br></br>about how we work
      </h2>
      <button>how we work</button>
      <img src={pattern} alt="pattern"></img>
    </section>
  );
};

export default Newsletter;
