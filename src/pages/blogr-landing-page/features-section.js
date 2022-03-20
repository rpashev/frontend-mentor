import styles from "./features-section.module.scss";
import laptop from "../../assets/blogr-landing-page-main/images/illustration-laptop-desktop.svg";
import laptopMobile from "../../assets/blogr-landing-page-main/images/illustration-laptop-mobile.svg";

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <img src={laptop} alt="laptop" className={styles.desktop}></img>
      <img src={laptopMobile} alt="laptop small" className={styles.mobile}></img>
      <div className={styles.content}>
        <div className={styles.textbox}>
          <h2>Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large community of
            helpful developers. It supports features such as code syntax highlighting, RSS
            feeds, social media integration, third party commenting tools, and works
            seemlessly with Google Analytics. The architecture is clean and relatively
            easy to learn.
          </p>
        </div>
        <div className={styles.textbox}>
          <h2>Powerful tooling</h2>
          <p>
            Batteries included. We build a simple and straightforward CLI tool that makes
            customization and deployment a breeze, but capable of producing even the most
            complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
