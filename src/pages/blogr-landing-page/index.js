import FeaturesSection from "./features-section";
import Footer from "./footer";
import FutureSection from "./future-section";
import Header from "./header";
import styles from "./index.module.scss";
import InfrastructureSection from "./infrastructure-section";

const BlogrLandingPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <FutureSection />
      <InfrastructureSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default BlogrLandingPage;
