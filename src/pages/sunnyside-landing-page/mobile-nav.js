import styles from "./mobile-nav.module.scss";

const MobileNav = () => {
  return (
    <ul className={styles.mobileNav}>
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
  );
};

export default MobileNav;
