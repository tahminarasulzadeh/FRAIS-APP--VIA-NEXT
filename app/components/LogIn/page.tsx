import { FaUserAlt } from "react-icons/fa";

export default function LogIn () {
    // login part 
    return (
        <div className="flex xl:justify-center  justify-start gap-[10px] xl:px-5 pt-2">
        <div className="bg-black p-2 rounded-full">
            <FaUserAlt className="text-white" />
        </div>

        <button className="border-none text-black text-[14px] font-thin tracking-widest leading-snug">Log In</button>

    </div>
    )
}