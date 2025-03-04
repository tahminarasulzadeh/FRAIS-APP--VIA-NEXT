import Link from "next/link"

export default function Logo () {
    return (
        <Link href="/" className="w-[150px] p-2 h-full border-[3px] border-solid border-black">
            <p className="text-center text-black text-[22px] font-thin tracking-widest leading-snug">FRAIS</p>
        </Link>
    )
}