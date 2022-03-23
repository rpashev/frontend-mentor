import styles from "./header.module.scss";
import toggle from "../../assets/insure-landing-page-master/images/icon-hamburger.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <nav>
        <ul className={styles["main-nav"]}>
          <li>
            <a href="/">How we work</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          <li className={styles.cta}>
            <a href="/">View plans</a>
          </li>
        </ul>
        <img src={toggle} alt="hamburger" className={styles.toggle}></img>
      </nav>
    </header>
  );
};

export default Header;
