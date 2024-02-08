import WomanInWhiteSuit from "../../assets/images/hero/woman-in-white-suit.png";

const Hero = () => {
  return (
    <section
      // 84px = height of <Header /> component
      className="pt-3 bg-linear-violet-blue laptop:h-[calc(100vh-84px)]"
    >
      {/* container */}
      <div
        className="section-page h-full flex items-center
        pt-6 pb-7 tabletM:pt-0 tabletM:pb-0"
      >
        {/* left content */}
        <div
          className="w-full text-center tabletM:w-auto
          tabletM:text-left flex flex-col gap-y-8 items-center 
          tabletM:items-stretch"
        >
          {/* title and paragraph */}
          <h1
            className="text-white font-bold
            text-4xl mobileM:text-5xl laptop:text-6xl desktop:text-7xl duration-200"
          >
            We Build A <br />
            Premium Business
          </h1>
          <p className="max-w-lg text-white">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros.
          </p>

          {/* email input and btn */}
          <div
            className="flex flex-col mobileM:flex-row mobileM:items-center
            gap-x-6 gap-y-3"
          >
            <div
              className="relative flex items-center justify-between 
              max-w-xs text-[#0d0e14] w-full"
            >
              <input
                type="email"
                id="email-get-quote"
                placeholder="Your email"
                className="w-full p-4 bg-white rounded-2xl pr-11 
                outline-none ml-[2px] focus:shadow-[0_0_0_2px_#000] 
                duration-200 placeholder-primary leading-5"
              />

              <span className="absolute right-4">
                <svg className="w-5 h-5 fill-[#0D0E14]">
                  <path d="M10 1.667c-4.583 0-8.333 3.75-8.333 8.333s3.75 8.333 8.333 8.333c1.5 0 2.917-.416 4.167-1.083.416-.25.5-.75.333-1.167-.25-.416-.75-.5-1.167-.333-3.166 1.833-7.25.75-9.083-2.417-1.833-3.166-.75-7.25 2.417-9.083 3.166-1.833 7.25-.75 9.083 2.417.583 1 .917 2.166.917 3.333v.667c0 .833-.667 1.5-1.5 1.5-.834 0-1.5-.667-1.5-1.5V7.083c0-.5-.334-.833-.834-.833-.416 0-.75.25-.833.667-1.667-1.167-4.083-.75-5.25.916-1.167 1.667-.75 4.084.917 5.25 1.583 1.084 3.666.834 4.916-.583 1.084 1.333 3 1.583 4.334.583.75-.583 1.25-1.5 1.25-2.5V10c.166-4.583-3.584-8.333-8.167-8.333Zm0 10.416A2.063 2.063 0 0 1 7.917 10c0-1.167.916-2.083 2.083-2.083 1.167 0 2.083.916 2.083 2.083A2.063 2.063 0 0 1 10 12.083Z" />
                </svg>
              </span>
            </div>

            <button
              className="min-w-[118px] bg-black text-[#fcfaff]
              font-medium px-5 py-4 rounded-2xl hover:shadow-[0_0_0_2px_#fff]
              hover:bg-violet-blue-dark duration-300 whitespace-nowrap 
              leading-5"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* right content */}
        <div className="w-full tabletM:w-auto hidden tabletM:block h-full max-w-[516px]">
          <img
            src={WomanInWhiteSuit}
            alt=""
            className="w-[360px] laptop:w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
