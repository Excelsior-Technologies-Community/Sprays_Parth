import React, { useState, useRef } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, X, Plus, Minus, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useCart } from '../../context/CartContext';
import { useCartUI } from '../../context/CartUIContext';
import ProductCard from '../ProductCard';
import { masterProductsDataset } from '../ProductSection';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Uniqper() {
  const swiperRef = useRef(null);
  const { addToCart } = useCart();
  const { openCart } = useCartUI();

  const [activeTab, setActiveTab] = useState('unisex');
  const [notify, setNotify] = useState({ visible: false, type: '', message: '' });

  const [previewTarget, setPreviewTarget] = useState(null);
  const [modalWeight, setModalWeight] = useState('');
  const [modalQty, setModalQty] = useState(1);
  const [modalImgIdx, setModalImgIdx] = useState(0);

  // VITE IMAGE RESOLVER FOR THE SECTION MODAL
  const getImageUrl = (imgName) => {
    if (!imgName) return '';
    const cleanFileName = imgName.split('/').pop();
    return new URL(`../../assets/images/card/${cleanFileName}`, import.meta.url).href;
  };

  const triggerNotification = ({ type, message }) => {
    setNotify({ visible: true, type, message });
    setTimeout(() => setNotify({ visible: false, type: '', message: '' }), 2000);
  };

  const handleOpenPreview = (product, activeWeight) => {
    setPreviewTarget(product);
    setModalWeight(activeWeight);
    setModalQty(1);
    setModalImgIdx(0);
  };

  // Filter products: 'unisex' shows fragrances + unisex, 'men' shows solid + unisex
  const filteredProducts = activeTab === 'unisex'
    ? masterProductsDataset.filter(item => item.category === 'fragrances' || item.category === 'unisex')
    : masterProductsDataset.filter(item => item.category === 'solid' || item.category === 'unisex');

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 xl:px-16 text-black relative select-none">
      
      {notify.visible && (
        <div className="fixed top-4 right-4 z-[99999] bg-neutral-900 border border-neutral-800 text-white px-6 py-3 rounded-xl shadow-xl font-semibold text-xs tracking-wide transition-all">
          {notify.message}
        </div>
      )}

      {/* Grid container: Left is title/filters, Right is Swiper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: TITLE & FILTER TABS */}
        <div className="lg:col-span-4 flex flex-col items-start justify-center pr-0 lg:pr-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-4 leading-tight">
            Unique perfumes for women and men
          </h2>
          
          <p className="text-sm text-neutral-600 font-medium leading-relaxed mb-8 max-w-sm">
            The applications of sprays span a wide spectrum, catering to industrial, artistic, medicinal, and everyday needs.
          </p>

          {/* Pill Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setActiveTab('unisex')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                activeTab === 'unisex'
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-black border-neutral-200 hover:border-neutral-400'
              }`}
            >
              Unisex
            </button>
            <button
              onClick={() => setActiveTab('men')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                activeTab === 'men'
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-black border-neutral-200 hover:border-neutral-400'
              }`}
            >
              Men
            </button>
          </div>

          {/* Action CTA Button */}
          <button className="flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-6 py-3.5 rounded-full text-xs font-bold transition-all duration-200 shadow-md cursor-pointer">
            Check More Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* RIGHT COLUMN: CARDS SWIPER */}
        <div className="lg:col-span-8 relative group w-full overflow-hidden lg:overflow-visible">
          {/* Custom Navigation Button - Prev */}
          <button 
            className="swiper-button-prev-uniq absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-xl bg-black text-white shadow-lg hover:bg-neutral-800 transition-all cursor-pointer opacity-0 group-hover:opacity-100 duration-200 disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Custom Navigation Button - Next */}
          <button 
            className="swiper-button-next-uniq absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-xl bg-black text-white shadow-lg hover:bg-neutral-800 transition-all cursor-pointer opacity-0 group-hover:opacity-100 duration-200 disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-uniq',
              prevEl: '.swiper-button-prev-uniq',
            }}
            breakpoints={{
              640: { slidesPerView: 2 }
            }}
            className="w-full !p-2"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto">
                <ProductCard 
                  product={product} 
                  onOpenPreview={handleOpenPreview}
                  setGlobalNotify={triggerNotification}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* QUICK PREVIEW MODAL */}
      {previewTarget && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 w-screen h-screen top-0 left-0">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-black max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setPreviewTarget(null)} 
              className="absolute top-4 right-4 p-1.5 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X size={16}/>
            </button>
            
            <div className="w-full md:w-1/2 bg-neutral-50 p-6 flex flex-col items-center justify-center min-h-[280px]">
              <img 
                src={getImageUrl(modalImgIdx === 0 ? previewTarget.image : previewTarget.image2)} 
                alt="" 
                className="max-h-52 object-contain" 
              />
              <div className="flex gap-2 mt-4">
                {[previewTarget.image, previewTarget.image2].map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setModalImgIdx(idx)} 
                    className={`w-11 h-11 border rounded-lg p-0.5 bg-white transition-all cursor-pointer ${
                      modalImgIdx === idx ? 'border-black ring-1 ring-black' : 'border-neutral-200'
                    }`}
                  >
                    <img src={getImageUrl(img)} className="w-full h-full object-contain" alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-lg font-bold text-neutral-900 leading-tight">{previewTarget.title}</h2>
              <p className="text-xs text-neutral-400 uppercase font-semibold tracking-wider mt-0.5 mb-2">{previewTarget.brand}</p>
              <p className="text-xs text-neutral-500 mb-5 leading-relaxed">{previewTarget.description}</p>
              
              <div className="mb-5">
                <span className="text-[10px] font-bold text-neutral-400 tracking-wider block mb-1.5">AVAILABLE SIZE:</span>
                <div className="flex gap-2">
                  {previewTarget.weights.map((w) => (
                    <button 
                      key={w} 
                      onClick={() => {
                        setModalWeight(w);
                        setModalImgIdx(previewTarget.weights.indexOf(w) === 0 ? 0 : 1);
                      }} 
                      className={`px-3 py-1.5 text-xs font-bold border rounded-lg transition-all cursor-pointer ${
                        modalWeight === w ? 'bg-black text-white border-black shadow-sm' : 'bg-white text-black border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <button 
                  onClick={() => { 
                    const resolvedProduct = {
                      ...previewTarget,
                      image: getImageUrl(previewTarget.image),
                      image2: getImageUrl(previewTarget.image2)
                    };
                    addToCart(resolvedProduct, modalQty, modalWeight); 
                    openCart(); 
                    setPreviewTarget(null); 
                    triggerNotification({ type: 'cart', message: `${previewTarget.title} added to cart!` }); 
                  }} 
                  className="flex-1 bg-black text-white py-2.5 px-4 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
                >
                  Add To Cart <ShoppingBag size={13} />
                </button>

                <div className="flex items-center border border-neutral-200 rounded-xl px-2.5 bg-neutral-50 h-9.5">
                  <button onClick={() => setModalQty(p => Math.max(1, p - 1))} className="text-neutral-500 hover:text-black cursor-pointer"><Minus size={11} /></button>
                  <span className="w-7 text-center text-xs font-bold text-neutral-800">{modalQty}</span>
                  <button onClick={() => setModalQty(p => p + 1)} className="text-neutral-500 hover:text-black cursor-pointer"><Plus size={11} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
