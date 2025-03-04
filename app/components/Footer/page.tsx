import Logo from "../Logo/page"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";




export default function Footer() {
    return (
        <div className="flex justify-center lg:justify-between lg:flex-row flex-col items-center p-24 ">
            {/* Social Media Links */}
            <div className="lg:flex  hidden flex-col gap-5 fixed bottom-16 left-14 z-50">
                <FaFacebookF />
                <FaInstagram />
                <FaPinterestP />
            </div>

            {/* Main Content */}
            <div className="flex w-full gap-12 lg:gap-0 relative top-0 flex-col lg:left-11 lg:flex-row lg:justify-evenly">
                {/* Logo */}
                <div className="lg:justify-start h-full flex justify-center">
                    <Logo />

                </div>
                <div className="flex justify-center flex-col gap-5">
                    <div className="flex justify-center items-center gap-5 flex-col lg:justify-start lg:items-start">
                        <p className="lg:text-3xl text-xl font-thing text-zinc-950 lg:text-start text-center"><strong> SHOP </strong></p>
                        <ul className="gap-1 flex flex-col">
                            <li className="text-md text-center lg:text-start font-thing text-zinc-950">CANDLES</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start" >SOAPS</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start">SALE</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start">GIFT CARD</li>
                        </ul>
                    </div>
                    <div className="flex gap-5 flex-col">
                        <p className="lg:text-3xl text-xl font-thing text-zinc-950 lg:text-start text-center"><strong>HELP</strong></p>
                        <ul className="gap-1 flex flex-col">
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start">TERMS & CONDITIONS</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start" >PRIVACY POLICY</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start">SHIPPING & RETURNS</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center flex-col gap-5">
                    <div className="flex gap-5 flex-col">
                        <p className="lg:text-3xl text-xl font-thing text-zinc-950 lg:text-start text-center"><strong>FRAIS</strong></p>
                        <ul className="gap-1 flex flex-col">
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start">OUR STORY</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start" >CONTACT US</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start">FAQ</li>
                        </ul>
                    </div>
                    <div className="flex gap-5  flex-col">
                        <p className="lg:text-3xl text-xl font-thing text-zinc-950 lg:text-start text-center"><strong>CONTACT US</strong></p>
                        <ul className="gap-1 flex flex-col">
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start">123-456-7890</li>
                            <li className="text-md font-thing text-zinc-950 text-center lg:text-start" >INFO@MYSITE.COM</li>

                        </ul>

                        <div className="flex lg:justify-start justify-center gap-5">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaPinterestP />
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}