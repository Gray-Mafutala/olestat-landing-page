import React from "react";

type SectionParagraphProps = {
  addStyles?: string;
  children: React.ReactNode;
};

const SectionParagraph = ({ addStyles, children }: SectionParagraphProps) => {
  return (
    <p
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-easing="ease-out"
      className={addStyles}
    >
      {children}
    </p>
  );
};

export default SectionParagraph;
