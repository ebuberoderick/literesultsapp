import React from 'react'
import Image from 'next/image'
import { IoMailUnreadOutline } from "react-icons/io5";
import img2 from "@/public/bannerImg.png"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import Link from 'next/link';


function Footer() {
    const d = new Date();
    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 px-4">
                <div className="lg:h-96 bg-green-800 rounded-2xl relative overflow-hidden lg:overflow-visible">
                    <div className="h-full w-full p-4 flex items-center justify-center lg:justify-end rounded-2xl lg:relative overflow-hidden bg-green-800">
                        <div className="z-10 space-y-4 max-w-lg text-center lg:text-right">
                            <div className="text-3xl font-bold text-white">Lorem ipsum dolor sit.</div>
                            <div className="text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni adipisci ipsum nisi id veritatis repellendus, quos iureae tenetur quisquam sunt iusto explicabo recusandae.
                            </div>
                            <div>
                                <Link href="/courses">
                                    <div className="bg-green-500 rounded-full inline-block cursor-pointer py-4 px-9 text-white font-bold">Rigster for a course</div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-[300%] bg-green-800 rounded-full absolute top-0 left-[50%] z-0 shadow-2xl shadow-green-400"></div>
                    </div>
                    <Image src={img2} className='mx-auto lg:absolute z-20 relative -bottom-2 lg:-bottom-20' alt='banner image' draggable={false} />
                </div>
            </div>


            <div className="max-w-7xl space-y-7 mx-auto py-12 px-3">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="">
                        <div className="font-semibold sm:text-lg">Business types</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                            <div className="hover:text-green-600 cursor-pointer">Grocery & convenience</div>
                            <div className="hover:text-green-600 cursor-pointer">Café</div>
                            <div className="hover:text-green-600 cursor-pointer">Restaurant</div>
                            <div className="hover:text-green-600 cursor-pointer">Retail</div>
                            <div className="hover:text-green-600 cursor-pointer">Bar & Pub</div>
                            <div className="hover:text-green-600 cursor-pointer">Clothing & accessories</div>
                            <div className="hover:text-green-600 cursor-pointer">Small Business</div>
                            <div className="hover:text-green-600 cursor-pointer">Small Business POS</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="font-semibold sm:text-lg">Courses</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                            <div className="hover:text-green-600 cursor-pointer">Loyalty Program</div>
                            <div className="hover:text-green-600 cursor-pointer">Accept Credit Cards</div>
                            <div className="hover:text-green-600 cursor-pointer">Smartpay</div>
                            <div className="hover:text-green-600 cursor-pointer">SumUp</div>
                            <div className="hover:text-green-600 cursor-pointer">Tyro</div>
                            <div className="hover:text-green-600 cursor-pointer">Zettle</div>
                            <div className="hover:text-green-600 cursor-pointer">Yoco</div>
                            <div className="hover:text-green-600 cursor-pointer">Literesults API</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="font-semibold sm:text-lg">Other Services</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                            <div className="hover:text-green-600 cursor-pointer">Literesults POS</div>
                            <div className="hover:text-green-600 cursor-pointer">Back Office</div>
                            <div className="hover:text-green-600 cursor-pointer">POS Dashboard</div>
                            <div className="hover:text-green-600 cursor-pointer">Kitchen Display</div>
                            <div className="hover:text-green-600 cursor-pointer">Customer Display</div>
                            <div className="hover:text-green-600 cursor-pointer">Employee Management</div>
                            <div className="hover:text-green-600 cursor-pointer">Multi-store Management</div>
                            <div className="hover:text-green-600 cursor-pointer">Inventory Management</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="font-semibold sm:text-lg">Literesults</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                            <div className="hover:text-green-600 cursor-pointer">About</div>
                            <div className="hover:text-green-600 cursor-pointer">Community</div>
                            <div className="hover:text-green-600 cursor-pointer">Blog</div>
                            <div className="">
                                <div className=""> &copy; {d.getFullYear()} Literesults</div>
                                <div className="">Cavius International Limited</div>
                                <div className="">Archiepiskopou Leontiou A, 187, 4th floor</div>
                                <div className="">Port-Harcourt, 3020, Nigeria</div>
                            </div>
                            <div className="flex gap-3 pt-3">
                                <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-500 rounded-full"><FaFacebookF /></div>
                                <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-500 rounded-full"><FaTiktok /></div>
                                <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-500 rounded-full"><FaInstagram /></div>
                                <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-500 rounded-full"><IoMailUnreadOutline /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer