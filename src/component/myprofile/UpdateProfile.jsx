import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateProfile = () => {
    const [err, setErr] = useState({});
    const navigate =useNavigate();
    const {updateUser} =  useContext(AuthContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const name =form.get("name")
        const photoUrl = form.get("photoURL")
        updateUser({ displayName: name, photoURL: photoUrl })
                .then(()=>{
                    navigate( "/myprofile")
                })
                .catch(error=>{
                    setErr({ ...err, createaccount: error.code })

                })
        
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-8 bg-base-200 shadow-xl rounded-lg">
            {/* Title */}
            <h1 className="text-2xl font-bold text-primary text-center mb-6">
                Update Your Profile
            </h1>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Photo URL Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="photoURL">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        id="photoURL"
                        name="photoURL"
                        placeholder="Enter your photo URL"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn bg-green-300 w-full">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
