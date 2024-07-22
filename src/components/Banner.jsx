const Banner = () => {
  return (
    <div className="py-3 flex justify-center gap-1 bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_143,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))] text-center">
      <p className="text-sm hidden md:inline-block">Your Daily Dose of Artificial Intelligence Insights -{" "} </p>
      <p className="underline underline-offset-4 text-sm"> Explore for free</p>
    </div>
  );
};

export default Banner;
