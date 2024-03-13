import React from 'react';

const HeroSection = () => {
  return (
    <div className="mt-2 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Column 1 */}
        <div className="md:w-3/5 mx-3 mb-8 md:mb-0 md:mr-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">Empowering Success Through Expert IT Talent – Your Gateway to Innovation and Efficiency!</h1>
          <div className="md:hidden mb-4">
            <img width={224} height={224} src="/home_image/RefyndataHero.svg" alt="UsRefyndataHero" className="w-56 md:w-full mx-auto" />
          </div>
          <p className="text-[15px] md:text-xl mb-6 w-[100%] md:w-[75%]">Let's face it, traditional IT can be slow and fragmented. Refyn Data disrupts this by uniting specialists – analysts, developers, and testers – in one dynamic hub. Imagine your project needs met swiftly, communication flowing effortlessly, and solutions delivered with exceptional quality. Experience the Refyn Data difference.</p>
          <button className="bg-[#0079A0] hover:shadow-lg text-white font-bold py-2 px-4 rounded transform transition-transform hover:translate-y-[-2px]">
            Contact 
          </button>
        </div>
        {/* Column 2 */}
        <div className="md:w-2/5 hidden md:block">
          <img width={538} height={601} src="/home_image/RefyndataHero.svg" alt="refyndata" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
