import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <ul>
        <li>
          <Link to={"/qr-code"}>QR Code Component</Link>
        </li>
        <li>
          <Link to={"/nft-component"}>NFT Card Component</Link>
        </li>
        <li>
          <Link to={"/order-summary"}>Order Summary Component</Link>
        </li>
        <li>
          <Link to={"/stats-preview"}>Stats Preview Component</Link>
        </li>
        <li>
          <Link to={"/three-column-preview"}>
            Three Column Preview Component
          </Link>
        </li>
        <li>
          <Link to={"/profile-card"}>Profile Card Component</Link>
        </li>
        <li>
          <Link to={"/faq-accordion"}>FAQ Accordion Component</Link>
        </li>
        <li>
          <Link to={"/social-proof"}>Social Proof Section</Link>
        </li>
        <li>
          <Link to={"/article-preview"}>Article Preview Component</Link>
        </li>
        <li>
          <Link to={"/base-apparel"}>Base Apparel Component</Link>
        </li>
        <li>
          <Link to={"/intro-signup"}>Intro Signup Component</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
