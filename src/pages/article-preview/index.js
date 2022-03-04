import styles from "./index.module.scss";
import img from "../../assets/article-preview-component-master/images/drawers.jpg";
import avatar from "../../assets/article-preview-component-master/images/avatar-michelle.jpg";
import shareIcon from "../../assets/article-preview-component-master/images/icon-share.svg";
import fb from "../../assets/article-preview-component-master/images/icon-facebook.svg";
import twitter from "../../assets/article-preview-component-master/images/icon-twitter.svg";
import pinterest from "../../assets/article-preview-component-master/images/icon-pinterest.svg";
import { useState } from "react";

const ArticlePreview = () => {
  const [tooltipActive, setTooltipActive] = useState(false);

  const toggleTooltip = () => {
    setTooltipActive((prevState) => !prevState);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles["img-container"]}>
          <img src={img} alt="drawers"></img>
        </div>
        <div className={styles.content}>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something is missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className={styles.bottom}>
            <img src={avatar} className={styles.avatar} alt="gril"></img>
            <div className={styles.person}>
              <h3>Michelle Appleton</h3>
              <span>28 Jun 2020</span>
            </div>
            <div className={styles.share}>
              <img
                onClick={toggleTooltip}
                src={shareIcon}
                className={`${styles["share-icon"]} ${
                  tooltipActive ? styles.active : ""
                }`}
                alt="share icon"
              ></img>
              {tooltipActive && (
                <div className={styles.tooltip}>
                  <span>SHARE</span>
                  <img src={fb} alt="facebook"></img>
                  <img src={twitter} alt="twitter"></img>
                  <img src={pinterest} alt="pinterest"></img>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
