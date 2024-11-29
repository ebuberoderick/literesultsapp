import React from 'react'
import Image from 'next/image'
import literesults_logo from "@/public/literesults_logo.png"
import images from "@/public/images.jpg"
import { IoMailUnreadOutline } from "react-icons/io5";
import img2 from "@/public/bannerImg.png"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import Link from 'next/link';
import UseFormHandler from '../useFormHandler';
import AppInput from './AppInput';


function Footer() {
    const d = new Date();


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
                Cookies.set('liteApp', value.email)
                updatexV(false)
            } else {
                console.log(data);
                let error = {}
                for (const key in data.data) {
                    error = { [key]: `${data.data[key][0]}` }
                }
                formdata.setError((prevState) => error)
                if (data.message.split(" ")[0] === "Email") {
                    formdata.setError((prevState) => ({ ...prevState, email: "Invalid email address" }))
                }
            }
        }
    })


    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 px-4">
                <div className="lg:h-96 bg-green-800 rounded-2xl relative overflow-hidden lg:overflow-visible">
                    <div className="h-full w-full p-4 flex items-center justify-center lg:justify-end rounded-2xl lg:relative overflow-hidden bg-green-800">
                        <div className="z-10 space-y-4 max-w-lg text-center lg:text-right">
                            <div className="text-3xl font-bold text-white">Your Success, Our Mission</div>
                            <div className="text-white">
                                At Literesults, your growth is our priority. We are dedicated to equipping you with the skills, confidence, and opportunities to thrive in your career and achieve your goals.
                            </div>
                            <div>
                                <Link href="/courses">
                                    <div className="bg-green-500 rounded-full inline-block cursor-pointer py-4 px-9 text-white font-bold">Register for a course</div>
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
                        <div className="font-semibold sm:text-lg">Stay Connected</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                            <div className='space-y-2'>
                                <div>subscribe to enjoy more benefits</div>
                                <div className=''>
                                    <div className='flex w-full items-center gap-5'>
                                        <div className='-space-x-4'>
                                            <div className='w-10 h-10 overflow-hidden inline-block bg-gray-100 rounded-full'>
                                                <Image draggable={false} src={literesults_logo} className="h-10 w-24" alt="" />
                                            </div>
                                            <div className='w-10 h-10 overflow-hidden inline-block bg-gray-200 bg-opacity-50 rounded-full'>
                                                <Image draggable={false} src={images} className="h-10 w-24" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-xs text-gray-400'>Official Partners of Google Devfest Port Harcourt</div>
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
                        </div>
                    </div>
                    <div className="">
                        <div className="font-semibold sm:text-lg">Courses</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                            <div><Link href="/courses" className="hover:text-green-600 cursor-pointer"><div>Web Development</div></Link></div>
                            <div><Link href="/courses" className="hover:text-green-600 cursor-pointer"><div>Mobile Development</div></Link></div>
                            <div><Link href="/courses" className="hover:text-green-600 cursor-pointer"><div>Digital Marketing</div></Link></div>
                            <div><Link href="/courses" className="hover:text-green-600 cursor-pointer"><div>UI/UX Design</div></Link></div>
                            <div><Link href="/courses" className="hover:text-green-600 cursor-pointer"><div>Cyber Security</div></Link></div>
                            <div><Link href="/courses" className="hover:text-green-600 cursor-pointer"><div>Project Management</div></Link></div>
                        </div>
                    </div>
                    <div className="">
                        <div className="font-semibold sm:text-lg">Other Services</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                            <div className="hover:text-green-600 cursor-pointer">Computer Tranings </div>
                            <div className="hover:text-green-600 cursor-pointer">IT consultant</div>
                            <div className="hover:text-green-600 cursor-pointer">Web/App Development</div>
                            <div className="hover:text-green-600 cursor-pointer">Digital Marketing</div>
                            <div className="hover:text-green-600 cursor-pointer">UI/UX Design</div>
                            <div className="hover:text-green-600 cursor-pointer">Cyber Security</div>
                            <div className="hover:text-green-600 cursor-pointer">Project Management</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="font-semibold sm:text-lg">Literesults</div>
                        <div className="text-xs sm:text-sm text-gray-400 space-y-1">
                            <div>
                                <Link href="/#about">
                                    <div className="hover:text-green-600 cursor-pointer">About</div>
                                </Link>
                            </div>
                            <div>
                                <Link href="/#testimonials">
                                    <div className="hover:text-green-600 cursor-pointer">Testimonials</div>
                                </Link>
                            </div>
                            <div className="">
                                {/* <div className=""> &copy; {d.getFullYear()} Literesults</div> */}
                                <div className="">141 East-West Rd, Nkpolu, Opposite D&apos;General,</div>
                                <div className=""></div>
                                <div className="">Port Harcourt, Rivers State</div>
                            </div>
                            <div className="hover:text-green-600 cursor-pointer">info@literesults.com</div>
                            <div className="hover:text-green-600 cursor-pointer">+234 916 038 4336</div>
                            <div className="flex gap-3 pt-3">
                                <div>
                                    <Link href="https://www.facebook.com/share/t3UcXLrd1qcBcFc6/?mibextid=LQQJ4d">
                                        <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-700 rounded-full"><FaFacebookF /></div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.tiktok.com/@literesults?_r=1&_d=ehbc0ck20ag7dm&sec_uid=MS4wLjABAAAAndCFB8yoTosunlcwCFO_dLv94xzAUWGAxNCI0sI8sAX4L7QPoH0NDVjNndJ20755&share_author_id=7369556193960920069&sharer_language=en&source=h5_m&u_code=ee6cfhhb52gi7b&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAAndCFB8yoTosunlcwCFO_dLv94xzAUWGAxNCI0sI8sAX4L7QPoH0NDVjNndJ20755&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7369556193960920069&share_link_id=6162BB54-8DE8-4070-91DB-AB72DCD83387&share_app_id=1233">
                                        <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-700 rounded-full"><FaTiktok /></div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.instagram.com/literesults">
                                        <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-700 rounded-full"><FaInstagram /></div>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="info@literesults.com">
                                        <div className="w-10 cursor-pointer h-10 flex items-center justify-center text-white bg-green-700 rounded-full"><IoMailUnreadOutline /></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer