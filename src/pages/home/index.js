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
      </ul>
    </div>
  );
};

export default HomePage;
