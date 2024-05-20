import ServiceList from "./ServiceList";
import styles from "./ServiсesSection.module.css";

const ServicesSection = () => {
  return (
    <section className={styles.offer} id="offer">
      <div className={styles.offerShadow}>
        <div className={`${styles.offerContainer} ${styles.container}`}>
          <h2 className={styles.titleOffer}>Czym zajmuje się nasza firma?</h2>
          <div className={styles.offerGridContainer}>
            <ServiceList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
