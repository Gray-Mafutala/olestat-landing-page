import { Link } from "react-router-dom";
import BtnBlue from "../UI/BtnBlue";

const services = [
  {
    sector: "design",
    title: "Web Design",
    description:
      "Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus.",
  },

  {
    sector: "business and marketing",
    title: "Project Management",
    description:
      "Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus.",
  },

  {
    sector: "development",
    title: "Full Stack Development",
    description:
      "Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus.",
  },

  {
    sector: "design",
    title: "Animation and Modeling",
    description:
      "Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus.",
  },
];

const TheFutureOfBusiness = () => {
  return (
    <section
      className="section-page pt-32 flex items-start justify-between"
    >
      {/* left content */}
      <div className="">
        <h2 className="text-4xl font-bold text-black-off max-w-sm">
          The future of business
        </h2>

        <p className="max-w-[390px] mt-4 mb-16">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.{" "}
        </p>

        <BtnBlue>Get started</BtnBlue>
      </div>

      {/* right content */}
      <div className="w-full ml-8 grid grid-cols-2 gap-8">
        {/* business card */}
        {services.map(({ sector, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-y-5 items-start rounded-2xl
            p-6 pb-5 border shadow-[-4px_-4px_16px_-6px_#0000001a] box-shadow:"
          >
            <span
              className="text-xs font-semibold px-2 py-1 rounded uppercase
            text-violet-blue-dark bg-violet-blue/10"
            >
              {sector}
            </span>

            <h3 className="text-black-off text-2xl font-bold">{title}</h3>

            <p className="max-w-xs">{description}</p>

            <Link
              to="/"
              className="leading-none uppercase text-violet-blue 
              font-medium hover:text-violet-blue-dark duration-200"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheFutureOfBusiness;
