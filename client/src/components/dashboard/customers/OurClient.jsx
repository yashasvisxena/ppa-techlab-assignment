import image1 from "./image.png";
import image2 from "./image copy.png";
import image3 from "./image copy 2.png";
import image4 from "./image copy 3.png";
import image5 from "./image copy 4.png";
import image6 from "./image copy 5.png";
import image7 from "./image copy 6.png";

const OurClient = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="flex flex-col space-y-4 justify-center items-center p-6">
      <div className="text-center font-semibold text-3xl md:text-4xl">
        Our Clients
      </div>
      <div className="text-center font-extralight text-lg md:text-xl">
        We have worked with some Fortune 500+ clients
      </div>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-8 lg:gap-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`client ${index}`}
            className="md:h-12 h-10 mx-4 lg:mx-6 object-contain transform transition-transform duration-200 hover:scale-125"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClient;
