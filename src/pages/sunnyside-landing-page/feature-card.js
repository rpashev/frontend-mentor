import styles from "./feature-card.module.scss";

const FeatureCard = (props) => {
  const title = props.photography ? "Photography" : "Graphic Design";
  const paragraph = props.photography
    ? "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
    : "Grea design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.";

  return (
    <div
      className={`${styles.card} ${
        props.photography ? styles.photography : ""
      }`}
    >
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
