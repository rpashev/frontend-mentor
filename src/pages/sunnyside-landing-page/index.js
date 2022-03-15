import Header from "./header";
import styles from "./index.module.scss";
import PromptCard from "./prompt-card";
import transform from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg";
import transformMobile from "../../assets/sunnyside-agency-landing-page-main/images/mobile/image-transform.jpg";
import standout from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg";
import standoutMobile from "../../assets/sunnyside-agency-landing-page-main/images/mobile/image-stand-out.jpg";
import FeatureCard from "./feature-card";
import FeedbackItems from "./feedback-items";
import Gallery from "./gallery";
import Footer from "./footer";

const SunnysidePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.cards}>
        <PromptCard />
        <picture className={styles.egg}>
          <source srcSet={transformMobile} media="(max-width: 47.5em)"></source>
          <img src={transform} alt="egg"></img>
        </picture>
        <picture className={styles.glass}>
          <source srcSet={standoutMobile} media="(max-width: 47.5em)"></source>
          <img src={standout} alt="pink stuff"></img>
        </picture>
        <PromptCard standOut />
        <FeatureCard />
        <FeatureCard photography />
      </div>
      <FeedbackItems />
      <Gallery />
      <Footer />
    </div>
  );
};

export default SunnysidePage;
