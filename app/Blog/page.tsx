import Image from 'next/image'

import blogImg1 from '../../../public/images/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.avif'
import blogImg2 from '../../../public/images/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.avif'
import blogImg3 from '../../../public/images/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.avif'

export default function Blog() {
    return (
        <div className="p-24 flex flex-col gap-20 bg-[#F3F3F0]">
  <h1 className="font-thin text-[26px] md:text-[52px] text-black text-center">
    THE FRAIS BLOG
  </h1>
  <div className="flex overflow-x-auto xl:overflow-x-hidden justify-start xl:justify-center items-start xl:items-center xl:gap-8 gap-4 snap-x snap-mandatory scroll-smooth">
    {/* Blog 1 */}
    <div className="flex-shrink-0 flex flex-col gap-4 w-[100%] xl:w-[400px] snap-center">
      <Image src={blogImg1} alt="Re-Using Candles" className="w-full h-[450px] object-cover" />
      <p className="text-2xl h-[60px] text-black font-thin tracking-tight">
        Re-Using Candles
      </p>
      <p className="md:text-lg text-xs text-black font-thin tracking-tight">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
      </p>
    </div>

    {/* Blog 2 */}
    <div className="flex-shrink-0 flex flex-col gap-4 w-[100%] xl:w-[400px] snap-center">
      <Image src={blogImg2} alt="How to Pick the Right Scent" className="w-full h-[450px] object-cover" />
      <p className="md:text-2xl text-lg h-[60px] text-black font-thin tracking-tight">
        How to Pick the Right <br /> Scent
      </p>
      <p className=" md:text-lg text-xs text-black font-thin tracking-tight">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
      </p>
    </div>
    {/* Blog 3 */}
    <div className="flex-shrink-0 flex flex-col gap-4 w-[100%] xl:w-[400px] snap-center">
      <Image src={blogImg3} alt="5 Ways to Take Care of Your Candles" className="w-full h-[450px] object-cover" />
      <p className="md:text-2xl text-xl w-[80%] h-[80px] text-black font-normal tracking-tight">
        5 Ways to Take Care of <br /> Your Candles
      </p>
      <p className="md:text-lg  text-xs text-black font-thin tracking-tight">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
      </p>
    </div>
  </div>

  <div className="flex justify-center">
    <button className="w-[150px] p-2 mt-3 border-[1px] hover:bg-[#F3F3F0] hover:border-[#5E5E4A] hover:text-[#5E5E4A] text-[#fff] bg-[#5E5E4A] transition-all duration-500 ease-in">
      Learn More
    </button>
  </div>
</div>

    )
}