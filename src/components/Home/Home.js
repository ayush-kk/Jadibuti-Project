import NavbarWeb from "../navbar/NavbarWeb";
import Banner from "../banner/Banner"
import Jumbotron from "../jumbotron/Jumbotron"
import TopMedicines from "../topMedicines/TopMedicines"
import Testimony from "../testimony/Testimony"
import Footer from "../footer/Footer"

function Home(){
    return(
        <div>
        <NavbarWeb />
        <Banner/>
        <Jumbotron />
        <TopMedicines />
        <Testimony/>
        <Footer />
  
      </div>
    )
}
export default Home;