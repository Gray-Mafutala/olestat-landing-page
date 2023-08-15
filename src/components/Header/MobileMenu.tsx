import { useEffect } from "react";
import NavLinkItems from "./NavLinkItems";
import RightContentItems from "./RightContentItems";

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isOpen]);

  return(
    <div
      className={
        isOpen
          ? `fixed inset-0 text-white bg-violet-blue/50 backdrop-blur-sm 
          z-30 pt-8 font-medium text-lg mobileL:text-2xl duration-500 
          translate-x-0`
          : `fixed inset-0 text-white bg-violet-blue/50 backdrop-blur-sm 
          z-30 pt-8 font-medium text-lg mobileL:text-2xl duration-500 
          -translate-x-full`
      }
    >
      <menu className="flex flex-col items-center gap-y-2">
        <NavLinkItems />
      </menu>

      <div className="mt-7 flex flex-col items-center gap-y-2">
        <RightContentItems />
      </div>
    </div>
  );
};

export default MobileMenu;
