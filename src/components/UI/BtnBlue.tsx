import React from "react";

type BtnBlueProps = {
  addStyles?: string;
  children: React.ReactNode;
};

const BtnBlue = ({ addStyles, children }: BtnBlueProps) => {
  return (
    <button
      className= {`min-w-[118px] bg-violet-blue text-[#fcfaff]
      font-medium px-5 py-4 rounded-2xl hover:bg-violet-blue-dark
      duration-300 leading-5 ${addStyles}`}
    >
      {children}
    </button>
  );
};

export default BtnBlue;
