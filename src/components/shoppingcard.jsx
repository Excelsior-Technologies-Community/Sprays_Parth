import { useState, useRef } from 'react';
import {
    ArrowRightLeft, Eye, Heart, ShoppingBag, Star, X,
    ChevronLeft, ChevronRight, Plus, Minus, MoveUp, MoveDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useCartUI } from '../context/CartUIContext';

// Import Swiper React components and required styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// =======================================================================
// NEW SWIPER CARD DATA COMPONENT: Contains 7 Extended items
// =======================================================================
const swiperProductsData = [
    {
        id: 1,
        brand: "Rihanna",
        title: "Carlisle Eau De Parfum",
        image: "../src/assets/images/card/black2.webp",
        image2: "../src/assets/images/card/black1.webp",
        discount: "New",
        weights: ["60ml", "100ml"],
        price: [37.00, 50.00],
        originalPrice: [45.00, 60.00],
        rating: 0,
        colors: ["emerald green", "deep forest"],
        description: "Luxurious and sophisticated fragrance profile featuring an exotic aura."
    },
    {
        id: 2,
        brand: "Rihanna",
        title: "Althair Eau De Parfum",
        image: "../src/assets/images/card/orange1.webp",
        image2: "../src/assets/images/card/orange2.webp",
        discount: "19%",
        weights: ["75ml", "125ml"],
        price: [30.00, 45.00],
        originalPrice: [37.00, 55.00],
        rating: 0,
        colors: ["classic amber", "warm sand"],
        description: "Opulent blend of warm notes balanced gracefully with sweet vanilla undertones."
    },
    {
        id: 3,
        brand: "Rihanna",
        title: "Pegasus Eau De Parfum",
        image: "../src/assets/images/card/white.webp",
        image2: "../src/assets/images/card/whitehover.webp",
        discount: "19%",
        weights: ["60ml", "120ml"],
        price: [30.00, 49.00],
        originalPrice: [37.00, 60.00],
        rating: 2,
        colors: ["matte silver", "pure white"],
        description: "Enticing blend of citrus and musk paths creating a bold signature standard."
    },
    {
        id: 4,
        brand: "Rihanna",
        title: "Herod Eau De parfum",
        image: "../src/assets/images/card/brown2.webp",
        image2: "../src/assets/images/card/brown1.webp",
        discount: "New",
        weights: ["80ml", "100ml"],
        price: [15.00, 25.00],
        originalPrice: [40.00, 55.00],
        rating: 0,
        colors: ["shadow black", "midnight matte"],
        description: "Smoky sweet premium profile infused with premium tobacco leaf formulations."
    },
    {
        id: 5,
        brand: "Rihanna",
        title: "Greenley Eau De Parfum",
        image: "../src/assets/images/card/lightgreen2.webp",
        image2: "../src/assets/images/card/lightgreen1.webp",
        discount: "19%",
        weights: ["50ml", "75ml"],
        price: [30.00, 42.00],
        originalPrice: [37.00, 50.00],
        rating: 3,
        colors: ["light green", "fresh variant"],
        description: "Fresh and crisp refreshing finish utilizing premium natural components."
    },

    {
        id: 7,
        brand: "Rihanna",
        title: "Carlisle Eau De Parfum",
        image: "../src/assets/images/card/black2.webp",
        image2: "../src/assets/images/card/black1.webp",
        discount: "New",
        weights: ["60ml", "100ml"],
        price: [37.00, 50.00],
        originalPrice: [45.00, 60.00],
        rating: 0,
        colors: ["emerald green", "deep forest"],
        description: "Luxurious and sophisticated fragrance profile featuring an exotic aura."
    },
    {
        id: 8,
        brand: "Rihanna",
        title: "Althair Eau De Parfum",
        image: "../src/assets/images/card/orange1.webp",
        image2: "../src/assets/images/card/orange2.webp",
        discount: "19%",
        weights: ["75ml", "125ml"],
        price: [30.00, 45.00],
        originalPrice: [37.00, 55.00],
        rating: 0,
        colors: ["classic amber", "warm sand"],
        description: "Opulent blend of warm notes balanced gracefully with sweet vanilla undertones."
    },
    {
        id: 9,
        brand: "Rihanna",
        title: "Pegasus Eau De Parfum",
        image: "../src/assets/images/card/white.webp",
        image2: "../src/assets/images/card/whitehover.webp",
        discount: "19%",
        weights: ["60ml", "120ml"],
        price: [30.00, 49.00],
        originalPrice: [37.00, 60.00],
        rating: 2,
        colors: ["matte silver", "pure white"],
        description: "Enticing blend of citrus and musk paths creating a bold signature standard."
    },
];

const productsData = [
    {
        id: 3,
        brand: "Rihanna",
        title: "Pegasus Eau De Parfum",
        image: "../src/assets/images/card/white.webp",
        image2: "../src/assets/images/card/whitehover.webp",
        discount: "19%",
        weights: ["50ml", "60ml"],
        price: [29.00, 36.00],
        originalPrice: [36.00, 45.00],
        rating: 2,
        colors: ["white", "box variant"],
        description: "Pegasus Eau De Parfum is a luxurious and sophisticated fragrance, crafted with natural and vegan ingredients."
    },
    {
        id: 4,
        brand: "Rihanna",
        title: "Herod Eau De Parfum",
        image: "../src/assets/images/card/brown2.webp",
        image2: "../src/assets/images/card/brown1.webp",
        discount: "New",
        weights: ["80ml", "100ml"],
        price: [15.00, 25.00],
        originalPrice: [40.00, 55.00],
        rating: 0,
        colors: ["classic brown", "dark shadow"],
        description: "Herod Eau De Parfum offers an opulent smoky-sweet profile. Infused with rich tobacco leaf and vanilla."
    },
    {
        id: 5,
        brand: "Rihanna",
        title: "Greenley Eau De Parfum",
        image: "../src/assets/images/card/lightgreen2.webp",
        image2: "../src/assets/images/card/lightgreen1.webp",
        discount: "19%",
        weights: ["50ml", "75ml"],
        price: [29.00, 42.00],
        originalPrice: [36.00, 50.00],
        rating: 3,
        colors: ["light green", "fresh variant"],
        description: "Greenley Eau De Parfum is a luxurious and sophisticated fragrance, crafted with natural and vegan ingredients."
    }
];

// =======================================================================
// SUB-COMPONENT: INDIVIDUAL SWIPER CARD
// =======================================================================
function SingleSwiperCard({ product, onOpenPreview, setGlobalNotify }) {
    const navigate = useNavigate();
    const { addToCompare, isInCompare } = useCompare();
    const { addToWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { openCart } = useCartUI();

    const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);

    const currentWeightIndex = product.weights.indexOf(selectedWeight);
    const isFirstWeight = currentWeightIndex === 0;

    const activeDefaultImage = isFirstWeight ? product.image : product.image2;
    const activeHoverImage = isFirstWeight ? product.image2 : product.image;

    const activePrice = product.price[currentWeightIndex] ?? product.price[0];
    const activeOriginalPrice = product.originalPrice[currentWeightIndex] ?? product.originalPrice[0];

    const handleWishlist = (e) => {
        e.preventDefault();
        if (isInWishlist(product.id)) {
            navigate('/wishlist');
        } else {
            addToWishlist({ ...product, selectedWeight, price: [activePrice] });
            setGlobalNotify({ type: 'wishlist', message: `${product.title} added to wishlist!` });
        }
    };

    const handleCompare = (e) => {
        e.preventDefault();
        if (isInCompare(product.id)) {
            navigate('/compare');
        } else {
            addToCompare({ ...product, selectedWeight, price: [activePrice] });
            setGlobalNotify({ type: 'compare', message: `${product.title} added to compare list!` });
        }
    };

    return (
        <div className="w-full bg-white border border-neutral-200 rounded-2xl p-5 text-black shadow-sm hover:shadow-xl transition-all duration-300 select-none">
            {/* Discount Tag */}
            <div className='absolute z-10 top-4 left-4 border rounded-full px-3 py-0.5 text-black bg-white text-xs font-bold shadow-sm'>
                {product.discount}
            </div>

            {/* Action Hover Triggers */}
            <div className='absolute z-10 top-4 right-4 flex flex-col gap-2'>
                <button onClick={handleWishlist} className={`p-1.5 border rounded-lg transition-colors ${isInWishlist(product.id) ? 'bg-black text-white' : 'bg-white hover:bg-neutral-50 text-black'}`}>
                    <Heart size={15} className={isInWishlist(product.id) ? 'fill-white' : ''} />
                </button>
                <button onClick={handleCompare} className={`p-1.5 border rounded-lg transition-colors ${isInCompare(product.id) ? 'bg-black text-white' : 'bg-white hover:bg-neutral-50 text-black'}`}>
                    <ArrowRightLeft size={15} />
                </button>
                <button onClick={() => onOpenPreview(product, selectedWeight)} className='p-1.5 border bg-white rounded-lg text-black hover:bg-neutral-100 transition-colors'>
                    <Eye size={15} />
                </button>
            </div>

            {/* Image Canvas */}
            <div className="mb-3 w-full h-44 flex items-center justify-center relative mt-4">
                <div className="relative w-36 h-40 group/img">
                    <img src={activeDefaultImage} alt={product.title} className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover/img:opacity-0" />
                    <img src={activeHoverImage} alt={product.title} className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover/img:opacity-100" />
                </div>
            </div>

            {/* Card Content Descriptions */}
            <h4 className='text-xs font-medium text-neutral-400 uppercase tracking-wider'>{product.brand}</h4>
            <h2 className='text-sm font-semibold text-neutral-800 line-clamp-1 mt-0.5 min-h-[1.5rem] tracking-normal'>{product.title}</h2>

            {/* Weight Filter Dropdown */}
            <div className='flex gap-2 items-center text-sm mt-3 text-black'>
                <span className="text-neutral-500 text-xs">Weight:</span>
                <select value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)} className="flex-1 border border-neutral-200 rounded-lg px-2 py-1 bg-white text-xs cursor-pointer focus:outline-none">
                    {product.weights.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
            </div>

            {/* Rating Stars Segment */}
            <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className={i < product.rating ? "fill-black text-black" : "text-neutral-200"} strokeWidth={1.5} />
                ))}
            </div>

            {/* Lower Segment Footer Row */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-neutral-100">
                <div>
                    <h3 className="text-xs font-bold text-neutral-900">${activePrice.toFixed(2)} AUD</h3>
                    <p className="line-through text-neutral-400 text-[10px]">${activeOriginalPrice.toFixed(2)} AUD</p>
                </div>
                <button onClick={() => { addToCart(product, 1, selectedWeight); openCart(); setGlobalNotify({ type: 'cart', message: `${product.title} added to cart!` }); }} className="bg-black text-white px-3 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1 hover:bg-neutral-800 transition-colors">
                    Add To Cart <ShoppingBag size={13} />
                </button>
            </div>
        </div>
    );
}

// =======================================================================
// MAIN COMPONENT 1: FULL-WIDTH HORIZONTAL CARDS SWIPER
// =======================================================================
export function ProductSwiper({ products = swiperProductsData }) {
    const swiperRef = useRef(null);
    const { addToCart } = useCart();
    const { openCart } = useCartUI();

    const [notify, setNotify] = useState({ visible: false, type: '', message: '' });
    const triggerNotification = ({ type, message }) => {
        setNotify({ visible: true, type, message });
        setTimeout(() => setNotify({ visible: false, type: '', message: '' }), 2000);
    };

    const [previewTarget, setPreviewTarget] = useState(null);
    const [modalWeight, setModalWeight] = useState('');
    const [modalQty, setModalQty] = useState(1);
    const [modalImgIdx, setModalImgIdx] = useState(0);

    const handleOpenPreview = (product, fallbackWeight) => {
        setPreviewTarget(product);
        setModalWeight(fallbackWeight);
        setModalQty(1);
        setModalImgIdx(0);
    };

    return (
        <div className="w-full bg-transparent select-none relative overflow-hidden">
            {/* Context Toasters */}
            {notify.visible && (
                <div className={`fixed top-4 right-4 z-[11000] text-white px-6 py-3 rounded-lg shadow-xl font-medium text-sm ${notify.type === 'wishlist' ? 'bg-red-500' : notify.type === 'compare' ? 'bg-blue-500' : 'bg-green-500'
                    }`}>
                    {notify.message}
                </div>
            )}



            {/* Main Window Slider Box Layout Container */}
            <div className="relative w-full px-4 md:px-16">

                {/* Left Absolute Float Arrow Button */}
                <button
                    onClick={() => swiperRef.current?.swiper.slidePrev()}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-all active:scale-95 shadow-xl"
                >
                    <ChevronLeft size={22} />
                </button>

                {/* Right Absolute Float Arrow Button */}
                <button
                    onClick={() => swiperRef.current?.swiper.slideNext()}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-all active:scale-95 shadow-xl"
                >
                    <ChevronRight size={22} />
                </button>

                {/* Swiper Layout Component Core initialization */}
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={24}          // Separation gap layout styling between neighboring card structures
                    slidesPerView={1.3}        // Mobile view fallback settings (shows parts of next cards)
                    centeredSlides={true}      // Active item positioning alignment parameter
                    loop={true}                // Infinite canvas cloning mode loop duplication
                    breakpoints={{
                        640: {
                            slidesPerView: 2.3,
                            centeredSlides: true,
                        },
                        1024: {
                            slidesPerView: 4.4, // Renders 4 items cleanly, while splitting the .4 on both edges
                            centeredSlides: true,
                        }
                    }}
                    className="w-full !overflow-visible" // Keeps overflowing edge items visible instead of hiding them
                >
                    {products.map((productItem) => (
                        <SwiperSlide key={productItem.id} className="h-auto">
                            <SingleSwiperCard
                                product={productItem}
                                onOpenPreview={handleOpenPreview}
                                setGlobalNotify={triggerNotification}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Interactive Preview Details View Quick Modal */}
            {previewTarget && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 w-screen h-screen top-0 left-0">
                    <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-black max-h-[90vh] overflow-y-auto">
                        <button onClick={() => setPreviewTarget(null)} className="absolute top-4 right-4 p-1.5 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors z-10"><X size={16} /></button>

                        <div className="w-full md:w-1/2 bg-neutral-50 p-6 flex flex-col items-center justify-center">
                            <img src={modalImgIdx === 0 ? previewTarget.image : previewTarget.image2} alt="" className="max-h-52 object-contain" />
                            <div className="flex gap-2 mt-4">
                                {[previewTarget.image, previewTarget.image2].map((img, i) => (
                                    <button key={i} onClick={() => setModalImgIdx(i)} className={`w-10 h-10 border rounded p-0.5 bg-white ${modalImgIdx === i ? 'border-black' : 'border-neutral-200'}`}><img src={img} className="w-full h-full object-contain" /></button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                            <h2 className="text-lg font-bold">{previewTarget.title}</h2>
                            <p className="text-xs text-neutral-400 uppercase font-semibold mb-2">{previewTarget.brand}</p>
                            <p className="text-xs text-neutral-500 mb-4 leading-relaxed">{previewTarget.description}</p>

                            <div className="mb-4">
                                <span className="text-[10px] font-bold text-neutral-400 block mb-1">WEIGHT:</span>
                                <div className="flex gap-2">
                                    {previewTarget.weights.map((w) => (
                                        <button key={w} onClick={() => setModalWeight(w)} className={`px-3 py-1 text-xs font-semibold border rounded ${modalWeight === w ? 'bg-black text-white' : 'bg-white text-black border-neutral-300'}`}>{w}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-2">
                                <button onClick={() => { addToCart(previewTarget, modalQty, modalWeight); openCart(); setPreviewTarget(null); triggerNotification({ type: 'cart', message: `${previewTarget.title} added to cart!` }); }} className="flex-1 bg-black text-white py-2 px-4 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors">
                                    Add To Cart <ShoppingBag size={14} />
                                </button>
                                <div className="flex items-center border border-neutral-300 rounded-xl px-2 bg-neutral-50 h-9">
                                    <button onClick={() => setModalQty(p => Math.max(1, p - 1))}><Minus size={12} /></button>
                                    <span className="w-6 text-center text-xs font-bold">{modalQty}</span>
                                    <button onClick={() => setModalQty(p => p + 1)}><Plus size={12} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// =======================================================================
// MAIN COMPONENT 2: ORIGINAL VERTICAL HERO CONFIGURATION DECK (UNTOUCHED)
// =======================================================================
export function Cards() {
    const navigate = useNavigate();
    const { addToCompare, isInCompare } = useCompare();
    const { addToWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { openCart } = useCartUI();
    const [compareNotification, setCompareNotification] = useState('');
    const [wishlistNotification, setWishlistNotification] = useState('');
    const [cartNotification, setCartNotification] = useState('');

    const [currentCard, setCurrentCard] = useState(0);
    const [selectedWeight, setSelectedWeight] = useState(productsData[0].weights[0]);

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [modalQuantity, setModalQuantity] = useState(1);
    const [modalActiveImageIdx, setModalActiveImageIdx] = useState(0);

    const product = productsData[currentCard];

    const currentWeightIndex = product.weights.indexOf(selectedWeight);
    const isFirstWeight = currentWeightIndex === 0;

    const activeDefaultImage = isFirstWeight ? product.image : product.image2;
    const activeHoverImage = isFirstWeight ? product.image2 : product.image;

    const activePrice = product.price[currentWeightIndex];
    const activeOriginalPrice = product.originalPrice[currentWeightIndex];

    const previewImages = [product.image, product.image2];

    const nextCard = () => {
        setCurrentCard((prev) => {
            const nextIdx = prev === productsData.length - 1 ? 0 : prev + 1;
            handleCardReset(nextIdx);
            return nextIdx;
        });
    };

    const prevCard = () => {
        setCurrentCard((prev) => {
            const prevIdx = prev === 0 ? productsData.length - 1 : prev - 1;
            handleCardReset(prevIdx);
            return prevIdx;
        });
    };

    const changeCard = (index) => {
        setCurrentCard(index);
        handleCardReset(index);
    };

    const handleCardReset = (index) => {
        setSelectedWeight(productsData[index].weights[0]);
        setModalActiveImageIdx(0);
        setModalQuantity(1);
    };

    const openPreview = () => {
        setModalActiveImageIdx(isFirstWeight ? 0 : 1);
        setModalQuantity(1);
        setIsPreviewOpen(true);
    };

    const handleCompareClick = () => {
        if (isInCompare(product.id)) {
            navigate('/compare');
        } else {
            const productToCompare = { ...product, selectedWeight, price: [activePrice] };
            addToCompare(productToCompare);
            setCompareNotification(`${product.title} added to compare!`);
            setTimeout(() => setCompareNotification(''), 2000);
        }
    };

    const handleWishlistClick = () => {
        if (isInWishlist(product.id)) {
            navigate('/wishlist');
        } else {
            const productToWishlist = { ...product, selectedWeight, price: [activePrice] };
            addToWishlist(productToWishlist);
            setWishlistNotification(`${product.title} added to wishlist!`);
            setTimeout(() => setWishlistNotification(''), 2000);
        }
    };

    const handleAddToCart = (quantity = 1) => {
        addToCart(product, quantity, selectedWeight);
        setCartNotification(`${product.title} added to cart!`);
        openCart();
        setTimeout(() => setCartNotification(''), 2000);
    };

    return (
        <>
            {compareNotification && (<div className="fixed top-4 right-4 z-[11000] bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">{compareNotification}</div>)}
            {wishlistNotification && (<div className="fixed top-4 right-4 z-[11000] bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">{wishlistNotification}</div>)}
            {cartNotification && (<div className="fixed top-4 right-4 z-[11000] bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">{cartNotification}</div>)}

            <div className="relative group xl:h-[75%] md:h-[50%] max-h-[100%] h-full md:max-w-[82%] max-w-[87%] top-0 md:top-1/6 xl:top-0 xl:max-w-[88%] w-full bg-white backdrop-blur-md border border-black rounded-2xl p-6 text-white shadow-2xl transition-all duration-300">
                <div className='absolute z-50 top-4 left-4 border rounded-full px-4 py-1 text-black bg-white text-xs font-bold'>{product.discount}</div>
                <div className='absolute z-50 text-black top-4 right-4 flex flex-col gap-3'>
                    <a href='#' onClick={handleWishlistClick} className={`flex items-center border py-1 px-2 rounded-lg justify-center transition-colors ${isInWishlist(product.id) ? 'bg-black text-white' : 'hover:bg-gray-100'}`} title={isInWishlist(product.id) ? 'Go to Wishlist' : 'Add to Wishlist'}><Heart size={15} className={isInWishlist(product.id) ? 'fill-white' : ''} /></a>
                    <a href='#' onClick={handleCompareClick} className={`flex items-center border py-1 px-2 rounded-lg justify-center transition-colors ${isInCompare(product.id) ? 'bg-black text-white' : 'hover:bg-gray-100'}`} title={isInCompare(product.id) ? 'Go to Compare' : 'Add to Compare'}><ArrowRightLeft size={15} /></a>
                    <a href='#' onClick={openPreview} className='flex items-center border py-1 px-2 rounded-lg justify-center transition-colors hover:bg-gray-100'><Eye size={15} /></a>
                </div>
                <div className="mb-2 w-full relative h-48 flex items-center justify-center">
                    <div className="relative w-44 h-56 group/img">
                        <img key={`default-${selectedWeight}`} src={activeDefaultImage} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover/img:opacity-0" />
                        <img key={`hover-${selectedWeight}`} src={activeHoverImage} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
                    </div>
                </div>
                <h4 className='text-md leading-tight mt-4 font-medium text-black'>{product.brand}</h4>
                <h2 className='tracking-widest text-black mt-1 text-xl'>{product.title}</h2>
                <div className='flex gap-2 items-center text-black mt-4'>
                    <span>weight:</span>
                    <select value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)} className="flex-1 border border-black rounded-lg px-5 py-1 bg-white text-black cursor-pointer">
                        {product.weights.map((weight) => <option key={weight} value={weight}>{weight}</option>)}
                    </select>
                </div>
                <div className="flex text-black gap-1 mt-1 text-xl">
                    {[...Array(5)].map((_, index) => <span key={index}>{index < product.rating ? <Star size={18} className="fill-black text-black" strokeWidth={1} /> : <Star size={18} className="text-black" strokeWidth={1} />}</span>)}
                </div>
                <div className="flex justify-between items-center mt-1">
                    <div>
                        <h3 className="text-md text-black font-semibold">${activePrice.toFixed(2)} AUD</h3>
                        <p className="line-through text-gray-500 text-md">${activeOriginalPrice.toFixed(2)} AUD</p>
                    </div>
                    <button onClick={() => handleAddToCart()} className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-colors">Add To Cart <ShoppingBag size={18} /></button>
                </div>
                <div className="absolute right-[100%] xl:left-[105%] top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="flex flex-col items-center">
                        <button onClick={prevCard} className="text-white hover:scale-110 transition-all duration-300"><MoveUp size={38} strokeWidth={1.5} /></button>
                        <div className="relative w-[1px] h-[180px] bg-white/30 my-5"><div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[40px] bg-white rounded-full transition-all duration-500" style={{ top: `${currentCard * 70}px` }} /></div>
                        <button onClick={nextCard} className="text-white hover:scale-110 transition-all duration-300"><MoveDown size={38} strokeWidth={1.5} /></button>
                    </div>
                    <div className="flex xl:flex-col xl:flex hidden gap-10">
                        {productsData.map((item, index) => <button key={item.id} onClick={() => changeCard(index)} className={`text-2xl font-light transition-all duration-300 ${currentCard === index ? "text-white scale-110 font-semibold" : "text-white/60 hover:text-white"}`}>{String(index + 1).padStart(2, "0")}</button>)}
                    </div>
                </div>
            </div>

            {isPreviewOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 w-screen h-screen left-0 top-0">
                    <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-black">
                        <button onClick={() => setIsPreviewOpen(false)} className="absolute top-4 right-4 z-[10001] p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"><X size={20} /></button>
                        <div className="w-full md:w-1/2 bg-neutral-50 p-8 flex items-center justify-center relative min-h-[350px]">
                            <img src={previewImages[modalActiveImageIdx]} alt="" className="max-w-full max-h-full object-contain" />
                            <button onClick={() => setModalActiveImageIdx(prev => prev === 0 ? 1 : 0)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border bg-white"><ChevronLeft size={20} /></button>
                            <button onClick={() => setModalActiveImageIdx(prev => prev === 0 ? 1 : 0)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border bg-white"><ChevronRight size={20} /></button>
                        </div>
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-1">{product.title}</h2>
                            <p className="text-sm text-neutral-500 mb-4">{product.brand}</p>
                            <p className="text-sm text-neutral-600 mb-6">{product.description}</p>
                            <div className="mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">Weight: {selectedWeight}</span>
                                <div className="flex gap-3">
                                    {product.weights.map((w) => <button key={w} onClick={() => setSelectedWeight(w)} className={`px-4 py-1.5 rounded-md font-semibold text-sm border ${selectedWeight === w ? 'bg-black text-white' : 'bg-white text-black border-neutral-300'}`}>{w}</button>)}
                                </div>
                            </div>
                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-2xl font-bold">${activePrice.toFixed(2)} AUD</span>
                                <span className="text-sm text-neutral-400 line-through">${activeOriginalPrice.toFixed(2)} AUD</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => handleAddToCart(modalQuantity)} className="flex-1 bg-black text-white py-3 px-6 font-semibold rounded-xl flex items-center justify-center gap-2">Add To Cart <ShoppingBag size={18} /></button>
                                <div className="flex items-center border border-neutral-300 rounded-xl h-12 px-2 bg-neutral-50">
                                    <button onClick={() => setModalQuantity(prev => Math.max(1, prev - 1))}><Minus size={16} /></button>
                                    <span className="w-10 text-center font-semibold">{modalQuantity}</span>
                                    <button onClick={() => setModalQuantity(prev => prev + 1)}><Plus size={16} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}