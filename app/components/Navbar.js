"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import logo from "@/public/logo.png"
import Image from 'next/image';
import Modal from './Modal';
import UseFormHandler from '../useFormHandler';
import AppInput from './AppInput';
import { subscribe } from '../services/authService';
import Cookies from 'js-cookie';


function Navbar() {
    const [openNav, updateSideNav] = useState(false)
    const [xV, updatexV] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (Cookies.get("liteApp") === "" || Cookies.get("liteApp") === undefined) {
                updatexV(true)
            }
        }, 5000);
    }, [])


    const formdata = UseFormHandler({
        required: {
            name: 'Please Enter Fullname',
            phone: 'Please Enter Phone',
            email: 'Please Enter Email',
        },
        initialValues: {
            name: '',
            phone: '',
            email: '',
        },

        OnSubmit: async (value) => {
            const { data, status } = await subscribe(value).catch(err => { console.log(err); formdata.setProccessing(false) })
            if (status) {
                console.log(data);
                Cookies.set('liteApp', value.email)
            } else {
                console.log(data);
                let error = {}
                for (const key in data.data) {
                    error = { [key]: `${data.data[key][0]}` }
                }
                formdata.setError((prevState) => error)
            }
        }
    })





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

            <Modal promt size={"sm"} isOpen={xV}>
                <div className='space-y-5'>
                    <div className='text-center'>
                        <div className='text-2xl font-bold'>Stay Connected</div>
                        <div>subscribe to enjoy more benefits</div>
                    </div>
                    <div>
                        <div className='flex w-full items-center justify-center gap-5'>
                            <div className='-space-x-8'>
                                <div className='w-24 h-24 inline-block bg-gray-100 rounded-full'></div>
                                <div className='w-24 h-24 inline-block bg-gray-200 bg-opacity-50 rounded-full'></div>
                            </div>
                        </div>
                        <div className='text-center text-xs text-gray-400'>Official Partners of Google Devfest Port Harcourt</div>
                    </div>
                    <div className='space-y-4'>
                        <div className="">
                            <AppInput onChange={(e) => formdata.value.name = e.target.value} required label='Enter Fullname' />
                            <div className="text-xs text-red-600">{formdata?.error?.name}</div>
                        </div>
                        <div className="">
                            <AppInput onChange={(e) => formdata.value.phone = e.target.value} required label='Enter phone' />
                            <div className="text-xs text-red-600">{formdata?.error?.phone}</div>
                        </div>
                        <div className="">
                            <AppInput onChange={(e) => formdata.value.email = e.target.value} required label='Enter email' />
                            <div className="text-xs text-red-600">{formdata?.error?.email}</div>
                        </div>
                    </div>
                    <div onClick={() => !formdata.proccessing && formdata.submit()} className={`${formdata.proccessing ? "bg-gray-300" : "bg-green-800"} rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold`}>subscribe</div>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar