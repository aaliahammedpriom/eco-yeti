import Footer from '../component/home/Footer';
import Header from '../component/home/Header';
import ProfileDetails from '../component/myprofile/ProfileDetails';
import { Outlet } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div>
            <nav className="bg-green-100">
                <Header></Header>
            </nav>
            <Outlet></Outlet>
            <ProfileDetails></ProfileDetails>
            <Footer></Footer>
        </div>
    );
};

export default MyProfile;