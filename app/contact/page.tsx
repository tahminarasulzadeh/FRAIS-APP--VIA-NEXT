
import Image from "next/image";
import Link from "next/link";
import contactImg from '../../public/images/c837a6_1e5ac650ac814a5d908f21bd78e529ae~mv2.avif'



export default function Contact() {


    return <div>
        <div className="flex xl:justify-start justify-center p-5 xl:p-28 xl:gap-36 gap-12 items-center xl:flex-row flex-col">
            <Image src={contactImg} alt="contact image " className="max-w-[500px] max-h-[450px]" />
            <div className="flex flex-col gap-4 justify-start ">
                <p className="xl:text-[52px]  xl:text-start text-center text-[27px] text-gray-700 tracking-wide">GET IN TOUCH</p>
                <div className="flex xl:justify-start items-center xl:flex-row flex-col justify-center w-full gap-[45px] ">
                    <div className="flex flex-col xl:gap-[35px] gap-[10px]">
                        <p className="text-[21px] xl:text-start text-center text-black tracking-wide"> <strong>Opening Hours</strong></p>

                        <ul className="flex flex-col  xl:justify-start xl:items-start justify-center items-center">
                            <li className="text-[21px] text-gray-700 tracking-wide" >MON - FRI: 8am - 8pm </li>
                            <li className="text-[21px] text-gray-700 tracking-wide" >Saturday: 8am - 8pm </li>
                            <li className="text-[21px] text-gray-700 tracking-wide" >Sunday: 8am - 8pm </li>
                        </ul>
                    </div>

                    <div className="flex flex-col xl:gap-[35px] gap-[10px]">
                        <p className="text-[21px] xl:text-start text-center text-black tracking-wide"> <strong>Opening Hours</strong></p>

                        <ul className="flex flex-col  xl:justify-start xl:items-start justify-center items-center">
                            <li className="text-[21px] text-gray-700 tracking-wide" >MON - FRI: 8am - 8pm </li>
                            <li className="text-[21px] text-gray-700 tracking-wide" >Saturday: 8am - 8pm </li>
                            <li className="text-[21px] text-gray-700 tracking-wide" >Sunday: 8am - 8pm </li>
                        </ul>
                    </div>
                </div>

                <Link href="#" className="text-[21px] mt-5 text-gray-700  xl:text-start text-center tracking-wide underline">
                    info@mysite.com
                </Link>

            </div>
        </div>

        <div className="w-full h-full flex justify-center lg:flex-row flex-col lg-flex-row ">
            {/* Left Section */}
            <div className="flex bg-[#D7D7CB] p-24 justify-center  min-h-[1200px] items-center lg:items-start gap-[35px] flex-col  w-full lg:w-1/2">
                <p className="text-start md::justify-center text-[27px] xl:text-[44px]  font-thin leading-tight tracking-tight">
                    <strong>
                        LET&apos;S STAY <br /> CONNECTED
                    </strong>
                </p>

                <p className="text-[21px] w-[350px] text-center lg:text-start text-gray-700 font-thin tracking-wide">
                    If you have questions or special inquiries, you&apos;re welcome to contact me or fill out this form
                </p>
                <form className="flex flex-col justify-center items-center gap-[35px]">
                    <div className="flex justify-center  items-center lg:flex-row flex-col gap-[15px]">
                        <div className="flex  flex-col gap-5">
                            <label>First Name *</label>
                            <input type="text" className="bg-transparent border-gray-600 border-[1px] max:w-[200px] p-2 outline-none" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <label>Last Name *</label>
                            <input type="text" className="bg-transparent border-gray-600 border-[1px] max:w-[200px] p-2 outline-none" />
                        </div>
                    </div>
                    <div className="flex justify-center lg:flex-row flex-col gap-[15px]">
                        <div className="flex flex-col gap-5">
                            <label>Email *</label>
                            <input type="emaik" className="bg-transparent border-gray-600 border-[1px] max-w-[200px] p-2 outline-none" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <label>Phone</label>
                            <input type="number" className="bg-transparent border-gray-600 border-[1px] max-w-[200px] p-2 outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label
                            htmlFor="message"
                            className="text-lg font-medium text-gray-700 mb-2"
                        >
                            Leave me a message
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-3  border-[1px] border-gray-600 bg-transparent focus:outline-none "

                            rows={3}
                        ></textarea>
                        <div className="flex justify-center mt-[35px] w-full">
                            <button className="hover:bg-[#D7D7CB] w-[200px] p-3 bg-[#5E5E4A] hover:text-[#5E5E4A]  text-white hover:border-black hover:border-[1px] ">Submit</button>
                        </div>

                    </div>


                </form>

            </div>

            {/* Right Section */}
            <div className="flex justify-center bg-parallax2  bg-cover bg-fixed bg-center min-h-[1200px]  bg-no-repeat items-center  w-full">
            </div>

        </div>


        <div className="lg:p-24 p-10 flex justify-center">
            <video
                className=" w-full h-[550px] shadow-lg object-cover"
                autoPlay
                muted
                loop
                poster="/video/video-poster.jpg"
            >
                <source src="/video/myVideo3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
}