import React from 'react'
import Footer from '../components/Footer'

function Page() {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-4 py-24 grid grid-cols-3 gap-5">
                <div className="border border-gray-50 space-y-3 rounded-lg p-3">
                    <div className="h-52 rounded-lg bg-gray-200"></div>
                    <div className=" space-y-4">
                        <div className="text-center">
                            <div className="font-bold text-xl">Web Development</div>
                            <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, autem magni. Doloremque, provident! Aperiam at veritatis, </div>
                        </div>
                        <div className="">
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
                        <div className="bg-green-800 rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold">Rigster now</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page