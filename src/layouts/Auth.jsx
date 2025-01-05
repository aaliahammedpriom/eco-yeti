import { Outlet } from "react-router-dom";
import Header from "../component/home/Header";
import Footer from "../component/home/Footer";

const Auth = () => {
    return (
        <div>
            <header>
                <nav className="bg-green-100">
                    <Header></Header>
                </nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </header>
        </div>
    );
};

export default Auth;