import React from 'react';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      title: "Great Products",
      rat: "4.5 / 5.0",
      rating: 4,
      text: "Agriculture benefits significantly from sprays, employing them for the controlled distribution of pesticides, fertilizers, and herbicides.",
      name: "John Doe",
      role: "Client",
      image: "/src/assets/images/testi1.avif"
    },
    {
      id: 2,
      title: "Excellent!",
      rat: "4.5 / 5.0",
      rating: 4,
      text: "from cooling systems in industrial machinery to lubrication processes and the creation of various products. They are integral in the production of items ranging from...",
      name: "Isabel Hanson",
      role: "SEO Manager",
      image: "/src/assets/images/testi2.avif"
    },
    {
      id: 3,
      title: "Excellent!",
      rat: "4.5 / 5.0",
      rating: 4,
      text: "from cooling systems in industrial machinery to lubrication processes and the creation of various products. They are integral in the production of items ranging from...",
      name: "Isabel Hanson",
      role: "SEO Manager",
      image: "/src/assets/images/testi2.avif"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Testimonials</h2>
      
      <div className='group w-full flex-col flex relative'>
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1} // Fixed the typo here
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          breakpoints={{
            // On desktop/tablets screens, show 2 cards
            768: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className='w-full'
        >
          {testimonials.map((card, index) => (
            <SwiperSlide key={index} className='h-auto border border-gray-200 rounded-2xl p-5 bg-white shadow-sm transition-all'>
              {/* Responsive container: Stacks columns vertically on mobile, changes to flexrow on wider views */}
              <div className='flex flex-col sm:flex-row gap-6 items-center h-full'>
                
                {/* Fixed Image Wrapper */}
                <div className='w-full sm:w-1/3 flex items-center justify-center bg-gray-50/50 rounded-xl p-2'>
                  <img 
                    src={card.image} 
                    alt={card.title}  
                    className='h-36 sm:h-40 w-auto object-contain drop-shadow-sm'
                  />
                </div>
                
                {/* Content Panel */}
                <div className='flex flex-col w-full sm:w-2/3 justify-between h-full min-h-[140px]'>
                  <div>
                    {/* Header Row */}
                    <div className='flex flex-wrap justify-between items-start gap-2 mb-2'>
                      <h2 className='font-bold text-lg md:text-xl tracking-tight text-gray-900'>{card.title}</h2>
                      <div className='flex text-xs items-center gap-0.5 bg-gray-50 px-2 py-1 rounded-md'>
                        {[...Array(5)].map((_, idx) => (
                          <span key={idx}>
                            {idx < card.rating ? (
                              <Star size={14} className="fill-black text-black" strokeWidth={1} />
                            ) : (
                              <Star size={14} className="text-gray-300" strokeWidth={1} />
                            )}
                          </span>
                        ))}
                        <span className='pl-1.5 font-semibold text-gray-600'>{card.rat}</span>
                      </div>
                    </div>
                    
                    {/* Review Paragraph */}
                    <p className='font-normal leading-relaxed text-sm text-gray-500 line-clamp-3 mb-4'>
                      {card.text}
                    </p>
                  </div>

                  {/* User Profile Footer */}
                  <div className='text-sm tracking-wide mt-auto pt-2 border-t border-gray-50'>
                    <span className='font-bold text-gray-900'>{card.name}</span>
                    <span className='text-gray-500 font-medium'>, {card.role}</span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation arrows (Hidden or adjusted slightly inward for better desktop safety clearance) */}
        <button className="testimonial-prev absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-black text-white rounded-md p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto shadow-md transition-all duration-200 disabled:opacity-40 cursor-pointer hidden md:block">
          <ChevronLeft className="w-4 h-4"/>
        </button>
        <button className="testimonial-next absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-black text-white rounded-md p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto shadow-md transition-all duration-200 disabled:opacity-40 cursor-pointer hidden md:block">
          <ChevronRight className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
}