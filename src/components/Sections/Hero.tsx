import WomanInWhiteSuit from "../../assets/images/hero/woman-in-white-suit.png";
const Hero = () => {
  return (
    <section className="bg-linear-violet-blue px-4 pt-3 mobileM:px-5 mobileL:px-6">
      {/* container */}
      <div
        className="max-w-[1300px] mx-auto flex items-center justify-between 
        overflow-hidden"
      >
        {/* left content */}
        <div className="flex flex-col gap-y-8">
          {/* title and paragraph */}
          <h1 className="text-white text-6xl desktop:text-7xl font-bold">
            We Build A <br /> Premium Business
          </h1>
          <p className="max-w-lg text-white">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros.
          </p>

          {/* email input and btn */}
          <div className="flex items-center gap-x-6">
            <div
              className="relative flex items-center justify-between 
              max-w-xs text-[#0d0e14] w-full"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full p-4 bg-white rounded-2xl pr-11 
                outline-none hover:shadow-[0_0_0_2px_#000] ml-[2px] 
                focus:shadow-[0_0_0_2px_#000] duration-300 
                placeholder-current leading-5"
              />

              <span className="absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0001 1.66675C5.41675 1.66675 1.66675 5.41675 1.66675 10.0001C1.66675 14.5834 5.41675 18.3334 10.0001 18.3334C11.5001 18.3334 12.9167 17.9167 14.1667 17.2501C14.5834 17.0001 14.6667 16.5001 14.5001 16.0834C14.2501 15.6667 13.7501 15.5834 13.3334 15.7501C10.1667 17.5834 6.08342 16.5001 4.25008 13.3334C2.41675 10.1667 3.50008 6.08342 6.66675 4.25008C9.83342 2.41675 13.9167 3.50008 15.7501 6.66675C16.3334 7.66675 16.6667 8.83342 16.6667 10.0001V10.6667C16.6667 11.5001 16.0001 12.1667 15.1667 12.1667C14.3334 12.1667 13.6667 11.5001 13.6667 10.6667V7.08342C13.6667 6.58342 13.3334 6.25008 12.8334 6.25008C12.4167 6.25008 12.0834 6.50008 12.0001 6.91675C10.3334 5.75008 7.91675 6.16675 6.75008 7.83341C5.58342 9.50008 6.00008 11.9167 7.66675 13.0834C9.25008 14.1667 11.3334 13.9167 12.5834 12.5001C13.6667 13.8334 15.5834 14.0834 16.9167 13.0834C17.6667 12.5001 18.1667 11.5834 18.1667 10.5834V10.0001C18.3334 5.41675 14.5834 1.66675 10.0001 1.66675ZM10.0001 12.0834C8.83342 12.0834 7.91675 11.1667 7.91675 10.0001C7.91675 8.83342 8.83342 7.91675 10.0001 7.91675C11.1667 7.91675 12.0834 8.83342 12.0834 10.0001C12.0834 11.1667 11.1667 12.0834 10.0001 12.0834Z"
                    fill="#0D0E14"
                  />
                </svg>
              </span>
            </div>

            <button
              className="min-w-[118px] bg-black text-[#fcfaff] font-medium px-5 py-4 rounded-2xl
              hover:shadow-[0_0_0_2px_#fff] hover:bg-violet-blue-dark 
              duration-300 whitespace-nowrap leading-5"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* right content */}
        <div className="max-w-[516px]">
          <img
            src={WomanInWhiteSuit}
            alt=""
            className=" laptop:w-[420px] laptop:-mb-[67px] desktop:w-full desktop:-mb-[82px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
