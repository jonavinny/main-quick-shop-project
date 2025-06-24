import React from "react";



export default function Herosection() {
    return (
<>
<div className="text-[#FFFFFF] body-font bg-white"  >
  <div className="container mx-auto flex px-5 py-24 items-center text-black">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24  flex flex-col items-center text-center">
      <h1 className="title-font  text-3xl font-medium text-black] ">Before they sold out 
        readymade gluten
      </h1>
      <p className="mb-8 pt-[20px]">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-orange-300 border-0 py-2 px-6  hover:bg-orange-400  rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/7JrKWgbW/istockphoto-2174156646-2048x2048.jpg"></img>
    </div>
  </div>
</div>;
</>
)

}

