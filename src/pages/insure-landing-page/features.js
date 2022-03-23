import styles from "./features.module.scss";
import people from "../../assets/insure-landing-page-master/images/icon-people-first.svg";
import snappy from "../../assets/insure-landing-page-master/images/icon-snappy-process.svg";
import prices from "../../assets/insure-landing-page-master/images/icon-people-first.svg";

const Features = () => {
  return (
    <section className={styles.section}>
      <hr></hr>
      <h2>We're different</h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src={snappy} alt="snappy process"></img>
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours. Don't get
            stuck filling in tedious forms.
          </p>
        </div>
        <div className={styles.item}>
          <img src={prices} alt="affordable"></img>
          <h3>Affordable Prices</h3>
          <p>
            We don't want you worrying about high monthly costs. Our prices might be low
            but we still offer the best coverage possible.
          </p>
        </div>
        <div className={styles.item}>
          <img src={people} alt="people first"></img>
          <h3>Peoople First</h3>
          <p>
            Our plans aren't full of conditions and clauses to prevent payouts. We make
            sure you're covered when you need it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
