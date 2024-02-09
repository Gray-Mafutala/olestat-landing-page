import React from "react";

import smillingMan from "../../assets/images/great-customer/smiling-man.png";
import BtnBlue from "../UI/BtnBlue";
import SectionTitle from "../UI/SectionTitle";
import SectionParagraph from "../UI/SectionParagraph";

const GreatCustomer = () => {
  return (
    <section
      className="section-page flex items-center
      justify-center mobileL:justify-betwee"
    >
      {/* left content */}
      <div
        className="flex flex-col items-center text-center 
        mobileL:flex-grow mobileL:items-start mobileL:text-left"
      >
        <SectionTitle addStyles="max-w-md">
          Great customer relationship starts here
        </SectionTitle>

        <SectionParagraph addStyles="max-w-[430px] mt-4 mb-8 tablet:mb-20">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero
          facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit.
          Morbi aliquam porttitor mattis consequat neque, tellus blandit.
        </SectionParagraph>

        <BtnBlue>Get started</BtnBlue>
      </div>

      {/* right content */}
      <div
        data-aos="zoom-out"
        data-aos-duration="600"
        data-aos-easing="ease-out"
        className="max-w-lg"
      >
        <img
          className="hidden mobileL:block h-auto object-cover
          mobileL:w-[480px] laptop:w-full duration-500"
          src={smillingMan}
          alt=""
        />
      </div>
    </section>
  );
};

export default GreatCustomer;
