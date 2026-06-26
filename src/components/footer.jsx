

export default function Footer(){
    return(
        <div className="bg-black text-white pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-4 mb-16  ">
                    {/* col 1 */}
                    <div className="flex flex-col md:col-span-3 xl:col-span-3">
                        <div className="h-20 flex items-center">
                            <img src="/src/assets/images/headertopleft/sprays_-2_100x.png" alt="" className="max-h-16 w-auto invert brightness-0 object-contain"/>
                        </div>
                        <p className="xl:text-[15px] md:text-md font-medium leading-relaxed text-gray-100">Precision sprayers ensure targeted application, minimizing environmental impact while maximizing crop yield and health. Furthermore, irrigation systems utilize sprays to distribute water efficiently.</p>
                    </div>
                    {/* col 2 */}
                    <div className="flex flex-col mt-4 md:col-span-2 xl:col-span-2">
                        <h3 className="text-xl font-semibold tracking-wider">Navigation :</h3>
                        <ul className="flex flex-col gap-2 pt-2 ">
                            <li>
                                <a href="#" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Catalog</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* col 3 */}
                    <div className="flex flex-col mt-4 md:col-span-2 xl:col-span-2">
                        <h3 className="text-xl traking-wider font-semibold">About us :</h3>
                        <ul className="flex flex-col gap-2 pt-2">
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">About us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Faqs</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">privacy policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">shipping & policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms & Condition</a>
                            </li>
                        </ul>
                    </div>
                    {/* col 4 */}
                    <div className="flex flex-col md:items-end mt-4 md:col-span-1 xl:col-span-1">
                        <h3 className="text-xl tracking-wider font-semibold xl:text-right">Share :</h3>
                        <ul className="flex gap-2 mt-4">
                            <li>
                                <a href="#" className="hover:bg-white hover:text-black p-1 rounded-full border "><i class="fa-brands fa-youtube" ></i></a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-white hover:text-black p-1 rounded-full border "><i class="fa-brands fa-instagram" ></i></a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-white hover:text-black p-1 rounded-full border "><i class="fa-brands fa-facebook-messenger"></i></a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-white hover:text-black p-1 rounded-full border "><i class="fa-brands fa-x-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:flex sm:justify-between flex-row sm:items-center text-sm font-medium">
                    <div className="mt-4">
                        <span>© 2026, Sprays WorkDo, Powered by WorkDo.io</span>
                    </div>

                    <div className="pt-4">
                        <ul className="flex items-center gap-2 text-3xl">
                            {/* Visa */}
                            <li className="bg-white rounded-sm flex items-center justify-center">
                                <i className="fa-brands fa-cc-visa text-[#1A1F71]"></i>
                            </li>
                            
                            {/* Mastercard */}
                            <li className="bg-white  rounded-sm flex items-center justify-center">
                                <i className="fa-brands fa-cc-mastercard text-[#EB001B]"></i>
                            </li>
                            
                            {/* Amex */}
                            <li className="bg-white rounded-sm flex items-center justify-center">
                                <i className="fa-brands fa-cc-amex text-[#016FD0]"></i>
                            </li>
                            
                            {/* PayPal - Custom padding because the logo shape is different */}
                            <li className="bg-white  rounded-sm flex items-center justify-center">
                                <i className="fa-brands fa-paypal text-[#003087]"></i>
                            </li>
                            
                            {/* Diners Club */}
                            <li className="bg-white  rounded-sm flex items-center justify-center">
                                <i className="fa-brands fa-cc-diners-club text-[#0079C1]"></i>
                            </li>
                            
                            {/* Discover */}
                            <li className="bg-white  rounded-sm flex items-center justify-center">
                                <i className="fa-brands fa-cc-discover text-[#F4A200]"></i>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}