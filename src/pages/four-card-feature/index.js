import styles from "./index.module.scss";
import supervisor from "../../assets/four-card-feature-section-master/images/icon-supervisor.svg";
import teambuilder from "../../assets/four-card-feature-section-master/images/icon-team-builder.svg";
import karma from "../../assets/four-card-feature-section-master/images/icon-karma.svg";
import calculator from "../../assets/four-card-feature-section-master/images/icon-calculator.svg";

const FourCardFeature = () => {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.heading}>
          <h1>Reliable, efficient delivery</h1>
          <h1 className={styles["heading--bold"]}>Powered By Technology</h1>
          <p>
            Our Artificial intelligence powered tools use millions of project
            data points to ensure that your project is useful
          </p>
        </div>
        <div className={styles.features}>
          <div className={`${styles.feature} ${styles.supervisor}`}>
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <img src={supervisor} alt="supervisor"></img>
          </div>
          <div className={`${styles.feature} ${styles.teambuilder}`}>
            <h2>Team Builder</h2>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img src={teambuilder} alt="teambuilder"></img>
          </div>
          <div className={`${styles.feature} ${styles.karma}`}>
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={karma} alt="karma"></img>
          </div>
          <div className={`${styles.feature} ${styles.calculator}`}>
            <h2>Calculator</h2>
            <p>Uses data from past projects to provide better estimates</p>
            <img src={calculator} alt="calculator"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourCardFeature;
