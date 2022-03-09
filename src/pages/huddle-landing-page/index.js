import styles from "./index.module.scss";
import logo from "../../assets/huddle-landing-page-with-single-introductory-section-master/images/logo.svg";
import dashboard from "../../assets/huddle-landing-page-with-single-introductory-section-master/images/illustration-mockups.svg";
import fb from "../../assets/huddle-landing-page-with-single-introductory-section-master/images/icon-facebook.svg";
import twitter from "../../assets/huddle-landing-page-with-single-introductory-section-master/images/icon-twitter.svg";
import pinterest from "../../assets/huddle-landing-page-with-single-introductory-section-master/images/icon-pinterest.svg";

const HuddleLandingPage = () => {
  return (
    <div className={styles.page}>
      <img src={logo} className={styles.logo} alt="logo"></img>
      <div className={styles.content}>
        <img
          src={dashboard}
          alt="desktop dashboard"
          className={styles.dashboard}
        ></img>
        <div className={styles.prompt}>
          <h1>
            Build The Community<br></br> Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genune discussion.
          </p>
          <button>Register</button>
        </div>
      </div>
      <div className={styles.socials}>
        <img src={fb} alt="facebook"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={pinterest} alt="pinterest"></img>
      </div>
    </div>
  );
};

export default HuddleLandingPage;
