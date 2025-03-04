import LogIn from "../LogIn/page";
import Navbar from "../Navbar/page";
import MobileSearchInput from "../mobileSearchInput/page";


 export default function MobileMenu({ click } : {click : () => void}) {
    return (
        // Menu for mobile
        <div className="py-5 gap-[20px] flex flex-col">
            <LogIn />
            <MobileSearchInput click={click} />
            <div onClick={click}>
                <Navbar />
            </div>
        </div>
    );
}

