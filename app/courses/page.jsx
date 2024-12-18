"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Modal from '../components/Modal';
import Image from 'next/image';
import UseFormHandler from '../useFormHandler';
import AppInput from '../components/AppInput';
import { savedata } from '../services/authService';
import { useRouter } from 'next/navigation';

function Page() {

    const router = useRouter()
    const [courseList, setCourseList] = useState([])
    const [updData, setUpdateData] = useState({})
    const [pt, setPT] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchcourses = async () => {
        await axios.get('https://skillapp.literesults.net/api/fetch_courses')
            .then(function (response) {
                setLoading(false)
                setCourseList(response.data.data[0]);
            })
    }

    useEffect(() => {
        fetchcourses()
    }, [])


    const reset = () => {
        setPT("")
        formdata.value.course_id = ""
        formdata.value.name = ""
        formdata.value.phone = ""
        formdata.value.email = ""
        formdata.value.amount = ""
        formdata.value.amount_paid = ""
        formdata.value.amount_balance = ""
        formdata.value.discount = ""
        formdata.value.class_type = ""
        formdata.value.payment_type = ""
    }

    const formdata = UseFormHandler({
        required: {
            name: 'Please Enter Fullname',
            phone: 'Please Enter Phone',
            email: 'Please Enter Email',
            class_type: 'Please Choose learning place',
            payment_type: 'Please Select Payment Plan',
        },
        initialValues: {
            course_id: '',
            name: '',
            phone: '',
            email: '',
            amount: '',
            amount_paid: '',
            amount_balance: '',
            discount: '',
            class_type: '',
            payment_type: '',
        },

        OnSubmit: async (value) => {
            value.course_id = updData.id
            value.amount = (((updData.price - ((updData?.price * updData.discount) / 100)) * (pt === "half" ? 70 : 100) / 100))
            value.amount_course = updData.price
            value.amount_paid = (((updData.price - ((updData?.price * updData.discount) / 100)) * (pt === "half" ? 70 : 100) / 100))
            value.amount_balance = (updData.price - ((updData?.price * updData.discount) / 100)) - (((updData.price - ((updData?.price * updData.discount) / 100)) * (pt === "half" ? 70 : 100) / 100))
            value.discount = updData.discount
            const { data, status } = await savedata(value).catch(err => { console.log(err); formdata.setProccessing(false) })
            if (status) {
                router.replace(data.data.data.authorization_url)
            }
        }
    })




    return (
        <div className='select-none scroll-smooth'>
            <Navbar />
            <div className="bg-green-800 py-14 pt-36">
                <div className="max-w-7xl grid items-center md:grid-cols-2 gap-5 px-3 mx-auto">
                    <div className="h-full relative">
                        <div className="h-[80%] w-[80%] mx-auto min-h-96 relative grid grid-cols-2 gap-5">
                            <div className="bg-green-700 gallery1 rounded-t-full h-48 rounded-bl-full"></div>
                            <div className="bg-green-700 gallery2 h-full row-span-2 rounded-full"></div>
                            <div className="bg-green-700 gallery3 rounded-b-full rounded-tr-full h-48"></div>
                        </div>
                    </div>
                    <div className="space-y-3 md:space-y-7">
                        <div className="max-w-md text-2xl xl:space-y-4 xl:text-5xl">
                            <div className="text-white">Learn, Grow, Succeed</div>
                        </div>
                        <div className="max-w-md text-xs md:text-sm text-white">
                            Take the first step towards your dream career with our expertly designed courses. At Literesults, we make learning accessible, practical, and impactful, so you can achieve your goals with confidence.
                        </div>
                        <div className="max-w-lg grid-cols-3 grid gap-7">
                            <div className="bg-white p-4 rounded-lg">
                                <div className="text-2xl sm:text-4xl">100+</div>
                                <div className="text-xs sm:text-base">Students</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="text-2xl sm:text-4xl">10+</div>
                                <div className="text-xs sm:text-base">Instructors</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="text-2xl sm:text-4xl">13+</div>
                                <div className="text-xs sm:text-base">Courses</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-12">
                <div className="max-w-xl text-center p-4 mx-auto">
                    <div className="font-semibold text-xl sm:text-3xl">Our Courses</div>
                    <div className="text-xs sm:text-base"> Literesults provides a wide variety of professionally created courses that are suited to learners at any level of their technological journey.</div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-4 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">




                {
                    loading && (
                        ["", "", "", "", "", ""].map((_, i) => (
                            <div key={i} className="border relative border-gray-50 space-y-3 hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg p-3">
                                <div className="h-52 rounded-lg bg-gray-200 preload"></div>
                                <div className=" space-y-4">
                                    <div className="text-center space-y-2">
                                        <div className="py-4 preload w-1/2 mx-auto"></div>
                                        <div className="space-y-1">
                                            <div className="py-2 preload h-3/4"></div>
                                            <div className="py-2 preload w-4/5 mx-auto"></div>
                                            <div className="py-2 preload w-1/2 mx-auto"></div>
                                        </div>
                                    </div>
                                    <div className=" space-y-3">
                                        <div className="space-y-3">
                                            <div className="flex gap-2">
                                                <div className="py-2 preload w-20"></div>
                                                <div className="py-2 preload w-32"></div>
                                            </div>
                                            <div className="py-2 preload w-72"></div>
                                            <div className="py-2 preload w-56"></div>
                                        </div>
                                        <div className="space-x-3 relative py-4 preload w-32"></div>
                                    </div>
                                    <div className="bg-green-800 rounded-full text-center cursor-pointer py-7 px-9 preload text-white font-bold"></div>
                                </div>
                            </div>
                        ))
                    )
                }




                {
                    courseList.map((data, i) => (
                        <div key={i} className="border relative border-gray-50 space-y-3 hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg p-3">
                            <div className="h-52 rounded-lg bg-gray-200">
                                <Image alt={data.title} src={data.image} width={100} height={100} className='h-full w-full' />
                            </div>
                            {data?.discount > 0 && <div className="absolute right-0 -top-3 bg-red-500 px-5 py-1 rounded-bl-xl text-xs text-white">{data.discount}%</div>}
                            <div className=" space-y-4">
                                <div className="text-center">
                                    <div className="font-bold text-xl">{data.title}</div>
                                    <div className="text-sm">{data.description}</div>
                                </div>
                                <div className=" space-y-3">
                                    <ul className="list-disc list-inside ">
                                        <li><span className='font-bold'>Duration :</span> {data.duration} months</li>
                                        <li>Certificate on Completion</li>
                                        <li>Free mentorship</li>
                                    </ul>
                                    <div className="space-x-3 relative">
                                        <span className='font-bold text-3xl'>&#8358;{Number(data.price - ((data?.price * data.discount) / 100)).toLocaleString("en-US")}</span>
                                        {
                                            data?.discount > 0 && <s className='text-xl text-gray-400'>&#8358;{Number(data?.price).toLocaleString("en-US")}</s>
                                        }
                                    </div>
                                </div>
                                <div onClick={() => setUpdateData(data)} className="bg-green-800 rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold">Register now</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Modal size={"md"} closeModal={() => { setUpdateData({}); reset() }} isOpen={Object.keys(updData).length > 0}>
                <div className="space-y-4">
                    <div className="">
                        <div className="text-xl font-bold">{updData.title}</div>
                    </div>
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
                    <div className="">
                        <div className="">Prefered Learning Location</div>
                        <div className="flex gap-3">
                            <AppInput onChange={() => formdata.value.class_type = "online"} type="radio" name="type" label="Online" required />
                            <AppInput onChange={() => formdata.value.class_type = "physical"} type="radio" name="type" label="Physical" required />
                        </div>
                        <div className="text-xs text-red-600">{formdata?.error?.class_type}</div>
                    </div>
                    <div className="">
                        <div className="">Payment Plan</div>
                        <div className="flex gap-3">
                            <AppInput onChange={() => { formdata.value.payment_type = "full"; setPT("full") }} type="radio" name="payment" label="Full" required />
                            <AppInput onChange={() => { formdata.value.payment_type = "half"; setPT("half") }} type="radio" name="payment" label="partial" required />
                        </div>
                        <div className="text-xs text-red-600">{formdata?.error?.payment_type}</div>
                    </div>
                    {
                        pt !== "" && (
                            <div className="">
                                <div className="">Amount To Pay</div>
                                <div className="text-xl font-bold">&#8358;{Number(((updData.price - ((updData?.price * updData.discount) / 100)) * (pt === "half" ? 70 : 100) / 100)).toLocaleString("en-US")} {pt === "half" && <span className='text-[8px] bg-red-600 px-3 relative bottom-1 py-1 text-white rounded-full'>70%</span>}</div>
                            </div>
                        )
                    }
                    <div onClick={() => !formdata.proccessing && formdata.submit()} className={`${formdata.proccessing ? "bg-gray-300" : "bg-green-800"} rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold`}>Pay now</div>
                </div>
            </Modal>
            <Footer />
        </div>
    )
}

export default Page