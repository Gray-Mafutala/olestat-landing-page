import offer1 from "../../assets/images/offers/offer-1.png";
import offer2 from "../../assets/images/offers/offer-2.png";
import offer3 from "../../assets/images/offers/offer-3.png";

const offers = [
  {
    title: "Consultancy",
    description:
      "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    image: offer1,
  },
  {
    title: "Partnership Deals",
    description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    image: offer2,
  },
  {
    title: "Client Relations",
    description:
      "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    image: offer3,
  },
];

const WeOffer = () => {
  return (
    <section className="section-page pt-64 flex flex-col items-center gap-y-12">
      {/* title and paragraph */}
      <div className="flex flex-col items-center gap-y-6 text-center">
        <h2 className="max-w-xl">We Offer</h2>

        <p className="max-w-[634px]">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
      </div>

      {/* offers */}
      <div
        className="flex flex-col items-start gap-x-[72px] text-center
        tablet:flex-row gap-y-16 "
      >
        {offers.map(({ image, title, description }) => (
          <div key={title} className="flex flex-col items-center">
            <img src={image} alt={title} />
            <h3 className="text-xl font-bold text-black-off mt-8 tablet:mt-11 mb-3">
              {title}
            </h3>
            <p className="max-w-[300px]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeOffer;
