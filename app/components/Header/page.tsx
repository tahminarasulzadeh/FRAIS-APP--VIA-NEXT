import Logo from "../Logo/page"
import Navbar from "../Navbar/page"
import PageTitle from "../PageTitle/page"
import HeaderPart from "../HeaderPart/page"


export default function Header  () {
    // full header
    return (
        <div >
            <PageTitle />
            <div className=" flex p-10 justify-between items-center">
                <div className="hidden xl:inline-block">
                <Navbar />

                </div>
                <Logo />
                <HeaderPart  />

            </div>
        </div>
    )
}