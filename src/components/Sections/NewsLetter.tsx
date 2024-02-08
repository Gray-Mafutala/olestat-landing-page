import BtnBlue from "../UI/BtnBlue";

const NewsLetter = () => {
  return (
    <section
      className="section-page mx-4 mobileM:mx-5 mobileL:mx-6
      mt-16 mb-24 py-20 flex flex-col items-center justify-center
      text-center bg-linear-violet-blue rounded-3xl"
    >
      <h2 className="text-white">Join our Newsletter</h2>

      <p className="mt-4 mb-8 text-white">
        Enter your Email address to get started for free with our newsletter.
      </p>

      <div
        className="flex items-center gap-4 mobileM:gap-x-12 bg-white justify-between
        py-1 pr-1 rounded-2xl focus-within:shadow-[0_0_0_2px_#000]
        duration-200"
      >
        <input
          type="email"
          id="email-join-newsletter"
          placeholder="Your e-mail address"
          className="outline-none p-4 rounded-3xl leading-5 text-black-off
          w-[180px] mobileM:w-auto"
        />

        <BtnBlue
          addStyles="min-w-[40px] px-1 py-2 mr-1 rounded-xl
          mobileM:px-5 mobileM:py-4 mobileM:mr-0 mobileM:min-w-[118px] 
          mobileM:h-full mobileM:rounded-2xl flex items-center justify-center"
        >
          <span className="hidden mobileM:inline">Submit</span>

          <span className="mobileM:hidden">
            <svg className="w-6 h-6 fill-current">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </span>
        </BtnBlue>
      </div>
    </section>
  );
};

export default NewsLetter;
