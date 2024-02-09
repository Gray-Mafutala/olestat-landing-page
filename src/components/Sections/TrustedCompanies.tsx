import React from "react";

import SectionTitle from "../UI/SectionTitle";

import dribbble from "../../assets/images/brands/dribbble.png";
import google from "../../assets/images/brands/google.png";
import microsoft from "../../assets/images/brands/microsoft.png";
import paypal from "../../assets/images/brands/paypal.png";
import uber from "../../assets/images/brands/uber.png";
import SectionParagraph from "../UI/SectionParagraph";

const TrustedCompanies = () => {
  return (
    <section
      className="section-page flex flex-col items-center gap-y-12
      text-center"
    >
      <SectionTitle addStyles="max-w-xl">
        Trusted Companies from around the world
      </SectionTitle>

      <SectionParagraph addStyles="max-w-[816px]">
        Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet
        tellus purus sit odio eget. Diam morbi faucibus vitae neque id urna,
        sit. Lectus ac.
      </SectionParagraph>

      <div
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-easing="ease-out"
        className="flex flex-col mobileM:flex-row justify-center
        items-center gap-x-16 gap-y-7 flex-wrap
        [&>img]:w-24"
      >
        <img src={uber} alt="uber" />
        <img src={google} alt="google" />
        <img src={paypal} alt="paypal" />
        <img src={microsoft} alt="microsoft" />
        <img src={dribbble} alt="dribbble" />
      </div>
    </section>
  );
};

export default TrustedCompanies;
