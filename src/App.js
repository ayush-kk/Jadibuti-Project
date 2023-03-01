import "./App.css";
import Aboutus from "./components/aboutus/Aboutus";
import Footer from "./components/footer/Footer";
import Jumbotron from "./components/jumbotron/Jumbotron";
import NavbarWeb from "./components/navbar/NavbarWeb";
import TopMedicines from "./components/topMedicines/TopMedicines";


function App() {
  return (
    <div>
      <NavbarWeb />
      <Jumbotron/>
      <Aboutus />
      <TopMedicines/>
      <Footer />
    </div>
  );
}

export default App;
