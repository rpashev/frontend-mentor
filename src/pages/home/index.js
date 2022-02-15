import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <ul>
        <li>
          <Link to={"/qr-code"}>QR Code Component</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
