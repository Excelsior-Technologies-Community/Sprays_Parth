// import { ShoppingBag, ChevronRight,ChevronLeft} from "lucide-react";
// import {Swiper,SwiperSlide} from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";

import { ShoppingBag } from "lucide-react";

// // swiper style 
// import 'swiper/css'
// import 'swiper/css/navigation'

export default function Infoproduct(){
    return(
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-around items-center items-stretch">
                {/* part 1 */}
                <div className="text-center md:text-right flex justify-center items-center flex-col md:items-end"> 
                    <h3 className="font-bold text-2xl md:text-xl xl:text-2xl relative">Power, and Practicality</h3>
                    <h6 className="leading-tight text-xl md:text-lg xl:text-xl tracking-widest">Manufacturing Processes</h6>
                    <p className="py-8 text-sm max-w-sm font-medium">Sprays, in their multifaceted forms, represent a diverse range of applications across industries, sciences, arts, and daily life.</p>
                    <div className="relative flex justify-center md:justify-end ">
                        <button className="flex  items-center border border-transparent gap-2 bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-white hover:border-black hover:text-black transition-all duration-200 shadow-md">
                            Check more products
                            <ShoppingBag className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                {/* part 2 */}
                <div className="flex items-center justify-center">
                    <img src="/src/assets/images/chocolate4.webp" alt="" className="max-w-full h-auto object-contain mx-auto" />
                </div>
                {/* part 3 */}
                <div className="text-center md:text-left flex justify-center flex-col items-center md:items-start">
                    <h3 className="font-bold text-2xl md:text-xl xl:text-2xl relative">The Artistry of Atomization</h3>
                    <h6 className="leading-tight text-xl md:text-lg xl:text-xl tracking-widest">Diving into Spray</h6>
                    <p className="py-8 text-sm max-w-xs font-medium ">The Artistry of Atomization: Diving into Spray Techniques</p>
                    <div className="relative flex justify-center md:justify-start w-full ">
                        <button className="flex  items-center border border-transparent gap-2 bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-white hover:border-black hover:text-black transition-all duration-200 shadow-md">
                            Check more products
                            <ShoppingBag className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}