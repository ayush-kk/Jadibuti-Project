import Footer from "../footer/Footer"
import NavbarWeb from "../navbar/NavbarWeb"

const Layout = ({children})=>{
    return(
        <>
        <div>
            <NavbarWeb/>
            <Footer/>
        </div>
        <main>{children}</main>
        </>
    )
}
export default Layout;