import {NavLink } from "react-router-dom";
const Card = (props = {}) => {
  const {tour} = props || {};
    const {id, title, image, ecoFriendlyFeatures } = tour;
    
  
    return (
      <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300  mx-auto ">
        {/* Adventure Image */}
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover animate__animated animate__swing animate animate__infinite animate__slower "
        />
  
        {/* Adventure Details */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
  
          <h3 className="text-md font-semibold text-gray-600 mt-4 ">
            Eco-Friendly Features:
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            {ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
  
        {/* Explore Button */}
        <div className="p-4 border-t border-gray-100">
          <NavLink to={`/details/${id}`} className="btn bg-green-300 w-full">
            Explore Now
          </NavLink>
        </div>
      </div>
    );
  };
  
  export default Card;
  