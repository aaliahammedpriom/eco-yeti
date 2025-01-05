import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../component/Loading";

const PrivateRoutes = (props ={}) => {
    const {children} = props || {};
    const location = useLocation();
    const {user,loading}= useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location} to={"/auth/signin"}></Navigate>;
};

export default PrivateRoutes;