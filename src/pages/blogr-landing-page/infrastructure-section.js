import styles from "./infrastructure-section.module.scss";
import phones from "../../assets/blogr-landing-page-main/images/illustration-phones.svg";

const InfrastructureSection = () => {
  return (
    <section className={styles.section}>
      <img src={phones} alt="phones"></img>
      <div className={styles.content}>
        <h2>State of the Art Infrastructure</h2>
        <p>
          With reliability and speed in mind, worldwide data centers provide the backbone
          for ultra-fast connectivity. This ensures your site will load instantly, no
          matter where your readers are, keeping your site competitive.
        </p>
      </div>
    </section>
  );
};

export default InfrastructureSection;
