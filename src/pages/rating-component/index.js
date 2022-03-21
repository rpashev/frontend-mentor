import styles from "./index.module.scss";
import star from "../../assets/interactive-rating-component-main/images/icon-star.svg";
import thanks from "../../assets/interactive-rating-component-main/images/illustration-thank-you.svg";
import { useState } from "react";
import RadioButtons from "./radio-buttons";

const RatingComponent = () => {
  const [rating, setRating] = useState(null);
  const [status, setStatus] = useState(null);

  const ratingHandler = (val) => {
    setRating(val);
  };

  const submitHandler = () => {
    if (!rating) {
      return setStatus("error");
    }
    setStatus("success");
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {status !== "success" && (
          <div className={styles.preselection}>
            <img src={star} alt="star"></img>
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did we your support request. All feedback is
              appreciated to help us improve our offering!
            </p>
            <RadioButtons
              ratingHandler={ratingHandler}
              ratings={["1", "2", "3", "4", "5"]}
            />
            <button onClick={submitHandler}>Submit</button>
            {status === "error" ? (
              <p className={styles.error}>You have to choose a rating!</p>
            ) : (
              ""
            )}
          </div>
        )}

        {status === "success" ? (
          <div className={styles.selected}>
            <img src={thanks} alt="thanks"></img>
            <p className={styles.yourrating}>You selected {rating} out of 5!</p>
            <h2>Thank you!</h2>
            <p>
              We appreciate you taking time to give a rating. If you ever need more
              support, don't hesitate to get in touch.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RatingComponent;
