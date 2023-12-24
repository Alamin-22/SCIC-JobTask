import { Outlet } from "react-router-dom";
import Navbar from "../COmponents/Navbar/Navbar";
import Footer from "../COmponents/Footer/Footer";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;