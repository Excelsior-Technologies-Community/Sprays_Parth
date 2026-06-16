// Note: You can delete the import './Header.css'; line entirely!
// import { useState, useEffect, useRef } from 'react';


import { BadgePercent, Gift, Play, ShoppingBag, ShoppingCart } from 'lucide-react';
// import { Productcard } from './products';
import { Cards } from './shoppingcard';
export default function Hero (){

    return(
        <div className="bg-[url('/src/assets/images/hero/home-bg.webp')] pb-8 md:pb-0 md:h-[70vh] xl:h-[85vh] bg-cover w-full flex justify-center">
            <div className='max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-3 gap-8 pt-2 xl:pt-6 xl:pt-8 px-4 md:px-0'>
                {/* hero left part */}
                <div className='col-span-1 xl:col-span-2 text-white text-md mt-6 xl:mt-12 text-left leading-tight space-y-4 px-4 md:px-0'>
                    <h5>Spray</h5>
                    <h1 className='max-w-md text-3xl sm:text-4xl md:text-5xl font-bold pt-2'>
                        The World of Spray Techniques
                    </h1>
                    <p className='text-white max-w-xl py-2 md:py-4 text-sm sm:text-base leading-relaxed'>
                        The art of spray painting encapsulates an explosion of colors and creativity. With a swift movement, aerosol cans release a fine mist that transforms ordinary surfaces into vibrant masterpieces.
                    </p>
                    
                    {/* Action Buttons Row */}
                    <div className='flex flex-wrap gap-4 items-center'>
                        <a href="#" className='flex items-center bg-black text-white px-4 py-2 hover:text-black hover:bg-white font-bold text-sm duration-300 ease-in-out rounded-full gap-2 border border-transparent hover:border-black'>
                            Check More Products <ShoppingBag size={15} />
                        </a>
                        <div className="flex items-center gap-2">
                            <a href='#' className='border rounded-full p-3 hover:bg-white hover:text-black transition-colors duration-300'>
                                <Play size={20} fill="currentColor" className="translate-x-[1px]" />
                            </a>
                            <span className="text-sm font-medium">play video</span>
                        </div>
                    </div>
        
                    {/* Bottom Badges Container - Completely redesigned for responsiveness */}
                    <div className='pt-8 grid px-4 grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4 w-full'>
                        
                        {/* Badge 1 */}
                        <div className='flex items-start gap-3 bg-white/5 xl:bg-transparent p-3 xl:p-0 rounded-xl'>
                            <Gift size={32} className="shrink-0 mt-0.5" />
                            <div className='flex flex-col text-sm'>
                                <span className='font-bold'>Finished products</span>
                                <span className='font-medium text-neutral-300 text-xs sm:text-sm mt-0.5'>products and gift wrapping</span>
                            </div>
                        </div>

                        {/* Badge 2 */}
                        <div className='flex items-start gap-3 bg-white/5 xl:bg-transparent p-3 xl:p-0 rounded-xl'>
                            <BadgePercent size={32} className="shrink-0 mt-0.5" />
                            <div className='flex flex-col text-sm'>
                                <span className='font-bold'>Large and frequent</span>
                                <span className='font-medium text-neutral-300 text-xs sm:text-sm mt-0.5'>promotions with numerous discounts</span>
                            </div>
                        </div>

                        {/* Badge 3 */}
                        <div className='flex items-start gap-3 bg-white/5 xl:bg-transparent p-3 xl:p-0 rounded-xl'>
                            <ShoppingCart size={32} className="shrink-0 mt-0.5" />
                            <div className='flex flex-col text-sm'>
                                <span className='font-bold'>Free shipping</span>
                                <span className='font-medium text-neutral-300 text-xs sm:text-sm mt-0.5'>on any order from $ 150</span>
                            </div>
                        </div>

                    </div>
                
                </div>
                {/* cart part */}
                <div className='xl:col-span-1 xl:mt-8 flex justify-center'>
                    {/* <Productcard />  */}
                    <Cards />
                </div>
            </div>
        </div>
    );
}