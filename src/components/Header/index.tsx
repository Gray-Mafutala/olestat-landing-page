import { useState } from "react";
import { Link } from "react-router-dom";

import OlestatLogo from "../../assets/common/olestat.png";
import NavLinkItems from "./NavLinkItems";
import RightContentItems from "./RightContentItems";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const showMobileMenu = () => setMobileMenu(true);
  const hideMobileMenu = () => setMobileMenu(false);

  return (
    <>
      {/* mobile menu version */}
      <MobileMenu isOpen={mobileMenu} onHide={hideMobileMenu} />

      {/* Header itself */}
      <header className="pt-5 pb-4 px-4 mobileM:px-5 mobileL:px-6">
        {/* nav - for the desktop menu version */}
        <nav
          className="max-w-[1300px] mx-auto flex items-center justify-between
          gap-x-8 text-black font-medium -tracking-[0.32px] leading-5
          whitespace-nowrap"
        >
          {/* wrapper of btn to show mobile menu and site logo */}
          <div className="flex items-center gap-x-3">
            {/* btn to show mobile menu */}
            <button onClick={showMobileMenu} className="w-8 h-8 laptop:hidden">
              <svg
                className="w-7 h-7 fill-none stroke-[1.5] stroke-black  
                hover:stroke-violet-blue duration-300"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* logo */}
            <Link
              to="/"
              className="pr-3 hover:opacity-60 active:scale-[.98] duration-300"
            >
              <img
                src={OlestatLogo}
                alt="Olestat logo"
                className="w-32 laptop:w-[164px] min-w-[120px] h-auto "
              />
            </Link>
          </div>

          {/* nav-links */}
          <menu className="hidden laptop:flex items-center gap-x-3 text-black">
            <NavLinkItems />
          </menu>

          {/* right content */}
          <div className="hidden mobileM:flex items-center gap-x-4">
            <RightContentItems />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
