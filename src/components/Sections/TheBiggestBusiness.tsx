import smillingWoman from "../../assets/images/great-customer/smiling-woman.png";
import BtnBlue from "../UI/BtnBlue";

const TheBiggestBusiness = () => {
  return (
    <section
      className="section-page pt-48 flex items-center 
      justify-center mobileL:justify-between"
    >
      {/* left content */}
      <div className="max-w-lg">
        <img
          className="hidden mobileL:block h-auto object-cover
          mobileL:w-[480px] laptop:w-full duration-500"
          src={smillingWoman}
          alt=""
        />
      </div>

      {/* right content */}
      <div
        className="flex flex-col items-center text-center 
        mobileL:flex-grow mobileL:items-start mobileL:text-left"
      >
        <h2 className="max-w-sm">The biggest business for your clients</h2>

        <p className="max-w-[430px] mt-4 mb-8 tablet:mb-20">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero
          facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit.
          Morbi aliquam porttitor mattis consequat neque, tellus blandit.
        </p>

        <BtnBlue>Get started</BtnBlue>
      </div>
    </section>
  );
};

export default TheBiggestBusiness;
