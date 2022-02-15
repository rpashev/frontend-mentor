import styles from "./index.module.scss";
import QRcode from "../../assets/qr-code-component-main/images/image-qr-code.png";

const QRCode = () => {
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <img src={QRcode} alt="QR Code"></img>
      </div>
      <div className={styles.body}>
        <h2>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCode;
