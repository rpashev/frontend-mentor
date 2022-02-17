import styles from "./index.module.scss";
import img from "../../assets/order-summary-component-main/images/illustration-hero.svg";
import iconMusic from "../../assets/order-summary-component-main/images/icon-music.svg";

const OrderSummary = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles["img-container"]}>
          <img src={img} alt="hero-img"></img>
        </div>
        <div className={styles["card-content"]}>
          <div className={styles["card-header"]}>
            <h2>Order Summary</h2>
            <p>
              You can now listen to million of songs, audio books, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className={styles.pricing}>
            <div className={styles.plan}>
              <img src={iconMusic} alt="icon-music"></img>
              <div>
                <h4>Annual Plan</h4>
                <span>$59.99/year</span>
              </div>
            </div>
            <a href="/#">Change</a>
          </div>
          <div className={styles.actions}>
            <button className={styles["btn-cta"]}>Proceed to Payment</button>
            <button className={styles["btn-cancel"]}>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
