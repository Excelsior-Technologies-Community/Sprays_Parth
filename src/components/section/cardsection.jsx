// src/components/section/cardsection.jsx
// Import the new ProductSwiper component from your card file
import { ProductSwiper } from '../shoppingcard'; 

export default function Slidercard() {
  return (
    <div className="w-full absolute bg-transparent text-white min-h-[500px]">
     
       {/* Section Header Title */}
            <div className="w-full flex max-w-7xl mx-auto text-center my-10  px-4">
                <h2 className="text-3xl text-left md:text-4xl font-bold tracking-tight text-black font-sans">
                    Transforming Surfaces with Spray Mastery
                </h2>
            </div>
        <ProductSwiper />
        
      </div>

  );
}