import Link from "next/link"

export default function Navbar() {
    // menu for website
    return (
        <div className="flex gap-[20px] xl:flex-row flex-col justify-start items-center xl:justify-between">
            <Link className="text-center text-black text-[16px] font-thin tracking-widest leading-snug" href="http://localhost:3000/products">SHOP</Link>
            <Link className="text-center text-black text-[16px] font-thin tracking-widest leading-snug" href=" http://localhost:3000/history">OUR HISTORY</Link>
            <Link className="text-center text-black text-[16px] font-thin tracking-widest leading-snug" href="#" >BLOG</Link>
            <Link className="text-center text-black text-[16px] font-thin tracking-widest leading-snug" href="#">SALE</Link>
            <Link className="text-center text-black text-[16px] font-thin tracking-widest leading-snug"  href="http://localhost:3000/contact" >CONTACT</Link>
        </div>
    )
}