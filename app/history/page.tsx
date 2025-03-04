

import Image from "next/image"
import img1 from '../../public/images/c837a6_4c4c7005d8554a2eb2ede74cd96cb8da~mv2.avif'


export default function OurHistory() {

  return (
    <div>
      <div className="flex lg:justify-start justify-center p-5 lg:p-28 gap-36 items-center lg:flex-row flex-col">
        <Image src={img1} alt="re-connecting humans to nature" className="w-[530px] h-[450px]" />
        <div className="flex flex-col gap-8 justify-start ">
          <p className="lg:text-[52px] text-[27px] text-gray-700 tracking-wide">RE-CONNECTING <br /> HUMANS TO <br /> NATURE</p>
          <p className="lg:w-[450px] text-[21px] text-gray-400 tracking-wide">I&apos;m a paragraph. Click here to add your own text  and edit me. Let your users get to know you.</p>

        </div>
      </div>


      <div className="w-full h-full flex justify-center lg:flex-row flex-col lg-flex-row ">
        {/* Left Section */}
        <div className="flex bg-[#D7D7CB] p-14 justify-center items-center    w-full lg:w-1/2">
          <div className="flex flex-col gap-[50px] justify-center items-center">
            <h1 className=" w-full text-wrap text-start lg:text-3xl font-thin tracking-wider">MEET ALISON</h1>

            <p className="lg:w-[400px] w-[300px] text-wrap text-start text-md font-thin tracking-wider">
              I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p className="lg:w-[400px] w-[300px] text-wrap text-start text-md font-thin tracking-wider">
              This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
          </div>
        </div>

        {/* Right Section */}
    
        <div className="flex justify-center bg-parallax  bg-cover bg-fixed bg-left-top h-screen bg-no-repeat items-center  w-full">
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
          <source src="/video/myVideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>

  )
}