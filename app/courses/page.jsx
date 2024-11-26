"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Modal from '../components/Modal';

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
                            <div className="text-white">Lorem ipsum dolor sit amet.</div>
                        </div>
                        <div className="max-w-md text-xs md:text-sm text-white">
                            Emphasize unique aspects like expert instructors, real-world projects, and career support. optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
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
                    <div className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti quia in modi porro minima nisi iste, fugiat deserunt corrupti voluptas? Animi est repudiandae velit necessitatibus vitae, illo reiciendis omnis.</div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-4 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    courseList.map((_, i) => (
                        <div key={i} className="border border-gray-50 space-y-3 hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg p-3">
                            <div className="h-52 rounded-lg bg-gray-200"></div>
                            <div className=" space-y-4">
                                <div className="text-center">
                                    <div className="font-bold text-xl">Web Development</div>
                                    <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, autem magni. Doloremque, provident! Aperiam at veritatis, </div>
                                </div>
                                <div className=" space-y-3">
                                    <ul className="list-disc list-inside ">
                                        <li>Html</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>Jquery</li>
                                        <li>Tailwind Css</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                    <div className="space-x-3">
                                        <span className='font-bold text-3xl'>&#8358;70,000</span>
                                        <s className='text-xl text-gray-400'>&#8358;100,000</s>
                                    </div>
                                </div>
                                <div onClick={() => setUpdateData({ amount: 3000 })} className="bg-green-800 rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold">Register now</div>
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