import styles from "./card.module.scss";

const Card = (props) => {
  return (
    <div
      className={`${styles.card} ${props.suvs ? styles.suvs : ""} ${
        props.sedans ? styles.sedans : ""
      } ${props.luxury ? styles.luxury : ""}`}
    >
      <div className={styles.img}>
        <img src={props.img}></img>
      </div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default Card;
