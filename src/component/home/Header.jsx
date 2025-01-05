import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/logo1.jpg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
    const { user, setLoading, LogOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        LogOut();
        navigate('/auth/signin')
        setLoading(true)

    }
    const links = (

        <div className="flex">
            <li><NavLink className="btn bg-green-300" to={"/"}>Home</NavLink></li>
            {user && user.email && <li><NavLink className="btn bg-green-300" to={"/myprofile"}>My Profile</NavLink></li>}
            {user && user.email && <li><NavLink className="btn bg-green-300" to={"/myprofile/updateprofile"}>Update Profile</NavLink></li>}
        </div>
    );
    return (
        <div className="navbar  w-[95vw] m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <div className="w-10 rounded-full animate__animated animate__pulse animate animate__infinite "><img className="rounded-full " src={logo} alt="" /></div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                {/* header logo */}
                <div className="w-10 rounded-full max-lg:hidden animate__animated animate__pulse animate animate__infinite "><img className="rounded-full " src={logo} alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user && user?.email ?
                    <div><button onClick={handleLogout} className="btn bg-green-300">LogOut</button></div>
                    : <div><Link to={"/auth/signin"} className="btn">Log In</Link></div>}

                {user?.email ? <div className="relative group ">
                    {/* user img */}
                    <div className="w-10">
                        {
                            user?.photoURL ?
                                <img className="rounded-full animate__animated animate__pulse animate animate__infinite "
                                    alt=""
                                    src={user.photoURL} /> :
                                <img className="rounded-full animate__animated animate__pulse animate animate__infinite "
                                    alt=""
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        }


                    </div>
                    <div className="absolute right-0  bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {user?.displayName || "No User Name"}
                    </div>
                </div> : ""}


            </div>
        </div>
    );
};

export default Header;