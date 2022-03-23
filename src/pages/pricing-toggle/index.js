import { useState } from "react";
import styles from "./index.module.scss";

const PricingToggleComponent = () => {
  const [annually, setMonthly] = useState(true);

  const toggleHandler = () => {
    setMonthly((prevState) => !prevState);
  };

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1>Our Pricing</h1>
        <div className={styles.toggle}>
          <span>Annually</span>
          <label className={styles.switch}>
            <input type="checkbox" onChange={toggleHandler} />
            <span className={styles.slider}></span>
          </label>
          <span>Monthly</span>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Basic</h3>
            <p className={styles.price}>
              <span>$</span>
              {!annually ? 19.99 : 199.99}
            </p>
            <ul>
              <li>500 GB Storage</li>
              <li>2 Users Allowed</li>
              <li>Send up to 3GB</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className={`${styles.card} ${styles.premium}`}>
            <h3>Professional</h3>
            <p className={styles.price}>
              <span>$</span>
              {!annually ? 24.99 : 249.99}
            </p>
            <ul>
              <li>1 TB Storage</li>
              <li>5 Users Allowed</li>
              <li>Send up to 10GB</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className={styles.card}>
            <h3>Master</h3>
            <p className={styles.price}>
              <span>$</span>
              {!annually ? 39.99 : 399.99}
            </p>
            <ul>
              <li>2 TB Storage</li>
              <li>10 Users Allowed</li>
              <li>Send up to 20GB</li>
            </ul>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingToggleComponent;
