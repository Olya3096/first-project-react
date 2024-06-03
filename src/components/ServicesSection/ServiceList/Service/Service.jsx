import styles from "./Service.module.css";

const Service = ({ name, isNew }) => {
  return (
    <div className={`${styles.gridItem} ${isNew && styles.firstService}`}>
      <p>{name}</p>
      {isNew && (
        <>
          <p className={styles.infAboutService}>(nowość)</p>
          <div className={styles.circle}></div>
        </>
      )}
    </div>
  );
};

export default Service;
