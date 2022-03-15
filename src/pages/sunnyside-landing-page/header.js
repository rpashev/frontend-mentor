import styles from "./header.module.scss";

import logo from "../../assets/sunnyside-agency-landing-page-main/images/logo.svg";
import arrow from "../../assets/sunnyside-agency-landing-page-main/images/icon-arrow-down.svg";
import hamburger from "../../assets/sunnyside-agency-landing-page-main/images/icon-hamburger.svg";
import { useState } from "react";
import MobileNav from "./mobile-nav";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav((prevState) => !prevState);
    console.log(showMobileNav)
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo}></img>

        <nav>
          <ul className={styles["main-nav"]}>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li className={styles.cta}>
              <a href="/">Contact</a>
            </li>
          </ul>
          {showMobileNav && <MobileNav />}
          <img
            src={hamburger}
            alt="hamburger"
            className={styles.hamburger}
            onClick={toggleMobileNav}
          ></img>
        </nav>
      </div>
      <h1>We are creatives</h1>
      <img src={arrow} className={styles.arrow} alt="arrow down"></img>
    </header>
  );
};

export default Header;
