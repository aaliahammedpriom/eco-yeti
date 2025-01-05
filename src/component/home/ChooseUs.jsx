import { FaRecycle } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { LiaUserFriendsSolid } from "react-icons/lia";

const ChooseUs = () => {
    return (
        <div>
             <section className="mt-12 bg-green-50 py-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-green-700 text-center">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4">
                    <div className="text-center p-4 border rounded-lg bg-white shadow-sm">
                    <div className="text-8xl text-green-500 flex justify-center"><FaRecycle /></div>

                        <h3 className="text-xl font-semibold mt-4">Eco-Friendly Practices</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            All our tours are designed with sustainability in mind, minimizing environmental impact.
                        </p>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-white shadow-sm">
                        <div className="text-8xl flex justify-center"><FcOnlineSupport /></div>
                        <h3 className="text-xl font-semibold mt-4">Community Support</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            We work closely with local communities to promote cultural exchange and support livelihoods.
                        </p>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-white shadow-sm">
                    <div className="text-8xl text-green-500 flex justify-center"><LiaUserFriendsSolid /></div>

                        <h3 className="text-xl font-semibold mt-4">Unforgettable Experiences</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            From trekking to diving, we offer adventures you'll cherish for a lifetime.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ChooseUs;