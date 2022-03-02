import styles from "./media-review.module.scss";
import star from "../../assets/social-proof-section-master/images/icon-star.svg";

const MediaReview = (props) => {
  return (
    <div className={styles["media-review"]}>
      <div className={styles.stars}>
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
        <img src={star} alt="star"></img>
      </div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default MediaReview;
