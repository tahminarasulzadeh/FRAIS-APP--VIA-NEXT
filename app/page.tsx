import Image from "next/image";
import HomeImg from '../public/images/pexels-tara-winstead-6682999.jpg'
import Favorites from "./components/Favrorites/pages";
import ProbioticBars from "./components/ProbioticBars/pages";
import MostPopular from "./MostPopular/page";
import NaturallySimple from "./components/Naturally/page";
import Blog from "./components/Blog/page";



export default function Home() {
  return (
    // landing page
    <div>
      {/* home page */}
      <div className="flex xl:pl-24 xl:gap-0 gap-[10px] flex-col-reverse xl:row xl:justify-start xl:relative">
        <Image className="xl:max-w-[1000px] xl:max-h-[760px]" src={HomeImg} alt="home page image" />
        <div className="flex  px-5 justify-start items-start flex-col gap-[10px] xl:top-[25%] xl:gap-[20px] xl:left-[50%] xl:absolute">
          <p className="text-black text-[16px] font-thin tracking-widest leading-snug xl:text-[20px]">HANDCRAFTED ORGANIC SOAPS & CANDLES</p>
          <p className="text-black  text-[32px] xl:text-[52px] font-thin tracking-widest leading-snug">JUST LIKE NATURE
            <br /> INTENDED</p>
          <div className="flex justify-start items-start ">
            <button className="bg-[#5E5E4A] text-white w-[120px] py-2 text-[14px] font-thin tracking-widest leading-snug 
            hover:bg-[#B9B4B0] hover:border-[#5E5E4A] hover:text-[#5E5E4A] hover:border-[1px] 
             transition-all duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>
      </div>
     {/* Shop our favorites */}
     <Favorites/>
     <ProbioticBars/>
     <MostPopular/>
     <NaturallySimple/>
    <Blog />
    </div>

  );
}
