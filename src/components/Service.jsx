import styles from "./Service.module.css";

const Service = ({ isNew, isFirst }) => {
  return (
    <div className={`${styles.gridItem} ${isFirst && styles.firstService}`}>
      <p>{isNew}</p>
      {isFirst && (
        <>
          <p className={styles.infAboutService}>(nowość)</p>
          <div className={styles.circle}></div>
        </>
      )}
    </div>
  );
};

export default Service;
