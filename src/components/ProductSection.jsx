import React, { useState, useRef } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, X, Plus, Minus } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useCart } from '../context/CartContext';
import { useCartUI } from '../context/CartUIContext';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

// Array dataset updated to map filenames directly
export const masterProductsDataset = [
  {
    id: 1,
    brand: "Swiss",
    title: "Oriana Eau De Parfum",
    image: "../assets/images/card/pink1.webp",
    image2: "../assets/images/card/pink2.webp",
    discount: "New",
    category: "fragrances",
    weights: ["60ml", "100ml"],
    price: [37.00, 50.00],
    originalPrice: [45.00, 60.00],
    rating: 4,
    description: "Luxurious profile featuring an exotic formulation profile layout finish."
  },
  {
    id: 2,
    brand: "Swiss",
    title: "Delina La Rosee Eau De Parfum",
    image: "../assets/images/card/lightpink1.webp",
    image2: "../assets/images/card/lightpink2.webp",
    discount: "19%",
    category: "fragrances",
    weights: ["50ml", "100ml"],
    price: [37.00, 50.00],
    originalPrice: [45.00, 60.00],
    rating: 0,
    description: "Luxurious profile featuring an exotic formulation profile layout finish."
  },
  {
    id: 3,
    brand: "Swiss",
    title: "Delina Eau De Parfum",
    image: "../assets/images/card/pinkdarklight1.webp",
    image2: "../assets/images/card/pinkdarklight2.webp",
    discount: "Hot",
    category: "fragrances",
    weights: ["90ml", "100ml"],
    price: [37.00, 50.00],
    originalPrice: [45.00, 60.00],
    rating: 4,
    description: "Luxurious profile featuring an exotic formulation profile layout finish."
  },
  {
    id: 4,
    brand: "Swiss",
    title: "Cassili Eau De Parfum",
    image: "../assets/images/card/lightorange1.webp",
    image2: "../assets/images/card/lightorange2.webp",
    discount: "19%",
    category: "fragrances",
    weights: ["50ml", "60ml"],
    price: [37.00, 50.00],
    originalPrice: [45.00, 60.00],
    rating: 2,
    description: "Luxurious profile featuring an exotic formulation profile layout finish."
  },
  {
    id: 5,
    brand: "Swiss",
    title: "Valaya Eau De Parfum",
    image: "../assets/images/card/newwhite1.webp",
    image2: "../assets/images/card/newwhite.webp",
    discount: "Best",
    category: "fragrances",
    weights: ["60ml", "80ml"],
    price: [37.00, 50.00],
    originalPrice: [45.00, 60.00],
    rating: 3,
    description: "Luxurious profile featuring an exotic formulation profile layout finish."
  },
  {
    id: 6,
    brand: "Arabic",
    title: "Cologne To The Races",
    image: "../assets/images/card/ublack1.webp",
    image2: "../assets/images/card/ublack2.webp",
    discount: "Hot",
    category: "unisex",
    weights: ["75ml", "95ml"],
    price: [30.00, 45.00],
    originalPrice: [37.00, 55.00],
    rating: 2,
    description: "Opulent blend of warm notes balanced gracefully with sweet vanilla undertones."
  },
  {
    id: 7,
    brand: "Arabic",
    title: "Cologne Sapphire Sea",
    image: "../assets/images/card/ublue2.webp",
    image2: "../assets/images/card/ublue1.webp",
    discount: "19%",
    category: "unisex",
    weights: ["100ml", "125ml"],
    price: [30.00, 45.00],
    originalPrice: [37.00, 55.00],
    rating: 3,
    description: "Opulent blend of warm notes balanced gracefully with sweet vanilla undertones."
  },
  {
    id: 8,
    brand: "Arabic",
    title: "Cologne Gripped Rose",
    image: "../assets/images/card/ured1.webp",
    image2: "../assets/images/card/ured2.webp",
    discount: "New",
    category: "unisex",
    weights: ["75ml", "125ml"],
    price: [30.00, 45.00],
    originalPrice: [37.00, 55.00],
    rating: 5,
    description: "Opulent blend of warm notes balanced gracefully with sweet vanilla undertones."
  },
  {
    id: 9,
    brand: "Arabic",
    title: "Cologne Arabic Air",
    image: "../assets/images/card/uyellow1.webp",
    image2: "../assets/images/card/uyellow2.webp",
    discount: "19%",
    category: "unisex",
    weights: ["75ml", "125ml"],
    price: [30.00, 45.00],
    originalPrice: [37.00, 55.00],
    rating: 5,
    description: "Opulent blend of warm notes balanced gracefully with sweet vanilla undertones."
  },
  {
    id: 10,
    brand: "Arabic",
    title: "Dolce&Gabbana Eau De Parfum",
    image: "../assets/images/card/unewblue2.webp",
    image2: "../assets/images/card/unewblue1.webp",
    discount: "Best",
    category: "unisex",
    weights: ["95ml", "125ml"],
    price: [30.00, 45.00],
    originalPrice: [37.00, 55.00],
    rating: 5,
    description: "Opulent blend of warm notes balanced gracefully with sweet vanilla undertones."
  },
  {
    id: 11,
    brand: "Rihanna",
    title: "Royal Musk Eau De Parfum",
    image: "../assets/images/card/s1-2.webp",
    image2: "../assets/images/card/s1-1.webp",
    discount: "New",
    category: "solid",
    weights: ["80ml", "100ml"],
    price: [15.00, 25.00],
    originalPrice: [40.00, 55.00],
    rating: 4,
    description: "Smoky sweet premium profile infused with premium tobacco leaf formulations."
  },
  {
    id: 12,
    brand: "Rihanna",
    title: "Nuit Intense Eau De Parfum",
    image: "../assets/images/card/s2-2.webp",
    image2: "../assets/images/card/s2-1.webp",
    discount: "19%",
    category: "solid",
    weights: ["60ml", "100ml"],
    price: [15.00, 25.00],
    originalPrice: [40.00, 55.00],
    rating: 2,
    description: "Smoky sweet premium profile infused with premium tobacco leaf formulations."
  },
  {
    id: 13,
    brand: "Rihanna",
    title: "Fusion Aqua Eau De Parfum",
    image: "../assets/images/card/s3-2.webp",
    image2: "../assets/images/card/s3-1.webp",
    discount: "10%",
    category: "solid",
    weights: ["50ml", "100ml"],
    price: [15.00, 25.00],
    originalPrice: [40.00, 55.00],
    rating: 0,
    description: "Smoky sweet premium profile infused with premium tobacco leaf formulations."
  },
  {
    id: 14,
    brand: "Rihanna",
    title: "Fleur Eau De Parfum Fleur",
    image: "../assets/images/card/s1-2.webp",
    image2: "../assets/images/card/s1-1.webp",
    discount: "19%",
    category: "solid",
    weights: ["70ml", "90ml"],
    price: [15.00, 25.00],
    originalPrice: [40.00, 55.00],
    rating: 4,
    description: "Smoky sweet premium profile infused with premium tobacco leaf formulations."
  },
  {
    id: 15,
    brand: "Rihanna",
    title: "Velvet Oud Eau De Parfum",
    image: "../assets/images/card/s3-2.webp",
    image2: "../assets/images/card/s3-1.webp",
    discount: "19%",
    category: "solid",
    weights: ["85ml", "125ml"],
    price: [15.00, 25.00],
    originalPrice: [40.00, 55.00],
    rating: 3,
    description: "Smoky sweet premium profile infused with premium tobacco leaf formulations."
  }
];

export default function ProductSection() {
  const swiperRef = useRef(null);
  const { addToCart } = useCart();
  const { openCart } = useCartUI();

  const [activeTab, setActiveTab] = useState('fragrances');
  const [notify, setNotify] = useState({ visible: false, type: '', message: '' });

  const [previewTarget, setPreviewTarget] = useState(null);
  const [modalWeight, setModalWeight] = useState('');
  const [modalQty, setModalQty] = useState(1);
  const [modalImgIdx, setModalImgIdx] = useState(0);

  // VITE IMAGE RESOLVER FOR THE SECTION MODAL
  const getImageUrl = (imgName) => {
    if (!imgName) return '';
    const cleanFileName = imgName.split('/').pop();
    return new URL(`../assets/images/card/${cleanFileName}`, import.meta.url).href;
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

  const filteredProducts = masterProductsDataset.filter(item => item.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-4 md:px-16 text-black relative select-none">

      {notify.visible && (
        <div className="fixed top-4 right-4 z-[99999] bg-neutral-900 border border-neutral-800 text-white px-6 py-3 rounded-xl shadow-xl font-semibold text-xs tracking-wide transition-all">
          {notify.message}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Exploring the</h2>
          <p className="md:text-2xl xl:text-3xl text-3xl font-semibold tracking-widest text-neutral-700">Versatility of Sprays</p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {['fragrances', 'unisex', 'solid'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all border cursor-pointer ${activeTab === tab
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-black border-neutral-200 hover:border-neutral-400'
                }`}
            >
              {tab === 'unisex' ? 'Unisex Perfume' : tab === 'solid' ? 'Solid Perfume' : 'Fragrances'}
              <ShoppingBag size={13} className={activeTab === tab ? 'fill-white' : ''} />
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full group">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white border border-neutral-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-black hover:bg-neutral-50 cursor-pointer"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white border border-neutral-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-black hover:bg-neutral-50 cursor-pointer"
        >
          <ChevronRight size={16} />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="w-full !p-2"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                onOpenPreview={handleOpenPreview}
                setGlobalNotify={triggerNotification}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {previewTarget && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 w-screen h-screen top-0 left-0">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-black max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewTarget(null)}
              className="absolute top-4 right-4 p-1.5 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X size={16} />
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
                    className={`w-11 h-11 border rounded-lg p-0.5 bg-white transition-all cursor-pointer ${modalImgIdx === idx ? 'border-black ring-1 ring-black' : 'border-neutral-200'
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
                      className={`px-3 py-1.5 text-xs font-bold border rounded-lg transition-all cursor-pointer ${modalWeight === w ? 'bg-black text-white border-black shadow-sm' : 'bg-white text-black border-neutral-200 hover:border-neutral-300'
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
                    // FIX: Pre-compile absolute URLs for Vite asset bundles before inserting into the cart drawer context state
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