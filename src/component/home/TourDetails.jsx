import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const TourDetails = () => {
    const data = useLoaderData();
    const { title, image, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions
    } = data;
    const [isShow, setIsShow] = useState(false)

    const handleMeetButton = () => {
        const time = new Date().getHours();
        if (time >= 10 && time < 20) {
            window.open('https://meet.google.com', '_blank');
        }
        else {
            setIsShow(true)
        }

    }
    const closeModal =()=>{
        setIsShow(false)
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="card  bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={title} className="h-72 w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">{title}</h2>
                    <p className="text-lg text-gray-700">{shortDescription}</p>

                    <div className="mt-4 flex flex-wrap gap-4">
                        <div>
                            <strong>Category:</strong> {category}
                        </div>
                        <div>
                            <strong>Location:</strong> {location}
                        </div>
                        <div>
                            <strong>Duration:</strong> {duration}
                        </div>
                        <div>
                            <strong>Adventure Level:</strong> {adventureLevel}
                        </div>
                        <div>
                            <strong>Max Group Size:</strong> {maxGroupSize}
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="font-semibold">Cost: ${cost}</p>
                        <p className={`font-semibold ${bookingAvailability ? 'text-green-600' : 'text-red-600'}`}>
                            {bookingAvailability ? 'Available for Booking' : 'Not Available'}
                        </p>
                    </div>

                    <div className="mt-4">
                        <strong>Included Items:</strong>
                        <ul className="list-disc pl-6 mt-2">
                            {includedItems.map((item, index) => (
                                <li key={index} className="text-sm">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <strong>Eco-Friendly Features:</strong>
                        <ul className="list-disc pl-6 mt-2">
                            {ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index} className="text-sm">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <strong>Special Instructions:</strong>
                        <ul className="list-disc pl-6 mt-2">
                            {specialInstructions.map((instruction, index) => (
                                <li key={index} className="text-sm">{instruction}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-actions justify-between mt-6">
                        <button onClick={handleMeetButton} className="btn bg-green-300">Talk With Expert</button>
                        <button className="btn bg-green-300">Book Now</button>
                        <Link to={"/"} TourDetails className="btn bg-green-300">Go Back</Link>
                    </div>
                </div>
            </div>
            {
                isShow && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="modal modal-open">
                            <div className="modal-box">
                                <h2 className="text-xl">Consultation Time</h2>
                                <p>Our consultation time is between 10:00 AM to 8:00 PM.</p>
                                <div className="modal-action">
                                    <button onClick={closeModal} className="btn btn-primary">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }

    </div>
    );
};

export default TourDetails;
