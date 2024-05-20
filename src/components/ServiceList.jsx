import Service from "./Service";
import styles from "./ServiceList.module.css";

const serviceData = [
  { isNew: "Usługa 1" },
  { isNew: "Usługa 2" },
  { isNew: "Usługa 3" },
  { isNew: "Usługa 4" },
  { isNew: "Usługa 5" },
  { isNew: "Usługa 6" },
];

const ServiceList = () => {
  return (
    <div className={styles.gridContainer}>
      {serviceData.map((service, index) => (
        <Service key={index} isNew={service.isNew} isFirst={index === 0} />
      ))}
    </div>
  );
};

export default ServiceList;
