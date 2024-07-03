import CountUp from "react-countup";
import member from "./member.png";
import club from "./club.png";
import event from "./event.png";
import payment from "./payment.png";

const Countup = () => {
  const data = [
    {
      image: member,
      title: "Members",
      count: 2245341,
    },
    {
      image: club,
      title: "Clubs",
      count: 46328,
    },
    {
      image: event,
      title: "Event Bookings",
      count: 828867,
    },
    {
      image: payment,
      title: "Payments",
      count: 1926436,
    },
  ];

  return (
    <div className="bg-secondary py-16">
      <div className="container flex flex-col md:flex-row mx-auto px-4 md:px-4 text-center justify-around items-center md:text-left">
        <div className="flex flex-col mb-8 md:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Helping a local <br />
            <span className="text-green-500">business reinvent itself</span>
          </h2>
          <p className="text-secondary-foreground text-sm lg:text-base mb-8">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="lg:w-3/6 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center lg:justify-items-start">
          {data.map((dat, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center md:space-x-3 xl:space-x-4"
            >
              <img
                src={dat.image}
                alt={dat.title}
                className="lg:w-12 lg:h-12 w-8 h-8 mb-4 lg:mb-0"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-primary">
                  <CountUp start={0} end={dat.count} duration={2} />
                </h3>
                <p className="text-secondary-foreground">{dat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countup;
