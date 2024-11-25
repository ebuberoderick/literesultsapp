"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import logo from "@/public/logo.png"
import Image from 'next/image';


function Navbar() {
    const [openNav, updateSideNav] = useState(false)
    return (
        <div>
            <div className="fixed z-50 px-3 py-2 sm:py-5 w-screen bg-white backdrop-blur-xl bg-opacity-5">
                <div className="bg-gray-50 bg-opacity-70 items-center flex rounded-lg max-w-3xl py-3 px-4 sm:pr-8 z-50 mx-auto">
                    <div className="">
                        <Link href="/" draggable={false}>
                            <Image draggable={false} src={logo} className="h-10 w-24" alt="" />
                        </Link>
                    </div>
                    <div className={`${!openNav && "hidden"} fixed bg-white backdrop-blur-xl bg-opacity-5 h-screen w-screen p-5 sm:p-0 flex sm:block items-center justify-center top-0 right-0 sm:h-auto sm:w-auto sm:relative flex-grow`}>
                        <div className="sm:flex space-y-4 sm:space-y-0 w-full rounded-xl p-4 sm:p-0 shadow-2xl sm:shadow-none bg-white sm:bg-transparent items-center">
                            <div className="flex-grow sm:flex justify-center">
                                <div onClick={() => updateSideNav(false)} className="px-4 py-2"><a href="#about">About</a></div>
                                <div onClick={() => updateSideNav(false)} className="px-4 py-2"><a href="#testimonials">Testimonials</a></div>
                            </div>
                            <div className="">
                                <div>
                                    <Link href="/courses">
                                        <div className="bg-green-700 rounded-full inline-block cursor-pointer py-3 px-9 text-white font-bold">Register for a course</div>
                                    </Link>
                                </div>
                            </div>
                            <div onClick={() => updateSideNav(false)} className="text-lg sm:hidden text-center py-3 hover:bg-gray-50 rounded-xl cursor-pointer">Close</div>
                        </div>
                    </div>
                    <div className="flex-grow flex justify-end sm:hidden">
                        <div onClick={() => updateSideNav(true)} className=" w-8 h-8 bg-white rounded-md cursor-pointer flex items-center justify-center"><CiMenuFries /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar