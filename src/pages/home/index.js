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
          <Link to={"/three-column-preview"}>Three Column Preview Component</Link>
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
        <li>
          <Link to={"/single-price-grid"}>Single Price Grid Component</Link>
        </li>
        <li>
          <Link to={"/ping-single-column"}>Ping Single Column Component</Link>
        </li>
        <li>
          <Link to={"/huddle-landing-page"}>Huddle Landing Page</Link>
        </li>
        <li>
          <Link to={"/four-card-feature"}>Four Card Feature Section</Link>
        </li>
        <li>
          <Link to={"/advice-generator"}>Advice Generator App</Link>
        </li>
        <li>
          <Link to={"/sunnyside"}>Sunnyside Page</Link>
        </li>
        <li>
          <Link to={"/blogr"}>Blogr Landing Page</Link>
        </li>
        <li>
          <Link to={"/rating-component"}>Rating Component</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
