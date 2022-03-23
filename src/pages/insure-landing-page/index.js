import Features from "./features";
import Footer from "./footer";
import Header from "./header";
import styles from "./index.module.scss";
import Intro from "./intro";
import Newsletter from "./newsletter";

const InsureLandingPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Intro />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default InsureLandingPage;
