import styles from "./user-review.module.scss";

const UserReview = (props) => {
  return (
    <div className={styles.review}>
      <div>
        <div className={styles.person}>
          <img src={props.source} alt="avatar"></img>
          <div className={styles.name}>
            <h2>{props.name}</h2>
            <span>Verified Buyer</span>
          </div>
        </div>
      </div>
      <p>"{props.description}"</p>
    </div>
  );
};

export default UserReview;
