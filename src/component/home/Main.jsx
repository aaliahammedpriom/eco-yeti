import { Outlet } from "react-router-dom";
import ChooseUs from "./ChooseUs";
import Testimonials from "./Testimonials";

const Main = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <Outlet></Outlet>
            <ChooseUs></ChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Main;