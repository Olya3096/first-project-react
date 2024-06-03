import Service from "./Service/Service";
import styles from "./ServiceList.module.css";
import serviceData from "../../../data/services";

const ServiceList = () => {
  return (
    <div className={styles.gridContainer}>
      {serviceData.map((service, index) => (
        <Service key={index} name={service.name} isNew={service.isNew} />
      ))}
    </div>
  );
};

export default ServiceList;
