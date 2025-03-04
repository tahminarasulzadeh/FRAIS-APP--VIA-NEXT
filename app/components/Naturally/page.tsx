import Image from "next/image"
import Link from "next/link"

import img1 from '../../../public/images/pexels-lilartsy-3563633.jpg'
import img2 from '../../../public/images/pexels-hngstrm-2648230.jpg'

export default function NaturallySimple() {
    return (
        <div className="md:p-20 p-5 flex flex-col justify-center items-center">
            <div className="flex  justify-center gap-[10px] items-center flex-col">
                <h1 className="font-thin  text-[26px] md:text-[52px] text-black text-center">NATURALLY SIMPLE</h1>
                <p className="font-thin md:w-[650px] w-[325px] text:md md:text-lg text-black text-center">
                    I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I&apos;m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <Link href=  "  http://localhost:3000/history" className=" py-2 px-3 mt-3 border-[1px] bg-white border-black hover:text-white hover:bg-[#5E5E4A] transition-all duration-500 ease-in">
                    Our Story
                </Link>
            </div>
            <div className="flex justify-center max-w-[1200px] p-3 mb-14 md:p-24 flex-col relative items-center">
                <Image src={img2} alt="background" className=" w-full h-full " />
                <Image src={img1} alt="background" className="absolute top-[30%] w-[50%] h-[80%] " />
            </div>
        </div>
    )
}