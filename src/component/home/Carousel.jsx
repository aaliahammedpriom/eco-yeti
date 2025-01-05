import{ useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://i.ibb.co.com/SDkXjJ4/img1.webp",
    "https://i.ibb.co.com/mvc03dj/img2.webp",
    "https://i.ibb.co.com/tCTxKZ4/img3.webp",
    "https://i.ibb.co.com/74zDqbr/img4.webp",
    "https://i.ibb.co.com/Mk99nSM/img5.png",
    "https://i.ibb.co.com/3NYBTgN/img6.png",]

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel w-full">
      {/* Carousel items */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${index === activeIndex ? 'block' : 'hidden'}`}
        >
          <img  src={img} className=" md:h-[500px] xl:h-[700px] 2xl:h-[600px]  object-contain m-auto" alt={`Slide ${index + 1}`} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={handlePrev} className="btn btn-circle">❮</button>
            <button onClick={handleNext} className="btn btn-circle">❯</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
