import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import cardImg2 from '../../assets/images/card-img-2.avif';
import gcardImg1 from '../../assets/images/gcard-img-1.webp';
import cs from '../../assets/images/card-img-3.avif';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Gridslide() {
    // 5 distinct cards to show inside your slider loop
    const sliderCards = [
        {
            title: "Solid perfume",
            description: "Oral sprays are used for localized medication delivery or to facilitate swallowing in individuals with difficulties consuming pills or liquids.",
            bg: cardImg2,
        },
        {
            title: "Men",
            description: "In agriculture, sprays are used to apply fertilizers, pesticides, and herbicides to crops, ensuring higher yields and healthier plants.",
            bg: cs,
        },
        {
            title: "Trending",
            description: "Additionally, in the manufacturing sector, sprays are integral to cooling systems, lubrication processes, and the production of various products.",
            bg: cardImg2,
        }
        
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Total 4 columns layout on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
                
                {/* PART 1: LEFT SIDE - Fixed Container taking 2 columns (Height: 300px) */}
                <div 
                    className="lg:col-span-2 relative h-[300px] rounded-2xl bg-cover bg-center p-8 flex flex-col justify-between text-white shadow-lg overflow-hidden"
                    style={{ backgroundImage: `url(${gcardImg1})` }}
                >
                    {/* Dark gradient overlay for look and readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 z-0"></div>
                    
                    <div className="relative z-10 space-y-2 max-w-md">
                        
                        <h2 className="text-3xl font-black tracking-tight leading-none">Unisex </h2>
                        <p className="text-sm w-1/2 text-gray-200 font-medium leading-tight line-clamp-3">
                            On an everyday level, household products such as air fresheners, cleaners, and personal care items often utilize spray mechanisms for convenient and effective dispersal.
                        </p>
                    </div>

                    <div className="relative z-10">
                        <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-100 transition-all duration-200 shadow-md">
                            Check more products
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* PART 2: RIGHT SIDE - Slider Container taking remaining 2 columns (Height: 300px) */}
                <div className="lg:col-span-2 relative h-[300px]">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}         // 1 card on mobile view
                        spaceBetween={20}         // Gap between cards
                        loop={true}                // Infinite loop mode
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 }, // Split into exactly 2 cards on desktop
                        }}
                        className="h-full w-full"
                    >
                        {sliderCards.map((card, index) => (
                            <SwiperSlide key={index} className="h-full">
                                {/* Slider Card (Height: 300px) */}
                                <div 
                                    className="relative h-[300px] rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-between p-6 text-white shadow-md"
                                    style={{ backgroundImage: `url(${card.bg})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 z-0"></div>

                                    <div className="relative z-10 space-y-2">
                                        <h2 className="text-lg font-bold tracking-tight">{card.title}</h2>
                                        <p className="text-sm text-gray-200 font-medium leading-tight line-clamp-3">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10">
                                        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-[13px] font-semibold hover:bg-gray-100 transition-all duration-200">
                                            Check More Products
                                            <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* CUSTOM NAVIGATION ARROWS */}
                    <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-black p-2.5 rounded-full shadow-md hover:bg-white transition-all disabled:opacity-40 cursor-pointer">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-black p-2.5 rounded-full shadow-md hover:bg-white transition-all disabled:opacity-40 cursor-pointer">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    );
}