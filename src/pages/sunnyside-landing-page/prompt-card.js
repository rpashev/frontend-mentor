import styles from "./prompt-card.module.scss";

const PromptCard = (props) => {
  const title = props.standOut
    ? "Stand out to the right audience"
    : "Transform your brand";

  const paragraph = props.standOut
    ? "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
    : "We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button className={`${props.standOut ? styles.standout : ""}`}>
        Learn More
      </button>
    </div>
  );
};

export default PromptCard;
