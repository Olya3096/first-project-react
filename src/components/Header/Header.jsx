import Nav from "./Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className={styles.header}>
        <div className={styles.headerShadow}>
          <section className={`${styles.headerContainer} ${styles.container}`}>
            <h1 className={styles.mainTitle}>
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <h2 className={styles.title}>Nie wierz nam na słowo - sprawdź</h2>
            <a href="#offer" className={styles.btnOffer}>
              oferta
            </a>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
