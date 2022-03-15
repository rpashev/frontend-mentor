import styles from "./feedback-items.module.scss";
import emily from "../../assets/sunnyside-agency-landing-page-main/images/image-emily.jpg";
import thomas from "../../assets/sunnyside-agency-landing-page-main/images/image-thomas.jpg";
import jenny from "../../assets/sunnyside-agency-landing-page-main/images/image-jennie.jpg";

const FeedbackItems = (props) => {
  return (
    <div className={styles.feedback}>
      <h2>Client testimonials</h2>
      <div className={styles.items}>
        <div className={styles.card}>
          <img src={emily} alt="gril"></img>
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className={styles.person}>
            <h5>Emily R.</h5>
            <span>Marketing Director</span>
          </div>
        </div>
        <div className={styles.card}>
          <img src={thomas} alt="boi"></img>
          <p>
            Sunnyside's enthusiasm coupled with their keen interes in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <div className={styles.person}>
            <h5>Thomas S.</h5>
            <span>Chief Operating Officer</span>
          </div>
        </div>
        <div className={styles.card}>
          <img src={jenny} alt="gril 2"></img>
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className={styles.person}>
            <h5>Jenny F.</h5>
            <span>Business Owner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItems;
