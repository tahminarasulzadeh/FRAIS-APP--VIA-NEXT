import Image from "next/image"

import barsImg from '../../../public/images/pexels-meruyert-gonullu-7500223.jpg'

export default function ProbioticBars() {
    return (
        <div className="p-24  lg:flex-row flex-col items-center flex justify-center gap-[50px]">
            <div className="relative flex">
                <div className=" lg:w-[500px] lg:h-[600px] w-[350px] h-[450px] bg-[#5E5E4A]">
                </div>
                <Image src={barsImg} alt="PROBIOTIC CLEANSING BARS" className=" lg:left-10 lg:bottom-10 absolute  lg:w-[500px] lg:h-[600px] left-5 bottom-5  w-[400px] h-[450px]" />
            </div>
            <div className="flex gap-[20px] flex-col">
                <div className="flex  justify-center lg:justify-start ">
                    <p className="lg:text-start  text-center text-[30px] text-gray-700  font-extralight tracking-wide leading-snug">PROBIOTIC <br /> CLEANSING BARS</p>
                </div>

                <div className="flex  lg:justify-start justify-center">
                    <p className="lg:text-start text-center w-[350px] lg:w-[400px]  mt-5 text-gray-700 text-[18px] font-extralight tracking-[1px] leading-[30px]">
                        I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I&apos;m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>
                <div className="flex lg:justify-start justify-center">
                    <button className="w-[120px] py-2 bg-transparent border-[1px] border-[#5E5E4A] text-[#5E5E4A] text-[14px] hover:bg-[#5E5E4A] hover:text-white  transition-all duration-300 ease-in font-thin tracking-widest leading-snug">Shop Soap</button>
                </div>

            </div>


        </div>
    )
}