import React from "react";

function Footer() {
    return (
        <>
            <div className="h-[400px] bg-slate-800 flex gap-6 justify-center text-center pt-16">
                <div className="w-[200px]">
                    <span className="text-white font-bold  flex text-left text-[17px] "> Get to Know Us</span>
                    <div>
                        <ul className="text-white text-sm mt-2 font-thin leading-8 flex flex-col text-left">
                            <li>About Us</li>
                            <li>career</li>
                            <li>Press Releases</li>
                            <li>Amazon Stories</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[200px] ">
                    <span className="text-white font-bold  flex text-left text-[17px]"> Connect with Us</span>
                    <div>
                        <ul className="text-white text-sm mt-2 font-thin leading-8 flex flex-col text-left">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[200px] ">
                    <span className="text-white font-bold  flex flex-col text-left text-[17px]"> Make Money with Us</span>
                    <div>
                        <ul className="text-white text-sm mt-2 font-thin leading-8 flex flex-col text-left">
                            <li>Sell products on Amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants</li>
                            <li>Become an Affiliate</li>
                            <li>Fulfilment by Amazon</li>
                            <li>Amazon Global Selling</li>

                        </ul>
                    </div>
                </div>
                <div className="w-[200px] ">
                    <span className="text-white font-bold  flex flex-col text-left text-[17px]"> Get to Know Us</span>
                    <div>
                        <ul className="text-white text-sm mt-2 font-thin leading-8 flex flex-col text-left">
                            <li>About Us</li>
                            <li>career</li>
                            <li>Press Releases</li>
                            <li>Amazon Stories</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="h-[180px] bg-slate-700 flex justify-center items-center  gap-6  pt-1">

                <img className=" h-[30px] mr-10  " src="./src/assets/amazonwhite.png" alt="" />
                <div className="border-2 border-white-500 h-[34px] flex">
                    <img className=" h-[30px] bg-slate-700 " src="./src/assets/globe.svg" alt="" />
                    <select className=" text-sm p-1 text-white bg-slate-900" name="language" id="">
                        <option value="">English</option>
                        <option value="">Hindi</option>
                        <option value="">Marathi</option>
                        <option value="">Bengali</option>

                    </select>
                </div>
                <div className="w-[100px] flex justify-center items-center space-x-2 border-2 border-white-500 text-white h-[34px]">
                    <img className="w-[20px]  " src="./src/assets/india.svg" alt="" />
                    <div className="text-sm"> India</div>
                </div>
            </div>

            <div className="h-[140px] bg-slate-900 flex gap-[100px] justify-center ">
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">Abebooks</li>
                    <li className="text-slate-400">Books,art</li>
                    <li className="text-slate-400">&collections</li>
                </ul>
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">
                        Amazon Web Services</li>
                    <li className="text-slate-400">
                        Scalable Cloud
                    </li>
                    <li className="text-slate-400">
                        Computing Services</li>
                </ul>
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">Audible</li>
                    <li className="text-slate-400">Download</li>
                    <li className="text-slate-400">AudioBook</li>
                </ul>
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">IMDb</li>
                    <li className="text-slate-400">Movie,TV</li>
                    <li className="text-slate-400">&celebraties</li>
                </ul>
            </div>
            <div className="h-[140px] bg-slate-900 flex gap-[100px] justify-center">
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">Prime Now</li>
                    <li className="text-slate-400">2-Hours Delivery</li>
                    <li className="text-slate-400">on Everyday Items</li>
                </ul>
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">Shopbop</li>
                    <li className="text-slate-400">Designer</li>
                    <li className="text-slate-400">Fashion Brands</li>
                </ul>
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">Amazon Business</li>
                    <li className="text-slate-400">Everything for</li>
                    <li className="text-slate-400">Your Business</li>
                </ul>
                <ul className="text-white text-sm">
                    <li className="text-white font-normal text-sm mt-2 leading-8 text-left">Amazon Prime Music</li>
                    <li className="text-slate-400">100 million songs, ad-free</li>
                    <li className="text-slate-400">Over 15 million podcast episods</li>
                </ul>
            </div>

            <div className="flex flex-col bg-slate-900 h-[100px] text-sm">
                <div className="flex justify-center gap-2 text-white text-sm">
                    <span>Condition of Use & Sale </span>
                    <span>Privacy Notice</span>
                    <span>Interest-Based Ads</span>
                </div>
                <div className="flex justify-center text-white text-sm">
                    <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </>
    )
}

export default Footer;