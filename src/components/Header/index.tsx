import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinkItems from "./NavLinkItems";
import OlestatLogo from "../../assets/common/olestat.png";
import RightContentItems from "./RightContentItems";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMobileMenu = () => setMobileMenu((prev) => !prev);

  return (
    <>
      {/* menu for small screens */}
      <MobileMenu isOpen={mobileMenu} />

      {/* Header itself */}
      <header className="pt-5 pb-4 px-4 mobileM:px-5 mobileL:px-6">
        <nav
          className="max-w-[1300px] mx-auto flex items-center justify-between
          gap-x-8 text-black font-medium -tracking-[0.32px] leading-5
          whitespace-nowrap"
        >
          {/* btn to show mobile menu */}
          <button
            onClick={toggleMobileMenu}
            className="w-8 h-8 laptop:hidden z-40"
          ></button>

          {/* logo */}
          <Link
            to="/"
            className="hover:opacity-70 active:scale-[.98] duration-300"
          >
            <img
              src={OlestatLogo}
              alt="Olestat logo"
              className="w-[164px] h-auto"
            />
          </Link>

          {/* nav-links */}
          <menu className="flex items-center gap-x-3">
            <NavLinkItems />
          </menu>

          {/* right content */}
          <div className="flex items-center gap-x-4">
            <RightContentItems />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
