import styles from "./index.module.scss";
import background from "../../assets/stats-preview-card-component-main/images/image-header-desktop.jpg";

const StatsPreview = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            ragarding revenue, customer experience and overall efficiency.
          </p>
          <ul className={styles.achievements}>
            <li>
              <h2>10k+</h2>
              <span>COMPANIES</span>
            </li>
            <li>
              <h2>314</h2>
              <span>TEMPLATES</span>
            </li>
            <li>
              <h2>12M+</h2>
              <span>QUERIES</span>
            </li>
          </ul>
        </div>

        <div className={styles.img}>
          <img src={background} alt="background"></img>
          <div className={styles.overlay}></div>
        </div>
      </div>
    </div>
  );
};

export default StatsPreview;
