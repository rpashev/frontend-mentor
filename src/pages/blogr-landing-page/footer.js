import styles from "./footer.module.scss";
import logo from "../../assets/blogr-landing-page-main/images/logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo"></img>
      <div className={styles.col}>
        <h5>Product</h5>
        <ul>
          <li>
            <a href="/">Overview</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Marketplace</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Integrations</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <h5>Company</h5>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <h5>Connect</h5>
        <ul>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Newsletter</a>
          </li>
          <li>
            <a href="/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
