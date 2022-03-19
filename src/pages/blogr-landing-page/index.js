import FutureSection from "./future-section";
import Header from "./header";
import styles from "./index.module.scss";

const BlogrLandingPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <FutureSection />
    </div>
  );
};

export default BlogrLandingPage;
