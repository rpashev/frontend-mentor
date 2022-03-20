import styles from "./future-section.module.scss";
import editorImg from "../../assets/blogr-landing-page-main/images/illustration-editor-desktop.svg";

const FutureSection = () => {
  return (
    <section className={styles.section}>
      <h2>Designed for the future</h2>
      <img src={editorImg} alt="editor" className={styles.img}></img>
      <div className={styles.content}>
        <div>
          <h3>Introducing an extensible editor</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model text.
          </p>
        </div>
        <div>
          <h3>Robust content management</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed to
            using.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
