import React from "react";

type SectionTitleProps = {
  addStyles?: string;
  children: React.ReactNode;
};

const SectionTitle = ({ addStyles, children }: SectionTitleProps) => {
  return (
    <h2
      data-aos="zoom-out"
      data-aos-duration="600"
      data-aos-easing="ease-out"
      className={`${addStyles}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
