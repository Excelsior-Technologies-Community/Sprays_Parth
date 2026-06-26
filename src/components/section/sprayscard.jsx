import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay , Navigation} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sprayscard(){

    const cardsprays = [
        {
            img : "./src/assets/images/sprayscard/img1.webp",
            subtitle : "Article",
            title : "Aromatics Anonymous",
            desc : "We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup and replace it until you find your signature scent – or even issue a 100% refund. All the cost of pickup and delivery will be taken care of by us.Good Vibes Only Perfume is a delightful fragrance that encapsulates the essence of positivity, joy, and a carefree spirit. It is a scent that radiates happiness and spreads a contagious aura of optimism wherever it goes.The initial burst of Good Vibes Only Perfume is like a sunlit citrus explosion. The vibrant notes of juicy oranges and zesty lemons instantly uplift your mood, creating a feeling of pure bliss and energy. These invigorating citrus notes awaken your senses and set the stage for a refreshing olfactory journey.As the fragrance unfolds, a bouquet of blooming flowers takes center stage. The delicate petals of jasmine and lily of the valley embrace you with their sweet, floral embrace. The floral accords exude a sense of femininity and grace, evoking feelings of warmth and serenity.At its core, Good Vibes Only Perfume reveals a subtle hint of tropical fruits, adding a touch of exoticism and playfulness to the fragrance. The succulent notes of pineapple and mango transport you to a sun-kissed paradise, where worries melt away and a sense of carefree joy fills the air.The fragrance settles into a comforting base that wraps you in a warm embrace.Bella Vita Organic Gold Woman is a luxurious and captivating fragrance that embodies the essence of elegance, femininity, and empowerment. It is a scent designed to celebrate the radiance and beauty of the modern woman.",
            date : "November 16,",
            year : 2023,
        },
        {
            img : "./src/assets/images/sprayscard/img2.webp",
            subtitle : "Article",
            title : "The Perfume Diaries",
            desc : "We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup and replace it until you find your signature scent – or even issue a 100% refund. All the cost of pickup and delivery will be taken care of by us.Good Vibes Only Perfume is a delightful fragrance that encapsulates the essence of positivity, joy, and a carefree spirit. It is a scent that radiates happiness and spreads a contagious aura of optimism wherever it goes.The initial burst of Good Vibes Only Perfume is like a sunlit citrus explosion. The vibrant notes of juicy oranges and zesty lemons instantly uplift your mood, creating a feeling of pure bliss and energy. These invigorating citrus notes awaken your senses and set the stage for a refreshing olfactory journey.As the fragrance unfolds, a bouquet of blooming flowers takes center stage. The delicate petals of jasmine and lily of the valley embrace you with their sweet, floral embrace. The floral accords exude a sense of femininity and grace, evoking feelings of warmth and serenity.At its core, Good Vibes Only Perfume reveals a subtle hint of tropical fruits, adding a touch of exoticism and playfulness to the fragrance. The succulent notes of pineapple and mango transport you to a sun-kissed paradise, where worries melt away and a sense of carefree joy fills the air.The fragrance settles into a comforting base that wraps you in a warm embrace.Bella Vita Organic Gold Woman is a luxurious and captivating fragrance that embodies the essence of elegance, femininity, and empowerment. It is a scent designed to celebrate the radiance and beauty of the modern woman.",
            date : "November 16,",
            year : 2023,
        },
        {
            img : "./src/assets/images/sprayscard/img3.webp",
            subtitle : "Article",
            title : "Sentimental Surprises",
            desc : "We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup and replace it until you find your signature scent – or even issue a 100% refund. All the cost of pickup and delivery will be taken care of by us.Good Vibes Only Perfume is a delightful fragrance that encapsulates the essence of positivity, joy, and a carefree spirit. It is a scent that radiates happiness and spreads a contagious aura of optimism wherever it goes.The initial burst of Good Vibes Only Perfume is like a sunlit citrus explosion. The vibrant notes of juicy oranges and zesty lemons instantly uplift your mood, creating a feeling of pure bliss and energy. These invigorating citrus notes awaken your senses and set the stage for a refreshing olfactory journey.As the fragrance unfolds, a bouquet of blooming flowers takes center stage. The delicate petals of jasmine and lily of the valley embrace you with their sweet, floral embrace. The floral accords exude a sense of femininity and grace, evoking feelings of warmth and serenity.At its core, Good Vibes Only Perfume reveals a subtle hint of tropical fruits, adding a touch of exoticism and playfulness to the fragrance. The succulent notes of pineapple and mango transport you to a sun-kissed paradise, where worries melt away and a sense of carefree joy fills the air.The fragrance settles into a comforting base that wraps you in a warm embrace.Bella Vita Organic Gold Woman is a luxurious and captivating fragrance that embodies the essence of elegance, femininity, and empowerment. It is a scent designed to celebrate the radiance and beauty of the modern woman.",
            date : "November 16,",
            year : 2023,
        },
        {
            img : "./src/assets/images/sprayscard/img4.webp",
            subtitle : "Article",
            title : "The Scent Scribe",
            desc : "We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup and replace it until you find your signature scent – or even issue a 100% refund. All the cost of pickup and delivery will be taken care of by us.Good Vibes Only Perfume is a delightful fragrance that encapsulates the essence of positivity, joy, and a carefree spirit. It is a scent that radiates happiness and spreads a contagious aura of optimism wherever it goes.The initial burst of Good Vibes Only Perfume is like a sunlit citrus explosion. The vibrant notes of juicy oranges and zesty lemons instantly uplift your mood, creating a feeling of pure bliss and energy. These invigorating citrus notes awaken your senses and set the stage for a refreshing olfactory journey.As the fragrance unfolds, a bouquet of blooming flowers takes center stage. The delicate petals of jasmine and lily of the valley embrace you with their sweet, floral embrace. The floral accords exude a sense of femininity and grace, evoking feelings of warmth and serenity.At its core, Good Vibes Only Perfume reveals a subtle hint of tropical fruits, adding a touch of exoticism and playfulness to the fragrance. The succulent notes of pineapple and mango transport you to a sun-kissed paradise, where worries melt away and a sense of carefree joy fills the air.The fragrance settles into a comforting base that wraps you in a warm embrace.Bella Vita Organic Gold Woman is a luxurious and captivating fragrance that embodies the essence of elegance, femininity, and empowerment. It is a scent designed to celebrate the radiance and beauty of the modern woman.",
            date : "November 16,",
            year : 2023,
        },
        {
            img : "./src/assets/images/sprayscard/img5.webp",
            subtitle : "Article",
            title : "The Scented Haven",
            desc : "We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup and replace it until you find your signature scent – or even issue a 100% refund. All the cost of pickup and delivery will be taken care of by us.Good Vibes Only Perfume is a delightful fragrance that encapsulates the essence of positivity, joy, and a carefree spirit. It is a scent that radiates happiness and spreads a contagious aura of optimism wherever it goes.The initial burst of Good Vibes Only Perfume is like a sunlit citrus explosion. The vibrant notes of juicy oranges and zesty lemons instantly uplift your mood, creating a feeling of pure bliss and energy. These invigorating citrus notes awaken your senses and set the stage for a refreshing olfactory journey.As the fragrance unfolds, a bouquet of blooming flowers takes center stage. The delicate petals of jasmine and lily of the valley embrace you with their sweet, floral embrace. The floral accords exude a sense of femininity and grace, evoking feelings of warmth and serenity.At its core, Good Vibes Only Perfume reveals a subtle hint of tropical fruits, adding a touch of exoticism and playfulness to the fragrance. The succulent notes of pineapple and mango transport you to a sun-kissed paradise, where worries melt away and a sense of carefree joy fills the air.The fragrance settles into a comforting base that wraps you in a warm embrace.Bella Vita Organic Gold Woman is a luxurious and captivating fragrance that embodies the essence of elegance, femininity, and empowerment. It is a scent designed to celebrate the radiance and beauty of the modern woman.",
            date : "November 16,",
            year : 2023,
        }
       
    ];

    return(
       <div className="max-w-6xl mx-auto px-4 md:py-16 py-12">
            <div className="flex  flex-col gap-12 items-center">
                {/* part 1 */}
                <div className="flex flex-col space-y-4 text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mx-auto max-w-2xl ">Revolutionizing Innovation and Practicality</h2>
                    <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">From creating backgrounds in mixed media artworks to achieving unique patterns in abstract paintings, sprays offer a modern twist to artistic expression.</p>
                </div>

                {/* part 2 */}
                <div className="group w-full flex relative flex-col max-w-6xl">
                    <Swiper
                        modules = {[Autoplay , Navigation ]}
                        slidesPerView = {1}
                        spaceBetween = {20}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop = {true}
                        navigation = {{
                            nextEl : '.swiper-button-next-custom',
                            prevEl : '.swiper-button-prev-custom',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 24 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                        }}
                        className="w-full"
                    >
                        {cardsprays.map((card, index)=>(
                            <SwiperSlide key={index} className="h-full pb-4">
                                <div className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                    {/* image  */}
                                    <div className="overflow-hidden aspect-[4/3] rounded-t-xl">
                                        <img src={card.img} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"/>
                                    </div>
                                    {/* content-card */}
                                    <div className="flex flex-col flex-grow p-3 space-y-3">
                                        <span className="font-semibold text-sm tracking-wider">{card.subtitle}</span>
                                        <h2 className="font-bold tracking-tight text-gray-900 text-lg line-clamp-1">{card.title}</h2>
                                        <p className="font-semibold leading-relaxed text-gray-500 line-clamp-3 flex-grow text-sm">{card.desc}</p>
                                    </div>
                                    {/* button area */}
                                    <div className="flex items-center pt-2 pb-5 justify-between border-t border-gray-50 px-2">
                                        <button className="group/btn relative inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-xs font-bold tracking-wider text-white bg-gray-900 hover:bg-black transition-all duration-300 shadow-sm overflow-hidden">
                                            <span className="relative z-10">Read More </span>
                                            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"/>
                                        </button>
                                        <div className="flex flex-col text-right text-[15px] font-medium text-gray-700 tracking-wide">
                                            <span>{card.date}</span>
                                            <span>{card.year} </span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                    {/* custom navigation arrow */}
                    <button className="swiper-button-prev-custom absolute left-0  top-1/2 -translate-y-1/2 z-20  bg-black text-white rounded-md p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto shadow-md transition-all duration-200 disabled:opacity-40 cursor-pointer">
                        <ChevronLeft className="w-4 h-4"/>
                    </button>
                    <button className="swiper-button-next-custom absolute right-0  top-1/2 -translate-y-1/2 z-20  bg-black text-white rounded-md p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto shadow-md transition-all duration-200 disabled:opacity-40 cursor-pointer">
                        <ChevronRight className="w-4 h-4"/>
                    </button>
                </div>

            </div>

       </div>
    );
}