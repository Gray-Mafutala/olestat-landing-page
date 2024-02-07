import dribbble from "../../assets/images/brands/dribbble.png";
import google from "../../assets/images/brands/google.png";
import microsoft from "../../assets/images/brands/microsoft.png";
import paypal from "../../assets/images/brands/paypal.png";
import uber from "../../assets/images/brands/uber.png";

const TrustedCompanies = () => {
  return (
    <section className="pt-36 flex flex-col items-center gap-y-12 text-center">
      <h2 className="text-4xl font-bold text-black-off max-w-xl">
        Trusted Companies from around the world
      </h2>

      <p className="max-w-[816px]">
        Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet
        tellus purus sit odio eget. Diam morbi faucibus vitae neque id urna,
        sit. Lectus ac.
          </p>
          
          <div className="flex items-center gap-x-[90px]">
             <img src={uber} alt="" /> 
             <img src={google} alt="" /> 
             <img src={paypal} alt="" /> 
             <img src={microsoft} alt="" /> 
             <img src={dribbble} alt="" /> 
          </div>
    </section>
  );
};

export default TrustedCompanies;
