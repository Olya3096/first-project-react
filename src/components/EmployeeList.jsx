import empl1 from "../images/empl1.JPG";
import empl2 from "../images/empl2.JPG";
import Employee from "./Employee";
const employeesData = [
  {
    photo: empl1,
    name: "Imię Nazwisko",
    department: "dział",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti voluptates cum possimus facilis, magnam reprehenderit quod est, quia, ullam veritatis suscipit sed dignissimos! Sit sapiente voluptatum odio nam nobis.",
  },
  {
    photo: empl2,
    name: "Imię Nazwisko",
    department: "dział",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti voluptates cum possimus facilis, magnam reprehenderit quod est, quia, ullam veritatis suscipit sed dignissimos! Sit sapiente voluptatum odio nam nobis.",
  },
];

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
