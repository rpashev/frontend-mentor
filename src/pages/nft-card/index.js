import styles from "./index.module.scss";
import img from "../../assets/nft-preview-card-component-main/images/image-equilibrium.jpg";
import iconETH from "../../assets/nft-preview-card-component-main/images/icon-ethereum.svg";
import iconClock from "../../assets/nft-preview-card-component-main/images/icon-clock.svg";
import iconView from "../../assets/nft-preview-card-component-main/images/icon-view.svg";
import avatar from "../../assets/nft-preview-card-component-main/images/image-avatar.png";

const NftCard = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles["img-container"]}>
          <img className={styles["img-nft"]} src={img} alt="Nft"></img>
          <div className={styles.overlay}>
            <img src={iconView}></img>
          </div>
        </div>
        <h3 className={styles["card-header"]}>
          <a href="#">Equilibrium #3429</a>
        </h3>
        <div className={styles["card-body"]}>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div className={styles.stats}>
            <div className={styles["stats-ethereum"]}>
              <img src={iconETH} alt="icon-ethereum"></img>
              <span>0.041 ETH</span>
            </div>
            <div className={styles["stats-time"]}>
              <img src={iconClock} alt="icon-clock"></img>
              <span>3 days left</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles["card-footer"]}>
          <div className={styles["avatar-container"]}>
            <img src={avatar} alt="avatar"></img>
          </div>
          <p>
            Creation of <a href="#">Jules Wyvern</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
