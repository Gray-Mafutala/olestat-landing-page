import { Link } from "react-router-dom";

const listLinkItems = [
  { text: "Plateforme", link: "/", isDropdown: false },
  { text: "Solution", link: "/", isDropdown: true },
  { text: "Plan", link: "/", isDropdown: true },
  { text: "Ressource", link: "/", isDropdown: false },
  { text: "Company", link: "/", isDropdown: false },
];

type NavLinkItemsProps = {
  hideMobileMenu?: () => void;
};

const NavLinkItems = ({ hideMobileMenu }: NavLinkItemsProps) => {
  return (
    <>
      {listLinkItems.map(({ text, link, isDropdown }) =>
        isDropdown ? (
          <li>
            <Link
              key={text}
              to={link}
              onClick={hideMobileMenu}
              className="font-medium -tracking-[0.32px] leading-5 p-3 
              hover:text-violet-blue duration-300 inline-flex items-center
              gap-x-[6px] group"
            >
              {text}

              {/* icon down arrow */}
              <svg className="w-5 h-5 fill-current group-hover:fill-violet-blue">
                <path d="M14.667 7.642a.833.833 0 0 0-1.175 0l-2.992 2.95-2.95-2.95a.833.833 0 1 0-1.175 1.183l3.533 3.533a.833.833 0 0 0 1.184 0l3.575-3.533a.833.833 0 0 0 0-1.183Z" />
              </svg>
            </Link>
          </li>
        ) : (
          <li>
            <Link
              key={text}
              to={link}
              onClick={hideMobileMenu}
              className="font-medium -tracking-[0.32px] leading-5 p-3 
              hover:text-violet-blue duration-300 inline-flex"
            >
              {text}
            </Link>
          </li>
        )
      )}
    </>
  );
};

export default NavLinkItems;
