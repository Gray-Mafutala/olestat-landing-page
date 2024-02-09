import React from "react";

import BtnBlue from "../UI/BtnBlue";
import SectionTitle from "../UI/SectionTitle";
import SectionParagraph from "../UI/SectionParagraph";

const NewsLetter = () => {
  return (
    <section
      className="section-page mx-4 mobileM:mx-5 mobileL:mx-6
      pt-20 pb-16 flex flex-col items-center justify-center
      text-center bg-linear-violet-blue rounded-3xl"
    >
      <SectionTitle addStyles="text-white">Join our Newsletter</SectionTitle>

      <SectionParagraph addStyles="mt-4 mb-8 text-white">
        Enter your Email address to get started for free with our newsletter.
      </SectionParagraph>

      <div
        data-aos="zoom-out"
        data-aos-duration="600"
        data-aos-easing="ease-out"
        className="flex items-center mobile:gap-x-4 mobileM:gap-x-12
        bg-white justify-between py-1 pr-1 rounded-2xl
        focus-within:shadow-[0_0_0_2px_#000] duration-200"
      >
        <input
          type="email"
          id="email-join-newsletter"
          placeholder="Your e-mail address"
          className="outline-none px-2 mobile:p-4 rounded-3xl
          leading-5 text-black-off w-[180px] mobileM:w-auto"
        />

        {/* buttons to subscribe */}
        <BtnBlue
          addStyles="mobileM:hidden min-w-[20px] !p-2 mr-[2px] mobile:mr-1
          rounded-lg flex items-center justify-center"
        >
          <svg className="w-6 h-6 fill-current">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </BtnBlue>

        <BtnBlue addStyles="hidden mobileM:block">Submit</BtnBlue>
      </div>
    </section>
  );
};

export default NewsLetter;
