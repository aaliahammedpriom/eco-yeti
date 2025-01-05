import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../img/logo1.jpg"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6 lg:px-20">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          {/* Logo */}
          <img className="w-[200px] rounded-full" src={logo} alt="" />
          <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 text-4xl bg-gr">
            <a href="https://www.facebook.com/aaliahammedpriom66/" target="_blank" className="text-blue-400 hover:text-white">
            < FaFacebook />
            </a>
            <a href="https://github.com/aaliahammedpriom" target="_blank" className=" hover:text-white">
            <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/a-ali-ahammed-priom-129273184/" target="_blank" className="text-blue-400 hover:text-white">
            <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap gap-12">
          <div>
            <h2 className="text-lg font-semibold">Support</h2>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Spare Parts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">EcoYeti</h2>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About EcoYeti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                EcoYeti Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope text-gray-400"></i>
            <p className="text-gray-400">
              Stay up to date on the latest from Furrion
            </p>
          </div>
          <Link to={"/auth/signup"} className="btn bg-green-300 px-6 py-2 rounded-lg">
            Sign Up
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
