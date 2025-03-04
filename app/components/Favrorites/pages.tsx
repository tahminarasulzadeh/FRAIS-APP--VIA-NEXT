export default function Favorites() {
    return (
        <div className="py-7 px-5">
            <p className="text-center mt-7 text-gray-700 md:text-[40px] text-[25px] font-extralight tracking-wide leading-snug">SHOP OUR FAVORITES</p>
            <div className="relative  flex md:flex-row flex-col-reverse justify-center gap-9 mt-10 mx-auto">
                <div className="flex flex-col mt-3 gap-[20px]">
                    <p className=" text-center md:text-start mt-7 text-gray-700 text-[30px] font-extralight tracking-wide leading-snug">NATURE&apos;S ESSENCE <br />
                        SCENTED CANDLES</p>

                    <div className="flex md:justify-start justify-center">
                        <p className="md:text-start text-center w-[350px] md:w-[400px]  mt-5 text-gray-700 text-[18px] font-extralight tracking-[1px] leading-[30px]">
                            I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I&apos;m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>

                    <div className="flex md:justify-start justify-center">
                        <button className="w-[120px] py-2 bg-transparent border-[1px] border-[#5E5E4A] text-[#5E5E4A] text-[14px] hover:bg-[#5E5E4A] hover:text-white  transition-all duration-300 ease-in font-thin tracking-widest leading-snug">Shop Candles</button>
                    </div>

                </div>
                <video
                    className=" w-[750px] h-[650px] shadow-lg object-cover"
                    autoPlay
                    muted
                    loop
                    poster="/video/video-poster.jpg"
                >
                    <source src="/video/myVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}