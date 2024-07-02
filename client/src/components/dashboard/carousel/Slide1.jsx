import image from "../carousel/image.png";

const Slide1 = () => {
  return (
    <div className="bg-secondary flex items-center justify-center py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Lessons and insights <br />
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="text-secondary-foreground mb-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-green-500 text-background py-2 px-6 rounded-md hover:bg-green-600">
            Register
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={image} alt="Hero" className="w-4/6" />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
