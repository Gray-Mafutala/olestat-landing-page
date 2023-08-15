import { Link } from "react-router-dom";
import ArrowDownBlack from "../../assets/svg/common/arrow-down-black.svg";

const listLinkItems = [
  { text: "Plateforme", link: "/", isDropdown: false },
  { text: "Solution", link: "/", isDropdown: true },
  { text: "Plan", link: "/", isDropdown: true },
  { text: "Ressource", link: "/", isDropdown: false },
  { text: "Company", link: "/", isDropdown: false },
];
const NavLinkItems = () => {
  return (
    <>
      {listLinkItems.map(({ text, link, isDropdown }) =>
        isDropdown ? (
          <Link
            key={text}
            to={link}
            className="font-medium text-black -tracking-[0.32px] leading-5
            p-3 hover:text-violet-blue duration-300
            flex items-center gap-x-[6px]"
          >
            {text}
            <img src={ArrowDownBlack} alt="" className="w-5 h-5" />
          </Link>
        ) : (
          <Link
            key={text}
            to={link}
            className="font-medium -tracking-[0.32px] leading-5
            p-3 hover:text-violet-blue duration-300"
          >
            {text}
          </Link>
        )
      )}
    </>
  );
};

export default NavLinkItems;
