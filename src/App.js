
import "./App.css";
import Aboutus from "./components/aboutUs/Aboutus";
import Banner from "./components/banner/Banner";

import Footer from "./components/footer/Footer";
import Jumbotron from "./components/jumbotron/Jumbotron";
import NavbarWeb from "./components/navBar/NavbarWeb";
import Testimony from "./components/testimony/Testimony";
import TopMedicines from "./components/topMedicines/TopMedicines";

function App() {
  return (
    <div>
      <NavbarWeb />
      <Banner/>
      <Jumbotron />
      <Aboutus />
      <TopMedicines />
      <Testimony/>
      <Footer />

    </div>
  );
}

export default App;
