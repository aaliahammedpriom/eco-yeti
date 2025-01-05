import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Auth from "../layouts/Auth";
import TourCards from "../component/home/TourCards";
import TourDetails from "../component/home/TourDetails";
import Login from "../component/auth/Login";
import Registration from "../component/auth/Registration";
import PrivateRoutes from "../privateroutes/PrivateRoutes";
import Header from "../component/home/Header";
import MyProfile from "../layouts/MyProfile";
import UpdateProfile from "../component/myprofile/UpdateProfile";
import Error from "../component/Error";
import Footer from "../component/home/Footer";
import ResetPass from "../component/auth/ResetPass";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        loader: () => (document.title = "Home | EcoYeti"),
        children: [
            {
                path: "/",
                element: <TourCards></TourCards>,
                loader: async () => {
                    try {
                        const response = await fetch("/fakedata/fake.json"); // Make sure the path is correct
                        if (!response.ok) {
                            throw new Error("Failed to fetch data");
                        }
                        const data = await response.json();
                        return { data }; // Return the parsed JSON data
                    } catch (error) {
                        throw new Error("Error loading tour data");
                    }
                },

            },


        ]
    },
    {
        path: "/details/:id",
        element: <PrivateRoutes>
            <Header></Header>
            <TourDetails></TourDetails>
            <Footer></Footer>
        </PrivateRoutes>,
        loader: async ({ params }) => {
            document.title = `Tour Details - ID: ${params.id} | EcoYeti`;
            const response = await fetch(`/fakedata/fake${params.id}.json`);
            if (!response.ok) throw new Error("Failed to fetch tour details");
            return response.json();
        },

    },

    {
        path: "/auth",
        element: <Auth></Auth>,
        loader: () => (document.title = "Auth | EcoYeti"),
        children: [
            {
                path: "/auth/signin",
                element: <Login></Login>,
                loader: () => (document.title = "LogIN | EcoYeti"),

            },
            {
                path: "/auth/signup",
                element: <Registration></Registration>,
                loader: () => (document.title = "Registration | EcoYeti"),

            },
            {
                path: "/auth/resetpass",
                element: <ResetPass></ResetPass>,
                loader: () => (document.title = "ResetPass | EcoYeti"),

            }
        ]

    },
    {
        path: "/myprofile",
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>,
        loader: () => (document.title = "Home | Profile"),


        children: [
            {
                path: "/myprofile/updateprofile",
                element: <UpdateProfile></UpdateProfile>,
                loader: () => (document.title = "EcoYeti |Update Profile")
            },
        ]
    },
    {
        path:"*",
        element: <Error></Error>
    }

]);
export default Router;