'use client'
import { useState } from "react";
import LogIn from "../LogIn/page";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { GoGift } from "react-icons/go";
import { BsBagFill } from "react-icons/bs";
import SearchInput from "../SearchInput/page";
import MobileMenu from "../MobileMenu/page";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";


export default function HeaderPart() {

 const cart = useSelector((state: RootState) => state.cart.items)
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="flex justify-between  items-center gap-[15px]">
            <div className="hidden xl:inline-block">

                <SearchInput />

            </div>
            <div className="xl:inline-block hidden">
                <LogIn />

            </div>
            <div className="pt-2 ">
                <GoGift className="text-[26px]" />

            </div>

            <Link href="/cart" className="pt-1.5 relative">
                <BsBagFill className="text-[28px] text-[#5E5E4A]" />
                <p className="absolute text-[14px] text-white top-3 left-2.5">{cart.length}</p>
            </Link>


            <div className="relative  ">
                {/* Hamburger/X Icon */}

                <div
                    className="pt-1.5 w-full flex justify-center xl:hidden relative cursor-pointer z-50 "
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <IoMdClose className="text-[28px] z-50 text-black transition-transform transform rotate-90" />

                    ) : (
                        <RxHamburgerMenu className="text-[28px] text-[#5E5E4A]" />

                    )}


                </div>

                {/* Full-screen overlay menu */}
                <div
                    className={`fixed inset-0 bg-[#D7D7CB]  z-40 flex flex-col items-center justify-center text-white transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300`}

                >
                    <div className="absolute top-24 ">
                        <MobileMenu click={closeMenu} />
                    </div>

                </div>
            </div>
        </div>
    )
}