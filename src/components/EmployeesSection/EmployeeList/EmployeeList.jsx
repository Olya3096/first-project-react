import Employee from "./Employee/Employee";
import employeesData from "../../../data/employees";

const EmployeeList = () => {
  return (
    <>
      {employeesData.map((employee, index) => (
        <Employee
          key={index}
          photo={employee.photo}
          name={employee.name}
          department={employee.department}
          description={employee.description}
        />
      ))}
    </>
  );
};

export default EmployeeList;
