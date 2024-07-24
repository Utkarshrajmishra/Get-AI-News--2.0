import { FaArrowRight } from "react-icons/fa";
import ArrowIcon from "../assets/Image/cursor.png";
import Message from "../assets/Image/message.png"
const HeroSection = () => {
  return (
    <div className="relative text-white py-[72px] overflow-hidden bg-black top[(calc(100%-96px)] bg-[linear-gradient(to_bottom,#000,#300D42_34%,#4F21A1_65%,#A46EDB_82%)]">
      <div className="relative container z-[100]">
        <div className="flex text:sm items-center justify-center">
          <div className="flex gap-2 w-fit border py-1 px-2 rounded-lg items-center">
            <p className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 text-transparent tracking-wide bg-clip-text [-webkit-background-clip:text]">
              ✨ Version 2.0 is here
            </p>
            
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative inline-flex mt-8">
            <h1 className="text-6xl md:text-9xl font-bold tracking-wide text-white text-center  ">
              Get AI <br /> News Every Day
            </h1>
            <img
              src={ArrowIcon}
              alt="Arrow Icon"
              height={200}
              width={200}
              className="absolute left-[78px] top[120px] hidden lg:inline"
            />
          </div>
          <p className="text-center text-md  tracking-wider md:text-[17px] mt-8 max-w-5xl">
            Discover cutting-edge advancements and trends in artificial
            intelligence. From breakthrough research to real-world applications,
            our comprehensive coverage keeps you informed and inspired.
          </p>
        </div>
        <div className="flex  items-center justify-center mt-8">
          <button className="p-3 hover:bg-slate-200 text-sm font-semibold tracking-wider bg-purple-900 rounded-lg text-white">
            Get started for free
          </button>
        </div>
      </div>
      <div className="absolute  h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]  top-[calc(100%-96px)] z-[10]"></div>
    </div>
  );
};

export default HeroSection;
