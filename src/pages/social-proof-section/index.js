import styles from "./index.module.scss";
import MediaReview from "./media-review";
import UserReview from "./user-review";
import imgAnne from "../../assets/social-proof-section-master/images/image-anne.jpg";
import imgColton from "../../assets/social-proof-section-master/images/image-colton.jpg";
import imgIrene from "../../assets/social-proof-section-master/images/image-irene.jpg";

const SocialProof = () => {
  return (
    <div className={styles.page}>
      <section className={styles["social-proof"]}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className={styles["media-reviews"]}>
            <MediaReview title="Rated 5 Stars in Reviews" />
            <MediaReview title="Rated 5 Stars in Report Guru" />
            <MediaReview title="Rated 5 Stars in BestTech" />
          </div>
        </div>
        <div className={styles.bottom}>
          <UserReview
            source={imgColton}
            name="Colton Smith"
            description="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          />
          <UserReview
            source={imgIrene}
            name="Irene Roberts"
            description="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          />
          <UserReview
          source={imgAnne}
            name="Anne Wallace"
            description="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          />
        </div>
      </section>
    </div>
  );
};

export default SocialProof;
