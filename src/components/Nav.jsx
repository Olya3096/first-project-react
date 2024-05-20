import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <div className={`${styles.navContainer} ${styles.container}`}>
        <a href="index.html" className={`${styles.nav} ${styles.mycompany}`}>
          moja firma
        </a>
        <div className={styles.navPage}>
          <a href="#aboutus" className={`${styles.nav} ${styles.navLinks}`}>
            o nas
          </a>
          <a href="#offer" className={`${styles.nav} ${styles.navLinks}`}>
            oferta
          </a>
          <span
            className={`${styles.nav} ${styles.navLinks} ${styles.contact}`}
          >
            kontakt
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
