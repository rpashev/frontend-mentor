import styles from "./index.module.scss";
import img from "../../assets/profile-card-component-main/images/bg-pattern-card.svg";
import avatar from "../../assets/profile-card-component-main/images/image-victor.jpg";

const ProfileCard = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.background}>
          <img src={img} alt="card background photo"></img>
        </div>
        <div className={styles.content}>
          <div className={styles["avatar-container"]}>
            <img src={avatar} alt="profile photo"></img>
          </div>
          <h2>
            Victor Crest<span>26</span>
          </h2>
          <p>London</p>
        </div>
        <ul className={styles.stats}>
          <li>
            <h3>80K</h3>
            <span>Followers</span>
          </li>
          <li>
            <h3>803K</h3>
            <span>Likes</span>
          </li>
          <li>
            <h3>1.4K</h3>
            <span>Photos</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
