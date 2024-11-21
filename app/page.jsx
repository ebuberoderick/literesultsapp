import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import img from "@/public/banImg.png"

function page() {
  return (
    <div>

      {/* Header */}
      <div className="bg-green-950 select-none">
        <div className="max-w-7xl grid min-h-screen items-center md:grid-cols-2 gap-5 px-3 pt-20 sm:pt-28 mx-auto">
          <div className=" order-1 md:order-none space-y-3 md:space-y-7">
            <div className="font-extrabold text-white text-2xl xl:space-y-4 xl:text-5xl">
              <div className="">Empower your</div>
              <div className="">Tech Career With</div>
              <div className="">Lite<span className="bg-green-500 text-yellow-200">results</span> Service</div>
            </div>
            <div className="max-w-lg text-xs md:text-sm text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, non nisi? Officia architecto magni beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
            </div>
            <div className="flex gap-4">
              <div className="bg-green-500 rounded-full cursor-pointer py-4 px-9 text-white font-bold">Course List</div>
              <div className="w-14 h-14 flex justify-center cursor-pointer items-center rounded-full border border-green-500 text-green-500"><FaPlay /></div>
            </div>
            <div className="">
              <div className="inline-flex -space-x-7 hover:space-x-2 cursor-pointer">
                <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
                <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
                <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
                <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
                <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
              </div>
              <div className="text-white">Over 300+ students</div>
            </div>
          </div>
          <div className="h-full">
            <Image src={img} className='md:w-full mx-auto relative bottom-0' draggable={false} />
          </div>
        </div>
      </div>









    </div>
  )
}

export default page