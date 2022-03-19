import styles from "./header-intro.module.scss";

const HeaderIntro = () => {
  return (
    <div className={styles.intro}>
      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
      <div className={styles.actions}>
        <a className={styles.cta} href="/">
          Start for Free
        </a>
        <a className={styles.outline} href="/">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeaderIntro;
