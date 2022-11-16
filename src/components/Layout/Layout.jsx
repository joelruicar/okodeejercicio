import "./Layout.css"
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout =()=>{
    return(<>
        <Outlet></Outlet>
        <Footer></Footer>
    </>);
}

export default Layout;