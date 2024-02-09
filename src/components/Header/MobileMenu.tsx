import React from "react";
import { useEffect } from "react";

import NavLinkItems from "./NavLinkItems";
import RightContentItems from "./RightContentItems";

type MobileMenuProps = {
  isOpen: boolean;
  onHide: () => void;
};

const MobileMenu = ({ isOpen, onHide }: MobileMenuProps) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isOpen]);

  return (
    <div
      onClick={onHide}
      className={
        isOpen
          ? `bg-black/10 fixed inset-0 duration-300 translate-x-0 z-30`
          : `bg-black/10 fixed inset-0 duration-300 -translate-x-full z-30`
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-full pt-6 text-white bg-violet-blue-dark/60
        backdrop-blur-lg font-medium text-xl mobileL:text-2xl max-w-md"
      >
        {/* btn to close mobile menu */}
        <button
          onClick={onHide}
          className="absolute top-3 right-3 p-1 bg-slate-400 rounded-full"
        >
          <svg
            className="w-7 h-7 fill-none stroke-[1.5] stroke-white  
          hover:stroke-violet-blue duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <menu
          className="flex flex-col items-left mobileL:gap-y-2
          p-2 text-white"
        >
          <NavLinkItems hideMobileMenu={onHide} />
        </menu>

        <div
          className="mt-2 mx-2 pt-4 border-t-[1.5px] border-white/80
          flex flex-col items-center gap-y-2 mobileM:hidden"
        >
          <RightContentItems hideMobileMenu={onHide} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
