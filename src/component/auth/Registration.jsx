import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
    const { createNewUser, setUser, GoogleLogIn, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [err, setErr] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const name = form.get("name")
        const photoUrl = form.get("photoUrl")
        const email = form.get("email")
        const pass = form.get("pass")

        const hasUppercase = /[A-Z]/.test(pass);
        const hasLowercase = /[a-z]/.test(pass);
        const isLongEnough = pass.length >= 6;
        if (!hasUppercase || !hasLowercase || !isLongEnough) {
            const errorMessage = [];
            if (!hasUppercase) errorMessage.push("Password must include at least one uppercase letter.");
            if (!hasLowercase) errorMessage.push("Password must include at least one lowercase letter.");
            if (!isLongEnough) errorMessage.push("Password must be at least 6 characters long.");

            setErr({ ...err, createaccount: errorMessage.join(" ") });
            return;
        }

        createNewUser(email, pass)
            .then(result => {
                const user = result.user
                setUser(user)
                updateUser({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        navigate(location?.state ? location.state : "/")
                    })
                    .catch(error => {
                        setErr({ ...err, createaccount: error.code })

                    })


            })
            .catch(error => {
                setErr({ ...err, createaccount: error.code })
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
    return (
        <div className="flex max-lg:flex-col-reverse gap-5 items-center justify-around bg-gray-100 p-3 pt-10 lg:pb-40">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Register your account
                </h2>

                {/* Form */}
                <form onSubmit={handleRegistrationSubmit} >
                    {/* Name Input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            // value={formData.name}
                            // onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoUrl"
                            name="photoUrl"
                            placeholder="Enter your photo URL"
                            // value={formData.photoUrl}
                            // onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            // value={formData.email}
                            // onChange={handleChange}
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
                                name="pass"
                                placeholder="Enter your password"
                                // value={formData.password}
                                // onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash />: <FaRegEye />}
                            </button>
                        </div>
                    </div>

                    {/* Error Handle */}
                    {
                        err.createaccount && <div className="mb-4 text-red-500">
                            {err.createaccount}
                        </div>
                    }

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 btn text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
                    >
                        Register
                    </button>
                </form>
                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already Have An Account?
                    <Link to={"/auth/signin"} className="text-red-500 hover:underline">
                        LogIn
                    </Link>
                </p>
            </div>
            <div className="text-4xl font-bold">Or,</div>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">Login with Social</h2>
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

export default Registration;