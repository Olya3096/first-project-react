import styles from "./EmployeesSection.module.css";
import EmployeeList from "./EmployeeList/EmployeeList";

const EmployeesSection = () => {
  return (
    <section className={styles.aboutus} id="aboutus">
      <div className={`${styles.aboutusContainer} ${styles.container}`}>
        <h2 className={styles.titleAboutus}>Nasi specjaliści</h2>
        <EmployeeList />
      </div>
    </section>
  );
};

export default EmployeesSection;
