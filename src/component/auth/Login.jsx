import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";

const Login = () => {
    const { LogIn, setUser, GoogleLogIn } = useContext(AuthContext);
    const location = useLocation();
    const [err, setErr] = useState({});
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        LogIn(email, pass)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                setErr({ ...err, login: error.code })

            })

    }
    const handleGoogleLogIn = () => {
        GoogleLogIn()
            .then(result => {
                const user = result.user
                setUser(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                setErr({ ...err, googleauth: error.code })
            })
    }

    const handleForgetPass = () => {
        navigate("/auth/resetpass", { state: { inputValue } });

    }
    const handleInputChange = (event) => {
        event.preventDefault();
        const email = event.target.value
        setInputValue(email)
    };
    return (
        <div className="flex max-lg:flex-col-reverse items-center justify-around bg-gray-100 p-3 py-40">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">Login your account</h2>

                {/* Form */}
                <form onSubmit={handleLogInSubmit}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 px-3 text-gray-500 focus:outline-none hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash />: <FaRegEye />}
                            </button>
                        </div>
                    </div>
                    {/* Error handle */}
                    {
                        err.login && <div className="mb-4 text-red-500">
                            {err.login}
                        </div>
                    }


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 btn text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <div className="mb-4">
                    <button onClick={handleForgetPass} className="text-red-500 hover:underline text-sm font-medium ">
                        Forget Password ?
                    </button>


                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t Have An Account?
                    <Link state={location.state} to={"/auth/signup"} href="/register" className="text-red-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
            <div className="text-4xl font-bold">Or,</div>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">Login with Social</h2>
                {/* Error handle */}
                {
                    err.googleauth && <div className="mb-4 text-red-500">
                        {err.googleauth}
                    </div>
                }

                {/* Socil Button */}
                <div className="flex flex-col gap-4">

                    <div className=" flex flex-col gap-2 *:w-full">
                        <button onClick={handleGoogleLogIn} className="btn"><FaGoogle /> Login with Google </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;