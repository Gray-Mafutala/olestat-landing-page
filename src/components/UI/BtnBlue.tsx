import React from "react";

type BtnBlueProps = {
  children: React.ReactNode;
};

const BtnBlue = ({ children }: BtnBlueProps) => {
  return (
    <button
      className="min-w-[118px] bg-violet-blue text-[#fcfaff]
      font-medium px-5 py-4 rounded-2xl hover:bg-violet-blue-dark
      duration-300 leading-5"
    >
      {children}
    </button>
  );
};

export default BtnBlue;
