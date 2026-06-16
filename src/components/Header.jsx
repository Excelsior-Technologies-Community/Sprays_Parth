    // Note: You can delete the import './Header.css'; line entirely!
    import { useState, useEffect, useRef } from 'react';
    import { ChevronDown,Menu,X,Plus,Minus, User, ShoppingCart, Trash2 } from 'lucide-react';
    import { useCart } from '../context/CartContext';
    import { useCartUI } from '../context/CartUIContext';


    export default function Header() {
        const { cartItems, getTotalPrice, updateQuantity, removeFromCart } = useCart();
        const { isCartOpen, openCart, closeCart } = useCartUI();

        // Dropdown States
        const [isLangOpen,setIsLangOpen] = useState(false);
        const [isCurrencyOpen,setIsCurrencyOpen] = useState(false);
        const [isuseropen,setISUseropen] = useState(false);

        // Refs for outside clicking
        const langRef = useRef(null) ;
        const currencyRef = useRef(null);
        const cateRef = useRef(null) ;

        // Desktop Mega Menu Hover/Click States
        const [iscategoriesOpen,setIsCategoriesopen] = useState(false);
        const [ispagesopen , setIsPagesOpen] = useState(false);
        const [iscollectionopen , setIsCollectionopen] = useState(false);
        const [isblogopen , setIsBlogopen] = useState(false);

        const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
        const [isshopopen,setShopOpen] = useState(false)
        const [isperfumeopen,setIsPerfumesOpen] =useState(false)
        const [isunisexopen,setUniSexOpen] = useState(false)
        const [isuniversalopen,setIsUniversal] =useState(false)
        const [ismobilepageopen , setIsmobilepage] = useState(false);

        useEffect(() => {
            const handleOutsideClick = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
            if (currencyRef.current && !currencyRef.current.contains(event.target)) {
                setIsCurrencyOpen(false);
            }
            if (cateRef.current && !cateRef.current.contains(event.target)) {
                setIsPagesOpen(false);
            }
            };
        
            document.addEventListener('click', handleOutsideClick);
            return () => {
            document.removeEventListener('click', handleOutsideClick);
            };
        }, []);

    // 4. Toggle logic functions
    const toggleLanguage = (e) => {
        e.stopPropagation();
        setIsLangOpen(!isLangOpen);
        setIsCurrencyOpen(false); 
    };

    const toggleCurrency = (e) => {
        e.stopPropagation();
        setIsCurrencyOpen(!isCurrencyOpen);
        setIsLangOpen(false); 
    };

    const toggleuser = () => {
        setISUseropen(!isuseropen);
    }

    return (
        <header className="sticky top-0 left-0 right-0 bg-black text-white w-full z-50 font-sans">
            {/* 1.Top Bar */}
            
            <div className="hidden md:flex md:max-w-[100%] xl:max-w-[78%] mx-auto  px-4 md:h-[60px] xl:h-[66.4px]  flex items-center justify-between py-3 md:text-sm xl:text-sm font-medium border-b border-white ">
                <div className="top-bar-left ">
                    <span>
                        Monday - Friday <span className="text-neutral-300 ml-1">8:00 AM - 9:00 PM</span>
                    </span>     
                </div>
                <div className="flex gap-5 items-center">
                        <div className="top-bar-right relative" ref={langRef}>
                            
                                <a onClick={toggleLanguage} className="bg-white text-black px-2 rounded-full flex items-center gap-1.5 font-semibold transition py-1 cursor-pointer hover:bg-[#f3f0ee]">
                                    
                                        <img src="/src/assets/images/headertopleft/en.svg" alt="" className="h-[14px] w-[18px]" />
                                        English
                                    
                                    <span  className={`transition-transform duration-200 material-symbols-outlined ${isLangOpen ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
                                </a>
                                {isLangOpen && (
                                <div className=" right-0 w-29 overflow-hidden border bg-white text-black mt-1 absolute rounded flex flex-col items-center z-50 gap-1.5 transition z-50">
                                    <a href="#" className="mx-auto block px-5 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/en.svg" alt="" className="h-[14px] w-[18px]" />
                                        English
                                    </span></a>
                                    <a href="#" className="mx-auto block px-5 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/ar.svg" alt="" className="h-[14px] w-[18px] mr-2" />
                                    العربية
                                    </span></a>
                                    <a href="#" className="mx-auto block px-5 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/de.svg" alt="" className="h-[14px] w-[18px]" />
                                        Deutsch
                                    </span></a>
                                    <a href="#" className="mx-auto block px-5 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/es.svg" alt="" className="h-[14px] w-[18px]" />
                                        Español
                                    </span></a>
                                </div>
                                )}
                        </div>

                        <div className="top-bar-right relative" ref={currencyRef}>
                            
                                <a onClick={toggleCurrency} className="bg-white text-black p-2 rounded-full flex items-center gap-1.5 transition py-1 cursor-pointer hover:bg-[#f3f0ee]">
                                    <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/usd.svg" alt="" className="h-[14px] w-[18px]" />
                                        USD
                                    </span>
                                    <span  className={`transition-transform duration-200 material-symbols-outlined ${isCurrencyOpen ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
                                </a>

                                {isCurrencyOpen && (

                                <div  className=" right-0 w-26 overflow-hidden border bg-white text-black mt-1 absolute rounded flex-col flex z-50 items-center gap-1.5 transition">
                                    <a href="#" className="mx-auto block px-4 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/aud.svg" alt="" className="h-[14px] w-[18px]" />
                                        <span>AUD $</span>
                                    </span></a>
                                    <a href="#" className="mx-auto block px-4 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/cad.svg" alt="" className="h-[14px] w-[18px]" />
                                        CAD $
                                    </span></a>
                                    <a href="#" className="mx-auto block px-4 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/usd.svg" alt="" className="h-[14px] w-[18px]" />
                                        USD $
                                    </span></a>
                                    
                                </div>
                                )}
                        </div>

                        <a href="#" className="hover:text-white transition">Faq</a>
                        <a href="#" className="hover:text-white transition">About Us</a>
                </div>
            
                
        
            </div>

            {/* 2.Header parts large screen */}
            <div className="md:max-w-[100%] xl:max-w-[78%] px-2 mx-auto flex items-center justify-between h-[58px] md:h-[60px] xl:h-[66.5px]">
                <div className='flex items-center gap-4'>
                    <div className='pr-12 px-2 xl:border-r xl:border-white h-10 flex items-center '>
                        <img src="/src/assets/images/headertopleft/sprays_-2_100x.png" alt="" />
                    </div>
                    
                    <ul className='flex hidden md:flex items-center list-none p-0 m-0 h-full gap-5'>
                        {/* all categories trigger items */}
                        <li 
                            className='static h-full flex items-center'
                            onMouseEnter={() => setIsCategoriesopen(true)} 
                            onMouseLeave={() => setIsCategoriesopen(false)}
                        >
                            <a  href="#" className='flex items-center  xl:text-sm font-semibold xl:gap-2 relative pr-1 py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                <span >All Categories</span>
                                <ChevronDown size={16} className={`transition-transform mt-1 duration-300 ${iscategoriesOpen ? 'rotate-180' : ''}`} />
                            </a>
                                
                            {/* full width dropdown panel strip */}
                            <div className={`absolute left-0 right-0 rounded-b-lg top-full w-full bg-black border-b border-neutral-900 py-4 px-6 z-50 
                                    transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) origin-top before:absolute before:-top-6 before:h-6 before:left-0 before:right-0
                                    ${iscategoriesOpen 
                                    ? 'opacity-100 visible translate-y-0' 
                                    : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                                    }`}
                                >
                                <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-left">
                                    <div>
                                        <h3 className='text-sm  font-bold text-white mb-2 tracking-widest border-b border-neutral-900'>Universal Fragrances</h3>
                                        <ul className="space-y-3 text-sm text-neutral-400 font-medium list-none p-0">
                                            <li><a href="#" className="hover:text-white duration-300 ease-out transition-colors">Cassili Eau De Parfum</a></li>
                                            <li><a href="#" className="hover:text-white duration-300 ease-out transition-colors">Delina La Rosee Eau De Parfum</a></li>
                                            <li><a href="#" className="hover:text-white duration-300 ease-out transition-colors">Delina Eau De Parfum</a></li>
                                            <li><a href="#" className="hover:text-white duration-300 ease-out transition-colors">Pegasus Eau De Parfum</a></li>
                                            <li><a href="#" className="hover:text-white duration-300 ease-out transition-colors">Oriana Eau De Parfum</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-sm  font-bold text-white tracking-widest border-b border-neutral-900 mb-2'>Signature Perfumes</h3>
                                        <ul className='space-y-3 text-sm text-neutral-400 font-medium list-none p-0'>
                                            <li><a href="#" className="hover:text-white duration-300 ease-out  transition-colors">Althair Eau De Parfum</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out  transition-colors'>Carlisle Eau De Parfum</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out  transition-colors'>Greenley Eau De Parfum</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out  transition-colors'>Herod Eau De parfum</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-bold text-white tracking-widest border-b border-neutral-900 mb-2'>Unisex Perfume</h3>
                                        <ul className='space-y-3 text-sm text-neutral-400 font-medium list-none p-0'>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Cologne Arabic Air</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Cologne Gripped Rose</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Cologne Sapphire Sea</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Cologne To The Races</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <img src="/src/assets/images/headertopleft/product-img-1.webp" alt="" />
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li 
                            className='static h-full flex items-center'
                            onMouseEnter={() => setIsPagesOpen(true)}
                            onMouseLeave={() => setIsPagesOpen(false)}
                        >
                            {/*this is bottom line code :~ relative pr-1 py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full */}
                            <a href="#" className='flex items-center xl:gap-2 xl:text-sm font-semibold relative pr-1 py-2 after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                <span >Pages</span>
                                <ChevronDown size={16} className={`transition-transform mt-1 duration-200 ${ispagesopen ? 'rotate-180' : ''}`} />
                            </a>

                            {/* dropdown panel  */}
                            <div className={`absolute rounded-b-lg top-full md:w-[23%] xl:w-[13%] bg-black border-b border-neutral-900 py-4 px-6 z-50
                            transition-all duration-300 origin-top cubic-bezier(0.4, 0, 0.2, 1) before:absolute before:-top-6 before:h-6 before:left-0 before:right-0
                            ${ispagesopen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'} 
                            `}
                            >
                                <div className='max-w-xl mx-auto flex flex-col text-left'>
                                    
                                        <h3 className='text-sm font-bold tracking-widest text-white mb-2'>Contact</h3>
                                        <ul className='text-neutral-400 text-sm space-y-3 font-medium list-none'>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>About us</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Faqs</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>privacy policy</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Shipping & Policy</a></li>
                                            <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Terms & Conditions</a></li>
                                        </ul>
                                
                                </div>

                            </div>
                        </li>
                        <li 
                            className='static h-full flex items-center'
                            onMouseEnter={() => setIsCollectionopen(true)}
                            onMouseLeave={() => setIsCollectionopen(false)}>
                            <a  href="#" className='flex items-center xl:gap-2 xl:text-sm font-semibold relative pr-1 py-2 after:absolute after:bg-white after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2 '>
                                <span>Collections</span>
                                <ChevronDown size={16} className={`transition-transform mt-1 duration-200 ${iscollectionopen ? 'rotate-180' : ''}`} />
                            </a>

                            {/* dropdown panel */}
                            <div className={`absolute top-full right-0 left-0 w-full bg-black border-b border-neutral-900 py-4 px-6 z-50
                            transition-all duration-300 origin-top cubic-bezier(0.4, 0, 0.2, 1) before:absolute before:-top-6 before:h-6 before:left-0 before:right-0
                            ${iscollectionopen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
                            `}
                            >
                                <div className='max-w-6xl text-sm grid grid-cols-4 gap-4 mx-auto font-medium'>
                                    <div className='flex flex-col gap-4 justify-center items-center w-[90%]'>
                                        <a href="#"><img src="/src/assets/images/headertopleft/bottle-that-has-word-message-it_1.jpg" alt="" className='rounded-lg'/></a>
                                        <a href="#">Signature perfumes</a>
                                    </div>
                                    <div className='flex flex-col gap-4 justify-center items-center w-[90%]'>
                                        <a href="#"><img src="/src/assets/images/headertopleft/aloe-vera-leaves-with-beauty-cream-bottle_1.webp" alt="" className='rounded-lg'/></a>
                                        <a href="#">Unisex Perfume</a>
                                    </div>
                                    <div className='flex flex-col gap-4 justify-center items-center w-[90%]'>
                                        <a href="#"><img src="/src/assets/images/headertopleft/skin-care-product-grass_1.webp" alt="" className='rounded-lg'/></a>
                                        <a href="#">Men’s Fragrances</a>
                                    </div>
                                    <div className='flex flex-col gap-4 justify-center items-center w-[90%]'>
                                        <a href="#"><img src="/src/assets/images/headertopleft/front-view-argan-product-assortment_1.webp" alt="" className='rounded-lg'/></a>
                                        <a href="#">Universal Fragrances</a>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li 
                            className='static h-full flex item-center'
                            onMouseEnter={() => setIsBlogopen(true)}
                            onMouseLeave={() => setIsBlogopen(false)}>
                            <a href="#"  className='flex items-center xl:gap-2 xl:text-sm font-semibold relative pr-1 py-2 after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300'>
                                <span>Blog</span>
                                <ChevronDown size={16} className={`transition-transform mt-1 duration-200 ${isblogopen ? 'rotate-180' : ''}`} />
                            </a>

                            {/* dropdown panel */}
                            <div className={`absolute rounded-b-lg top-full md:w-[18%] xl:w-[15%] bg-black border-b border-neutral-900 py-4 px-6 z-50
                            transition-all duration-300 origin-top cubic-bezier(0.4, 0, 0.2, 1) before:absolute before:-top-6 before:h-6 before:left-0 before:right-0
                            ${isblogopen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
                            `}
                            >
                                <div className='max-w-xl mx-auto flex flex-col text-left mt-2'>
                                    <ul className='text-sm text-neutral-400 space-y-3 font-medium list-none'>
                                        <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Blog Page</a></li>
                                        <li><a href="#" className='hover:text-white duration-300 ease-out transition-colors'>Article Page</a></li>
                                    </ul>

                                </div>
                            </div>
                        </li>

                    </ul>
                    
                </div>
                <div>
                    <ul className='flex gap-4 px-4 items-center'>
                        <li className='relative'>
                            <a onClick={toggleuser} className=' xl:bg-white text-white xl:text-black xl:p-2 xl:rounded-full xl:h-10 xl:w-10 flex items-center justify-center cursor-pointer  xl:hover:bg-neutral-200 xl:hover:text-white duration-300 ease-out transition'>
                                <User size={24} className="md:text-white text-neutral-400 xl:text-black "/>
                                
                            </a>
                            <div className={`w-40 absolute z-50 bg-white text-black text-md rounded-b flex-col text-left px-4 right-0 mt-3.5 overflow-hidden flex transition-all duration-300 ease-in-out origin-top
                                    ${isuseropen 
                                        ? 'max-h-48 opacity-100 translate-y-0 pointer-events-auto' 
                                        : 'max-h-0 opacity-0 -translate-y-1 pointer-events-none'
                                    }
                                `}>
                                        <a href="#" className='py-1'>Login</a>
                                        <a href="#" className='py-1'>Create Account</a>
                                        <a href="#" className='py-1'>Wishlist</a>
                                        <a href="#" className='py-1'>Compare</a>
                            </div>
                                
                        </li>
                        <li className='xl:border-white xl:border xl:px-4 xl:py-2 xl:rounded-full h-10 flex items-center justify-center hover:bg-neutral-900 transition cursor-pointer'>
                            <a onClick={() => openCart()} className='flex justify-between gap-4'>
                                <ShoppingCart size={24} className="md:text-white text-neutral-400 xl:text-white " />
                                <span className='hidden xl:flex'>$ {getTotalPrice()}</span>
                            </a>
                        </li>
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)} 
                            className="md:hidden flex items-center text-white focus:outline-none p-1"
                        >
                            <Menu size={24} />
                        </button>
                    </ul>
                </div>
            </div>

            {/* backdrop shading part  */}
            <div className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `} 
            onClick={() => setIsMobileMenuOpen(false)}  />

            {/* 3. mobile scrren header part */}
            
            <div className={`fixed top-0 right-0  bottom-0 w-[95%] bg-white text-black z-50 overflow-y-auto flex flex-col transition-transform duration-300 ease-out md:hidden
                ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* header close button */}
                    <div className='flex justify-start items-center mb-4 p-4 bg-black'>
                        <button onClick={()=> setIsMobileMenuOpen(false)} className='text-white  focus:outline-none p-1'>
                            <X size={32} />
                        </button>
                    </div>   

                    {/* toggle language and currency */}
                    <div className='flex justify-around  z-50 items-center border-b  border-black pb-4'>
                        <div className='relative' ref={langRef}>
                            <a onClick={toggleLanguage} className='flex gap-8 items-center px-6 py-1 border mx-auto rounded-full '>
                                <span className='flex items-center justify-center gap-2'>
                                <img src="/src/assets/images/headertopleft/en.svg" alt="" className="h-[14px] w-[18px]" />
                                    English
                                    </span>
                                    
                                    <span  className={`transition-transform duration-200 material-symbols-outlined ${isLangOpen ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
                            </a>
                            {isLangOpen && (
                                <div className=' border bg-white text-black flex flex-col rounded-xl mt-1 absolute w-44'>
                                    <a href="#" className=" block px-5 py-2 transition rounded-t-xl hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-start gap-2">
                                        <img src="/src/assets/images/headertopleft/en.svg" alt="" className="h-[14px] w-[18px]" />
                                        English
                                    </span></a>
                                    <a href="#" className=" block px-5 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-start gap-2">
                                        <img src="/src/assets/images/headertopleft/ar.svg" alt="" className="h-[14px] w-[18px] mr-2" />
                                    العربية
                                    </span></a>
                                    <a href="#" className=" block px-5 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-start gap-2">
                                        <img src="/src/assets/images/headertopleft/de.svg" alt="" className="h-[14px] w-[18px]" />
                                        Deutsch
                                    </span></a>
                                    <a href="#" className=" block px-5 py-2 transition rounded-b-xl hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-start gap-2">
                                        <img src="/src/assets/images/headertopleft/es.svg" alt="" className="h-[14px] w-[18px]" />
                                        Español
                                    </span></a>
                                </div>

                            )}
                        </div>
                        <div className='relative' ref={currencyRef}>
                            <a onClick={toggleCurrency} className='flex gap-8 items-center px-6 py-1 border mx-auto rounded-full '>
                                    <span className="flex items-center justify-center gap-2">
                                        <img src="/src/assets/images/headertopleft/usd.svg" alt="" className="h-[14px] w-[18px]" />
                                        USD
                                    </span>
                                    <span  className={`transition-transform duration-200 material-symbols-outlined ${isCurrencyOpen ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
                            </a>
                            {isCurrencyOpen && (
                                <div className='border bg-white text-black flex flex-col rounded-xl mt-1 absolute w-40'>
                                    <a href="#" className="block px-4 py-2 transition rounded-t-xl hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-start gap-2">
                                        <img src="/src/assets/images/headertopleft/aud.svg" alt="" className="h-[14px] w-[18px]" />
                                        <span>AUD $</span>
                                    </span></a>
                                    <a href="#" className="block px-4 py-2 transition hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-start gap-2">
                                        <img src="/src/assets/images/headertopleft/cad.svg" alt="" className="h-[14px] w-[18px]" />
                                        CAD $
                                    </span></a>
                                    <a href="#" className="block px-4 py-2 transition rounded-b-xl hover:bg-[#f3f0ee]">
                                        <span className="flex items-center justify-start gap-2">
                                        <img src="/src/assets/images/headertopleft/usd.svg" alt="" className="h-[14px] w-[18px]" />
                                        USD $
                                    </span></a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* manu list parts */}
                    <div className='flex flex-col w-full text-black '>
                        
                        {/* shop all */}
                        <div className='pt-3 tracking-widest'>
                            <button onClick={() => {
                                // Toggle the Shop All menu
                                const nextShopState = !isshopopen;
                                setShopOpen(nextShopState);
                                
                                if(nextShopState){
                                    setIsmobilepage(false);
                                }
                                // If Shop All is closing, force the nested Signature Perfumes to close too
                                if (!nextShopState) {
                                    setIsPerfumesOpen(false);
                                    setUniSexOpen(false);
                                    setIsUniversal(false)
                                }

                                }} className='flex justify-between pb-2 items-center px-4 w-full'>
                                    <span>Shop All</span>
                                    {isshopopen ? (<X size={21}/>) : (<ChevronDown size={21}/>)}
                            </button>
                            
                                <div className={`grid transition-all duration-300 ease-in-out space-y-2  ${
                                    isshopopen ? 'grid-rows-[1fr] opacity-100 pb-2' : 'grid-rows-[0fr] opacity-0 pointer-events-none invisible h-0'
                                }`}>
                                    {/* signature per.. droplists */}
                                    <div className='overflow-hidden ml-2'>
                                        <button onClick={()=> {setIsPerfumesOpen(!isperfumeopen)}} className='flex justify-between tracking-widest text-sm font-bold items-center px-4 w-full'>
                                            <span>Signature Perfumes</span>
                                            {isperfumeopen ? (<Minus size={21}/>) : (<Plus size={21}/>)}
                                        </button>
                                        <div className={`grid transition-all duration-300 ease-in-out ${
                                            isperfumeopen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}>
                                            <div className="overflow-hidden">
                                                <ul className={`list-none ml-8 text-[13px] font-medium my-2 space-y-1 tracking-widest transition-transform duration-300 ease-in-out ${
                                                    isperfumeopen ? 'translate-y-0' : '-translate-y-2'
                                                }`}>
                                                    <li><a href="#">Althair Eau De Parfum</a></li>
                                                    <li><a href="#">Carlisle Eau De Parfum</a></li>
                                                    <li><a href="#">Greenley Eau De Parfum</a></li>
                                                    <li><a href="#">Herod Eau De parfum</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    </div>
                                    {/* unisex per.. droplist */}
                                    <div className='overflow-hidden ml-2'>
                                        <button onClick={()=> {setUniSexOpen(!isunisexopen)}} className='flex justify-between tracking-widest text-sm font-bold items-center px-4 w-full'>
                                            <span>Unisex Perfume</span>
                                            {isunisexopen ? (<Minus size={21} />) : (<Plus size={21} />)}
                                        </button>
                                        <div className={`grid transition-all duration-300 ease-in-out ${
                                            isunisexopen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}>
                                            <div className='overflow-hidden'>
                                                <ul className={`list-none ml-8 text-[13px] font-medium my-2 space-y-1 tracking-widest transition-transform duration-300 ease-in-out ${
                                                    isunisexopen ? 'translate-y-0' : '-translate-y-2'
                                                }`}>
                                                    <li><a href="#">Cologne Arabic Air</a></li>
                                                    <li><a href="#">Cologne Gripped Rose</a></li>
                                                    <li><a href="#">Cologne Sapphire Sea</a></li>
                                                    <li><a href="#">Cologne To The Races</a></li>
                                                    
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    {/* universal fragrances */}
                                    <div className='overflow-hidden ml-2'>
                                        <button onClick={()=> {setIsUniversal(!isuniversalopen)}} className='flex items-center justify-between px-4 text-sm  font-bold  w-full '>
                                            <span>Universal Fragrances</span>
                                            {isuniversalopen ? (<Minus size={21} />) : ( <Plus size={21} />)}
                                        </button>
                                        <div className={`grid transition-all duration-300 ease-in-out ${isuniversalopen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className='overflow-hidden'>
                                                <ul className={`list-none ml-8 text-[13px] font-medium my-2 space-y-1 tracking-widest transition-transform duration-300 ease-in-out ${
                                                    isuniversalopen ? 'translate-y-0' : '-translate-y-2'
                                                }`}>
                                                    <li><a href="#">Cassili Eau De Parfum</a></li>
                                                    <li><a href="#">Delina La Rosee Eau De Parfum</a></li>
                                                    <li><a href="#">Delina Eau De Parfum</a></li>
                                                    <li><a href="#">Pegasus Eau De Parfum</a></li>
                                                    <li><a href="#">Oriana Eau De Parfum</a></li>

                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        {/* pages */}
                        <div className='tracking-widest'>
                            <button onClick={()=>{
                                const nextpagestate = !ismobilepageopen;
                                setIsmobilepage(nextpagestate);
                                
                                // If we are opening Pages, forcefully close Shop All and all its children
                                if (nextpagestate) {
                                    setShopOpen(false);
                                    setIsPerfumesOpen(false);
                                    setUniSexOpen(false);
                                    setIsUniversal(false);
                                }
                            }} className='flex w-full justify-between px-4 items-center '>
                                <span>Pages</span>
                                {ismobilepageopen ? (<X size={21} />) : (<ChevronDown size={21} />)}
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${
                                ismobilepageopen ? 'grid-rows-[1fr] opacity-100 pointer-events-auto' : 'grid-rows-[1fr] opacity-0 pointer-events-none invisible h-0'
                            }`}>
                                <div className='overflow-hidden ml-2'>
                                    <ul className={`list-none text-sm flex flex-col my-2 w-full space-y-1 px-4 tracking-widest font-bold transition-transform duration-300 ease-in-out ${
                                        ismobilepageopen ? 'translate-y-0' : '-translate-y-2'
                                    }`}>
                                        <li><a href="#" >Contact</a></li>
                                        <li><a href="#" >About us</a></li>
                                        <li><a href="#" >Faqs</a></li>
                                        <li><a href="#" >privacy policy</a></li>
                                        <li><a href="#" >Shipping & Policy</a></li>
                                        <li><a href="#" >Terms & Conditions</a></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    
                        <div className='pt-2 ml-4 tracking-widest'>
                            <a href="#">About us</a>
                        </div>
                        <div className='pt-2 ml-4 uppercase tracking-widest'>
                            <a href="#">faqs</a>
                        </div>
                    </div>


            </div>

            {/* Cart Sidebar Overlay - Works on all screen sizes */}
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className='fixed inset-0 bg-black/50 z-40 transition-opacity duration-300'
                        onClick={() => closeCart()}
                    />
                    
                    {/* Cart Sidebar */}
                    <div className='fixed top-0 right-0 bottom-0 w-full max-w-md bg-white text-black z-50 overflow-y-auto flex flex-col transition-transform duration-300 ease-out shadow-2xl'>
                        
                        {/* Header */}
                        <div className='flex justify-between items-center mb-4 p-4 bg-black text-white sticky top-0 z-10'>
                            <h2 className='text-xl font-bold'>My Cart</h2>
                            <button 
                                onClick={() => closeCart()} 
                                className='text-white hover:bg-neutral-800 p-2 rounded transition focus:outline-none'
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        {/* Cart Items List */}
                        <div className='flex-1 overflow-y-auto px-4 py-4'>
                            {cartItems.length === 0 ? (
                                <div className='text-center py-12 text-neutral-500'>
                                    <ShoppingCart size={48} className='mx-auto mb-4 text-neutral-400' />
                                    <p className='text-lg'>Your cart is empty</p>
                                    <p className='text-sm mt-2'>Add some products to get started!</p>
                                </div>
                            ) : (
                                <div className='space-y-4'>
                                    {cartItems.map((item) => (
                                        <div key={`${item.id}-${item.weight}`} className='border border-neutral-200 rounded-lg p-3 flex gap-3 hover:shadow-md transition'>
                                            <img src={item.image} alt={item.title} className='h-20 w-20 object-cover rounded' />
                                            <div className='flex-1'>
                                                <h3 className='font-bold text-sm line-clamp-2'>{item.title}</h3>
                                                <p className='text-xs text-neutral-500 mb-1'>{item.weight}</p>
                                                <p className='font-bold text-sm text-black'>${item.price.toFixed(2)} AUD</p>
                                                <div className='flex items-center gap-1 mt-2'>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)} 
                                                        className='p-1 hover:bg-neutral-200 rounded transition'
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className='w-6 text-center text-sm font-semibold'>{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)} 
                                                        className='p-1 hover:bg-neutral-200 rounded transition'
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                    <button 
                                                        onClick={() => removeFromCart(item.id, item.weight)} 
                                                        className='ml-auto p-1 hover:bg-red-100 text-red-600 rounded transition'
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Cart Footer */}
                        {cartItems.length > 0 && (
                            <div className='border-t border-neutral-200 p-4 space-y-3 bg-neutral-50 sticky bottom-0'>
                                <div className='flex justify-between font-bold text-lg'>
                                    <span>Total:</span>
                                    <span>${getTotalPrice()} AUD</span>
                                </div>
                                <button className='w-full bg-black text-white py-3 font-bold rounded hover:bg-neutral-800 transition duration-200'>
                                    Proceed to checkout
                                </button>
                                <button 
                                    onClick={() => closeCart()} 
                                    className='w-full bg-neutral-200 text-black py-2 font-semibold rounded hover:bg-neutral-300 transition duration-200'
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
            
        </header>
    );
    }
