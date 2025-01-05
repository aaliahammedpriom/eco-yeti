import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const TourCards = () => {
    const { data: tourData } = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl font-bold text-green-700 text-center my-8">
                    Eco Tours
                </h2>
            <div className="md:grid grid-cols-3 *:w-full gap-3 w-[90vw] m-auto">
                {tourData.map((tour, idx) => <Card key={idx} tour={tour}></Card>)}
            </div>
        </div>
    );
};

export default TourCards;
