import styles from "./Employee.module.css";

const Employee = ({ photo, name, department, description }) => {
  return (
    <div className={styles.employees}>
      <img src={photo} alt={name} className={styles.photo} loading="lazy" />
      <div className={styles.info}>
        <h3 className={styles.nameEmployee}>
          {name} [ {department} ]
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Employee;
