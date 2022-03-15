import styles from "./footer.module.scss";
import facebook from "../../assets/sunnyside-agency-landing-page-main/images/icon-facebook.svg";
import instagram from "../../assets/sunnyside-agency-landing-page-main/images/icon-instagram.svg";
import twitter from "../../assets/sunnyside-agency-landing-page-main/images/icon-twitter.svg";
import pinterest from "../../assets/sunnyside-agency-landing-page-main/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}></div>
      <nav>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <img src={facebook} alt="facebook"></img>
        <img src={instagram} alt="instagram"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={pinterest} alt="pinterest"></img>
      </div>
    </footer>
  );
};

export default Footer;
