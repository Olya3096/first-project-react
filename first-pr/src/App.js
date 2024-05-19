import "./App.css";
import EmployeesSection from "./components/EmployeesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeesSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
