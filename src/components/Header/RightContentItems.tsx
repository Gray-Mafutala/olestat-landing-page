import ArrowRightWhite from "../../assets/svg/common/arrow-right-white.svg";

const RightContentItems = () => {
  return (
    <>
      <button className="p-3 hover:text-violet-blue duration-300">
        Sign up
      </button>

      <button
        className="text-white bg-violet-blue flex items-center 
            gap-x-[6px] p-3 rounded-lg hover:shadow-[0_0_0_2px_#6425d3] 
            hover:bg-black duration-300"
      >
        Try for free
        <img src={ArrowRightWhite} alt="" className="w-5 h-5" />
      </button>
    </>
  );
};

export default RightContentItems;
