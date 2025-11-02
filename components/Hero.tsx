import React from "react";

function Hero() {
  return (
    <div className="h-[700px] min-width-md flex flex-row w-full items-center border border-2 border-black justify-around font-extrabold font-sans flex-wrap">
      <div className="align-center justify-center">
        <h5 className="text-xs">Track and visualize all expenses</h5>
        <h1 className="text-7xl">Bud Track</h1>
        <h5 className="text-s">
          A simple way to maintain equal or above normal savings
        </h5>
      </div>
      <div className="w-[320px]">logo</div>
    </div>
  );
}

export default Hero;
