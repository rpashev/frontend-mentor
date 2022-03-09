import styles from "./index.module.scss";

const SinglePriceGrid = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.heading}>
          <h2>Join our community</h2>
          <h3>30-day, hassle-free money back guarantee</h3>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews.<br></br> Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.pricing}>
            <h3>Monthly Subscription</h3>
            <h4>
              <span>$29</span>per month
            </h4>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className={styles.features}>
            <h3>Why Us</h3>
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePriceGrid;
