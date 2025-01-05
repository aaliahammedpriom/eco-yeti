import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation } from "react-router-dom";

const ResetPass = () => {
    const {updatePass} = useContext(AuthContext);
    const location =useLocation();
    const setPreFilledValue = (location.state.inputValue)
    const handleLogInSubmit = (event)=>{

        event.preventDefault();
        const form = new FormData(event.target);
        const email = form.get("email")
        updatePass(email)
        .then(()=>{
            window.location.href = 'https://mail.google.com/';

        })
        .catch(()=>{

        })

    }
    return (
        <div className="flex justify-around items-center pt-10 pb-80">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
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
                            placeholder="Enter your email address"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={setPreFilledValue}
                            required
                        />
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 btn text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
                    >
                        Reset
                    </button>
                </form>
                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Go Back - 
                     <Link to={"/auth/signin"} className="text-red-500 hover:underline">
                        LogIn
                    </Link>
                </p>
        </div>
        </div>
    );
};

export default ResetPass;