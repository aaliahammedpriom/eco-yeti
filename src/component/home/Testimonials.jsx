const Testimonials = () => {
    return (
        <div>
             <section className="mt-12 py-8">
                <h2 className="text-3xl font-bold text-green-700 text-center">
                    What Our Customers Say
                </h2>
                <div className="carousel w-full mt-6">
                    <div id="slide1" className="carousel-item relative w-full text-center">
                        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
                            <p className="text-gray-700 italic">
                                "The Mystic Mountain Trek was the adventure of a lifetime! Everything was perfectly organized."
                            </p>
                            <h3 className="mt-4 text-lg font-semibold">- Alex, USA</h3>
                        </div>
                        <a href="#slide3" className="btn btn-circle btn-sm absolute left-2">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle btn-sm absolute right-2">
                            ❯
                        </a>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full text-center">
                        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
                            <p className="text-gray-700 italic">
                                "The eco-friendly approach of the Blue Abyss Ocean Dive made me appreciate nature even more."
                            </p>
                            <h3 className="mt-4 text-lg font-semibold">- Sarah, Australia</h3>
                        </div>
                        <a href="#slide1" className="btn btn-circle btn-sm absolute left-2">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle btn-sm absolute right-2">
                            ❯
                        </a>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full text-center">
                        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
                            <p className="text-gray-700 italic">
                                "Loved every moment of the Savannah Wildlife Safari. Can't wait to book my next trip!"
                            </p>
                            <h3 className="mt-4 text-lg font-semibold">- Emma, UK</h3>
                        </div>
                        <a href="#slide2" className="btn btn-circle btn-sm absolute left-2">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle btn-sm absolute right-2">
                            ❯
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;