import LogIn from "../LogIn/page";
import Navbar from "../Navbar/page";
import MobileSearchInput from "../mobileSearchInput/page";

// Define the type for the props
interface MobileMenuProps {
    click: () => void; // The `click` prop is a function with no arguments and no return value
}

 export default function MobileMenu({ click }: MobileMenuProps) {
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

