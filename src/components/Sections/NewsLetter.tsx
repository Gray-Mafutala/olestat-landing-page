import BtnBlue from "../UI/BtnBlue";

const NewsLetter = () => {
  return (
    <section
      className="section-page mt-16 mb-24 py-20 flex flex-col items-center
      justify-center text-center bg-linear-violet-blue rounded-3xl"
    >
      <h2 className="text-white text-4xl font-bold">Join our Newsletter</h2>

      <p className="mt-4 mb-8 text-white">
        Enter your Email address to get started for free with our newsletter.
      </p>

      <div
        className="flex gap-x-12 bg-white justify-between py-1 pr-1 rounded-2xl
        focus-within:shadow-[0_0_0_2px_#000] duration-200"
      >
        <input
          type="email"
          id="email-join-newsletter"
          placeholder="Your e-mail address"
          className="outline-none p-4 rounded-3xl leading-5 text-black-off"
        />

        <BtnBlue>Submit</BtnBlue>
      </div>
    </section>
  );
};

export default NewsLetter;
