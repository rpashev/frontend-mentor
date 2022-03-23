import styles from "./footer.module.scss";
import logo from "../../assets/insure-landing-page-master/images/logo.svg";
import fb from "../../assets/insure-landing-page-master/images/icon-facebook.svg";
import twitter from "../../assets/insure-landing-page-master/images/icon-twitter.svg";
import pinterest from "../../assets/insure-landing-page-master/images/icon-pinterest.svg";
import insta from "../../assets/insure-landing-page-master/images/icon-instagram.svg";
import pattern from "../../assets/insure-landing-page-master/images/bg-pattern-footer-desktop.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.img} src={pattern} alt="pattern"></img>
      <div className={styles.top}>
        <img src={logo} alt="logo"></img>
        <div className={styles.socials}>
          <img src={fb} alt="facebook"></img>
          <img src={twitter} alt="twitter"></img>
          <img src={pinterest} alt="pinterest"></img>
          <img src={insta} alt="isntagram"></img>
        </div>
      </div>
      <hr></hr>
      <div className={styles.bottom}>
        <ul>
          <li className={styles.primary}>
            <a href="/">our company</a>
          </li>
          <li>
            <a href="/">how we work</a>
          </li>
          <li>
            <a href="/">why insure?</a>
          </li>
          <li>
            <a href="/">view plans</a>
          </li>
        </ul>
        <ul>
          <li className={styles.primary}>
            <a href="/">help me</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">terms of use</a>
          </li>
          <li>
            <a href="/">privacy policy</a>
          </li>
          <li>
            <a href="/">cookies</a>
          </li>
        </ul>
        <ul>
          <li className={styles.primary}>
            <a href="/">contact</a>
          </li>
          <li>
            <a href="/">sales</a>
          </li>
          <li>
            <a href="/">support</a>
          </li>
          <li>
            <a href="/">live chat</a>
          </li>
        </ul>
        <ul>
          <li className={styles.primary}>
            <a href="/">others</a>
          </li>
          <li>
            <a href="/">careers</a>
          </li>
          <li>
            <a href="/">press</a>
          </li>
          <li>
            <a href="/">licenses</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
