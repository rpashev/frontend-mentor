import styles from "./radio-buttons.module.scss";

const RadioButtons = (props) => {
  return (
    <ul className={styles.buttons}>
      {props.ratings.map((rating) => {
        return (
          <li key={rating}>
            <input
              type="radio"
              id={rating}
              name="rating"
              onChange={props.ratingHandler.bind(null, rating)}
              value={rating}
            />
            <label htmlFor={rating}>{rating}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RadioButtons;
