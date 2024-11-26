"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Modal from '../components/Modal';
import Image from 'next/image';

function Page() {

    const [courseList, setCourseList] = useState([])
    const [updData, setUpdateData] = useState({})

    const fetchcourses = async () => {
        await axios.get('https://skillapp.literesults.net/api/fetch_courses')
            .then(function (response) {
                setCourseList(response.data.data[0]);
                console.log(response.data.data[0]);
            })
    }

    useEffect(() => {
        fetchcourses()
    }, [])


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
            <Modal size={"md"} closeModal={() => setUpdateData({})} isOpen={Object.keys(updData).length > 0}>
                <div onClick={() => setUpdateData({})} className="bg-green-800 rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold">Register now</div>
            </Modal>
            <Footer />
        </div>
    )
}

export default Page