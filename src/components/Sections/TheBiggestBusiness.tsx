import smillingWoman from "../../assets/images/great-customer/smiling-woman.png";
import BtnBlue from "../UI/BtnBlue";

const TheBiggestBusiness = () => {
  return (
    <section
      className="px-4 mobileM:px-5 mobileL:px-6 max-w-[1300px] mx-auto
      pt-48 flex items-center justify-between"
    >
      {/* left content */}
      <div className="max-w-xl">
        <img
          className="w-full h-auto object-cover"
          src={smillingWoman}
          alt=""
        />
      </div>

      {/* right content */}
      <div className="flex flex-col items-start">
        <h2 className="text-4xl font-bold text-black-off max-w-md">
          The biggest business for your clients
        </h2>

        <p className="max-w-[430px] mt-4 mb-20">
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
