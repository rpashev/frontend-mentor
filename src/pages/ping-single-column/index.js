import styles from "./index.module.scss";
import img from "../../assets/ping-coming-soon-page-master/images/illustration-dashboard.png";
import fb from "../../assets/ping-coming-soon-page-master/images/SVG/icon-facebook.svg";
import insta from "../../assets/ping-coming-soon-page-master/images/SVG/icon-twitter.svg";
import twitter from "../../assets/ping-coming-soon-page-master/images/SVG/icon-pinterest.svg";

const PingSingleColumn = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>PING.</div>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <h5>Subscribe and get notified</h5>
        <form>
          <input type="email" placeholder="Your email address..." required></input>
          <button>Notify Me</button>
        </form>
        <img className={styles.dashboard} src={img} alt="dashboard"></img>
        <div className={styles.footer}>
          <div className={styles.socials}>
            <img src={fb} alt="facebook"></img>
            <img src={twitter} alt="twitter"></img>
            <img src={insta} alt="instagram"></img>
          </div>
          <p>&copy; Copyright Ping. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default PingSingleColumn;
