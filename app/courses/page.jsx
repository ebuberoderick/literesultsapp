"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Modal from '../components/Modal';
import Image from 'next/image';
import UseFormHandler from '../useFormHandler';
import AppInput from '../components/AppInput';
import { PaystackButton, usePaystackPayment } from 'react-paystack';

function Page() {

    // const initializePayment = usePaystackPayment()
    const [courseList, setCourseList] = useState([])
    const [updData, setUpdateData] = useState({})
    const [pt, setPT] = useState("")

    const fetchcourses = async () => {
        await axios.get('https://skillapp.literesults.net/api/fetch_courses')
            .then(function (response) {
                setCourseList(response.data.data[0]);
            })
    }


    const componentProps = {
        email:"ebuberoderick.code@gmail.com",
        amount:1000,
        metadata: {
            name:"ebube roderick",
            phone:"08130075358",
        },
        publicKey: 'pk_test_8a31e17376bd9b0413098cffc7b5a0475a0cf0cc',
        text: "Pay Now",
        onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
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

        OnSubmit: (value) => {
            value.course_id = updData.id
            value.amount = updData.price
            value.amount_paid = (updData.price - ((updData?.price * updData.discount) / 100)) / (pt === "half" ? 2 : 1)
            value.amount_balance = (updData.price - ((updData?.price * updData.discount) / 100)) - (updData.price - ((updData?.price * updData.discount) / 100)) / (pt === "half" ? 2 : 1)
            value.discount = updData.discount

            // if (typeof window !== "undefined") {
            //     const config = {
            //         reference: "LRS" + (new Date()).getTime().toString(),
            //         email: value.email,
            //         publicKey: 'pk_test_8a31e17376bd9b0413098cffc7b5a0475a0cf0cc',
            //     };

            //     initializePayment({
            //         onSuccess: async () => {
            //             axios.post('https://skillapp.literesults.net/api/save_course_order', value)
            //                 .then(function (response) {
            //                     console.log(response);
            //                 })
            //                 .catch(function (error) {
            //                     console.log(error);
            //                 });
            //         },
            //         onClose: () => {
            //             console.log("Your payment was unsuccessful, try again later!");
            //         },
            //         config: {
            //             ...config,
            //             amount: ((updData.price - ((updData?.price * updData.discount) / 100)) / (pt === "half" ? 2 : 1)) * 100,
            //         }
            //     })
            // }
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
                                <div className="text-2xl sm:text-4xl">300+</div>
                                <div className="text-xs sm:text-base">Students</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="text-2xl sm:text-4xl">10+</div>
                                <div className="text-xs sm:text-base">Instructors</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="text-2xl sm:text-4xl">8+</div>
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
                                        <li>Certificate on Completion</li>
                                        <li>Life time mentorship</li>
                                    </ul>
                                    <div className="space-x-3 relative">
                                        <span className='font-bold text-3xl'>&#8358;{Number(data.price - ((data?.price * data.discount) / 100)).toLocaleString("en-US")}</span>
                                        {
                                            data?.discount > 0 && <s className='text-xl text-gray-400'>&#8358;{Number(data?.price).toLocaleString("en-US")}</s>
                                        }
                                        <div className="absolute right-3 top-2 bg-green-800 bg-opacity-15 px-5 py-1 rounded-full text-xs text-green-700">{data.duration} months</div>
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
                            <AppInput onChange={() => { formdata.value.payment_type = "half"; setPT("half") }} type="radio" name="payment" label="Half" required />
                        </div>
                        <div className="text-xs text-red-600">{formdata?.error?.payment_type}</div>
                    </div>
                    {
                        pt !== "" && (
                            <div className="">
                                <div className="">Amount To Pay</div>
                                <div className="text-xl font-bold">&#8358;{Number((updData.price - ((updData?.price * updData.discount) / 100)) / (pt === "half" ? 2 : 1)).toLocaleString("en-US")}</div>
                            </div>
                        )
                    }
                    <PaystackButton {...componentProps} />
                    <div onClick={() => formdata.submit()} className="bg-green-800 rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold">Pay now</div>
                </div>
            </Modal>
            <Footer />
        </div>
    )
}

export default Page