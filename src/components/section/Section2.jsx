import { ShoppingBag } from "lucide-react";

export default function Section2() {
    return(
        <div className="bg-white relative mx-4 md:mx-0 md:h-[40vh] xl:h-[65vh] flex">
            <img src="/src/assets/images/Hero/cs.webp" alt="side imaege"  className="hidden md:flex pt-16 absolute h-76"/>

            <div className="relative flex-cols md:flex  max-w-7xl h-[80%] mt-16 mx-auto md:mx-8 xl:mx-auto items-center  md:items-start ">
                {/* conatainer 1 */}
                <div className='text-black text-md md:w-[50%]  text-left leading-tight space-y-2'>
                    <h5>Spray</h5>
                    <h1 className='max-w-md text-2xl md:text-2xl xl:text-5xl font-bold pt-2'>
                        The Science Behind Spray Dynamics
                    </h1>
                    <p className='text-black font-[450] max-w-xl py-2 md:py-4 text-sm sm:text-base leading-relaxed'>
                        In agriculture, the use of spraying technology revolutionizes crop management. Farmers employ specialized equipment to disperse pesticides, fertilizers, or herbicides across fields.
                    </p>
                    
                    {/* Action Buttons Row */}
                    <div className='flex flex-wrap gap-4 items-center'>
                        <a href="#" className='flex items-center bg-black text-white px-4 py-2 hover:text-black hover:bg-white font-bold text-sm duration-300 ease-in-out rounded-full gap-2 border border-transparent hover:border-black'>
                           Unisex Scent <ShoppingBag size={15} />
                        </a>
                        <a href="#" className='flex items-center bg-black text-white px-4 py-2 hover:text-black hover:bg-white font-bold text-sm duration-300 ease-in-out rounded-full gap-2 border border-transparent hover:border-black'>
                            Diamond Scent <ShoppingBag size={15} />
                        </a>
                        
                    </div>
                </div>

                {/* conatiner 2 */}
                <div className="flex-col xl:pl-40 flex gap-4">
                    <img src="/src/assets/images/hero/chocolate2.webp" alt="" className="xl:h-74 md:h-64" />
                    <p className="max-w-md font-[450] leading-tight">This precise application method ensures targeted coverage, safeguarding crops from pests, promoting growth, and maximizing yields.</p>
                    <a href="#" className="text-black font-bold text-xs">Show More</a>
                </div>
            </div>
        </div>
    );
}