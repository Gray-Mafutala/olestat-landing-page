import React from "react";

type BtnBlueProps = {
  addStyles?: string;
  children: React.ReactNode;
};

const BtnBlue = ({ addStyles, children }: BtnBlueProps) => {
  return (
    <button
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-easing="ease-out"
      className={`min-w-[118px] px-5 py-4 bg-violet-blue text-[#fcfaff]
      font-medium rounded-2xl hover:bg-violet-blue-dark
      duration-300 leading-5 ${addStyles}`}
    >
      {children}
    </button>
  );
};

export default BtnBlue;
