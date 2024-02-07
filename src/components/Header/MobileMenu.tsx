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
      className={
        isOpen
          ? `fixed inset-0 text-white bg-violet-blue-dark/70 backdrop-blur-lg 
          z-30 pt-6 font-medium text-lg mobileL:text-2xl duration-300 
          translate-x-0
          max-w-md`
          : `fixed inset-0 text-white bg-violet-blue-dark/70 backdrop-blur-lg 
          z-30 pt-8 font-medium text-lg mobileL:text-2xl duration-300 
          -translate-x-full
          max-w-md`
      }
    >
      {/* btn to close mobile menu */}
      <button className="absolute top-3 right-3" onClick={onHide}>
        <svg
          className="w-7 h-7 fill-none stroke-[1.5] stroke-white  
          hover:stroke-violet-blue duration-300"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <menu className="flex flex-col items-left mobileL:gap-y-2 text-white">
        <NavLinkItems hideMobileMenu={onHide} />
      </menu>

      <div
        className="mt-2 mx-2 pt-4 border-t-2 border-white/60 flex flex-col 
        items-center gap-y-2 mobileM:hidden"
      >
        <RightContentItems hideMobileMenu={onHide} />
      </div>
    </div>
  );
};

export default MobileMenu;
