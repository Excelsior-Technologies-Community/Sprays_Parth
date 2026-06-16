import {  Play } from "lucide-react";

export default function Newsectionfun() {
    return(
        <div className=" bg-[url('/src/assets/images/hero/bg2.webp')] h-152 mt-80 pb-12 items-end flex bg-no-repeat bg-cover justify-center ">
            <div className='text-white text-center mx-auto text-md leading-tight space-y-2'>
                    <h5>Spray</h5>
                    <h1 className='max-w-xl text-3xl sm:text-4xl md:text-5xl font-bold pt-2'>
                        The Science and Art of Sprays
                    </h1>
                    <p className='text-white max-w-xl py-2 md:py-4 text-sm sm:text-base leading-relaxed'>
                        Sprays, in their essence, are a versatile form of dispersing liquid, gas, or fine particles in the atmosphere or onto a surface.
                    </p>
                    
                    {/* Action Buttons Row */}
                    <div className='flex justify-center items-center'>
                        <div className="flex items-center gap-2">
                            <a href='#' className='border rounded-full p-3 hover:bg-white hover:text-black transition-colors duration-300'>
                                <Play size={20} fill="currentColor" className="translate-x-[1px]" />
                            </a>
                            <span className="text-sm font-medium">play video</span>
                        </div>
                    </div>
        
                    
                
                </div>
        </div>
    );
}