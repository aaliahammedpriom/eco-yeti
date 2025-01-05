import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../Loading';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';

const ProfileDetails = () => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [location, setLocation] = useState('Fetching location...');

    useEffect(() => {
        // Fetch location using IP-based geolocation API
        fetch('https://ipapi.co/json/')
            .then((response) => response.json())
            .then((data) => {
                setLocation(`${data.city}, ${data.region}, ${data.country_name}`);
            })
            .catch(() => setLocation('Unable to fetch location.'));
    }, []);

    if (loading) {
        return <Loading></Loading>; // Handle loading or null state
    }

    const getDeviceType = () => {
        if (isMobile) return 'Mobile';
        if (isTablet) return 'Tablet';
        if (isDesktop) return 'Desktop';
        return 'Unknown Device';
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-base-200 shadow-xl rounded-xl">
            {/* Welcome Title */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-primary">
                    Welcome, {user.displayName || 'User'}!
                </h1>
            </div>

            {/* Profile Information Card */}
            <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
                {/* Profile Image */}
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            src={user.photoURL || 'https://via.placeholder.com/150'}
                            alt="Profile"
                        />
                    </div>
                </div>

                {/* User Details */}
                <div className="w-full space-y-4 text-gray-700">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Name:</span>
                        <span>{user.displayName || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Email:</span>
                        <span>{user.email || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Email Verified:</span>
                        <span>
                            {user.emailVerified ? (
                                <span className="badge badge-success">Yes</span>
                            ) : (
                                <span className="badge badge-error">No</span>
                            )}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">User ID:</span>
                        <span className="truncate">{user.uid || 'Not available'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Account Created:</span>
                        <span>
                            {new Date(parseInt(user.metadata.createdAt)).toLocaleString() ||
                                'Unknown'}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Last Login:</span>
                        <span>
                            {new Date(parseInt(user.metadata.lastLoginAt)).toLocaleString() ||
                                'Unknown'}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Device Type:</span>
                        <span>{getDeviceType()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Location:</span>
                        <span>{location}</span>
                    </div>
                </div>

                {/* Update Profile Button */}
                <button
                    className="mt-6 btn bg-green-300"
                    onClick={() => navigate("/myprofile/updateprofile")}
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default ProfileDetails;
