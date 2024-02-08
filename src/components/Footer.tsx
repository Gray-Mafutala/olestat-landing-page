import { Link } from "react-router-dom";
import OlestatLogo from "../assets/common/olestat.png";
import facebookIcon from "../assets/svg/social-networks/facebook-icon.svg";
import twitterIcon from "../assets/svg/social-networks/twitter-icon.svg";
import linkedinIcon from "../assets/svg/social-networks/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="section-page pt-20 mb-10">
      <div
        className="flex flex-col items-center text-center gap-x-8 gap-y-12
        mobileL:grid mobileL:grid-cols-2 mobileL:justify-items-center
        tablet:flex tablet:flex-row tablet:justify-between tablet:items-stretch
        tablet:text-left"
      >
        {/* site logo, paragraph, and social networks */}
        <div
          className="flex flex-col items-center text-center
          tablet:items-stretch tablet:text-left"
        >
          {/* logo */}
          <Link
            to="/"
            className="pr-3 hover:opacity-60 active:scale-[.98] duration-300"
          >
            <img
              src={OlestatLogo}
              alt="Olestat logo"
              className="w-32 laptop:w-[164px] min-w-[120px] h-auto"
            />
          </Link>

          <p className="mt-6 mb-10 tablet:max-w-[286px]">
            Ut risus mattis interdum faucibus facilisi. Facilisi purus
            accumsan aliquam.
          </p>

          <div className="flex items-center gap-x-6">
            <Link to="/" className="hover:scale-125 duration-200">
              <img src={facebookIcon} alt="facebook" />
            </Link>
            <Link to="/" className="hover:scale-125 duration-200">
              <img src={twitterIcon} alt="twitter" />
            </Link>
            <Link to="/" className="hover:scale-125 duration-200">
              <img src={linkedinIcon} alt="linkedin" />
            </Link>
          </div>
        </div>

        {/* Company */}
        <ul className="flex flex-col gap-y-3 tablet:gap-y-5 whitespace-nowrap">
          <li className="text-xl font-semibold text-black mb-1">Company</li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Socials
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Activity
            </Link>
          </li>
        </ul>

        {/* Product */}
        <ul className="flex flex-col gap-y-3 tablet:gap-y-5 whitespace-nowrap">
          <li className="text-xl font-semibold text-black mb-1">Product</li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Platform
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Plans
            </Link>
          </li>
        </ul>

        {/* Resources */}
        <ul className="flex flex-col gap-y-3 tablet:gap-y-5 whitespace-nowrap">
          <li className="text-xl font-semibold text-black mb-1">Resources</li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Use Cases
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200"
            >
              Insights
            </Link>
          </li>
        </ul>
      </div>

      {/* bottom items */}
      <div
        className="mt-20 flex justify-center flex-wrap gap-x-6 gap-y-4 text-black 
        font-medium whitespace-nowrap"
      >
        <Link to="/" className="hover:text-violet-blue duration-200">
          Terms & Conditions
        </Link>
        <Link to="/" className="hover:text-violet-blue duration-200">
          Privacy Policy
        </Link>
        <Link to="/" className="hover:text-violet-blue duration-200">
          Cookies
        </Link>
        <Link to="/" className="hover:text-violet-blue duration-200">
          Refunds
        </Link>
        <Link to="/" className="hover:text-violet-blue duration-200">
          License
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
