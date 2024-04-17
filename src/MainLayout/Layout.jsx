import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
 
 
 

 

const  Layout = () => {
    return (
        <div className="max-w-screen-xl mx-auto space-y-12">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default  Layout;



 




