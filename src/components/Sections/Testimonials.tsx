import avatar1 from "../../assets/images/testimonials/Avatar-1.png";
import avatar2 from "../../assets/images/testimonials/Avatar-2.png";
import avatar3 from "../../assets/images/testimonials/Avatar-3.png";
import avatar4 from "../../assets/images/testimonials/Avatar-4.png";

const allTestimonial = [
  {
    img: avatar1,
    name: "Amari cantu",
    contact: "@AmariCantu",
    testimonial:
      "Sit ut diam bibendum dolor. Ullamcorper ph eget . Mauris dolor vestibulum et lacus a ante orci.",
  },

  {
    img: avatar2,
    name: "Nathanael burgess",
    contact: "@NathanaelBurgess",
    testimonial:
      "Business should be nominated for service of the year. No matter where you go, Business is the coolest, most happening thing around.",
  },

  {
    img: avatar3,
    name: "Emory Hendricksoy",
    contact: "@EmoryHendricks",
    testimonial:
      "I would gladly pay over 600 dollars for Business. I'd be lost without Business. Business has got everything I need.",
  },

  {
    img: avatar4,
    name: "Lucia Koch",
    contact: "@LuciaKoch",
    testimonial:
      "Definitely worth the investment. I couldn't have asked for more than this. Thank you so much for your help.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-page pt-64 flex flex-col items-center text-center">
      <h2>What our happy clients say</h2>

      {/* testimonials */}
      <div
        className="mt-14 mb-11 grid grid-cols-1 items-start gap-x-6 gap-y-8
        tablet:grid-cols-2 tablet:items-stretch
        laptop:grid-cols-4"
      >
        {/* testimonial card */}
        {allTestimonial.map(({ img, name, contact, testimonial }) => (
          <div
            key={contact}
            className="max-w-sm p-6 bg-[#fbfdfe] border border-[#e8f0f4]
            rounded-3xl flex flex-col items-center"
          >
            <img src={img} alt="" className="rounded-full w-12 h-12" />

            <p className="my-4 flex flex-col">
              <span className="font-semibold text-black-off capitalize">
                {name}
              </span>
              <span>{contact}</span>
            </p>

            <p>&ldquo;{testimonial}&rdquo;</p>
          </div>
        ))}
      </div>

      {/* btn to switch */}
      <div className="flex items-center justify-center gap-x-4">
        <button
          className="w-12 h-12 flex items-center justify-center bg-[#e4f1f7] rounded-full
          border-transparent"
        >
          <svg className="w-5 h-5 fill-[#0d0e14]">
            <path d="m9.417 10 2.916-2.917a.806.806 0 0 0 0-1.166.806.806 0 0 0-1.166 0l-3.5 3.5a.806.806 0 0 0 0 1.166l3.5 3.5c.166.167.333.25.583.25.25 0 .417-.083.583-.25a.806.806 0 0 0 0-1.166L9.417 10Z" />
          </svg>
        </button>

        <button
          className="w-12 h-12 flex items-center justify-center bg-black rounded-full
          border-transparent"
        >
          <svg className="w-5 h-5 fill-white">
            <path d="M12.917 9.417 8.25 4.667a.806.806 0 0 0-1.167 0 .806.806 0 0 0 0 1.166l4.084 4.084L7.083 14a.756.756 0 0 0-.25.583c0 .5.334.834.834.834.25 0 .416-.084.583-.25l4.75-4.75c.25-.167.25-.667-.083-1Z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
