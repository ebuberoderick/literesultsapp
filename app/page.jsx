import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaPlay, FaTiktok } from "react-icons/fa6";
import img from "@/public/banImg.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import img2 from "@/public/bannerImg.png"

function page() {
  const d = new Date();
  return (
    <div className='select-none'>

      {/* Header */}
      <div className="bg-green-950 ">
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
            <Image src={img} className='md:w-full mx-auto relative bottom-0' alt='banner image' draggable={false} />
          </div>
        </div>
      </div>



      <div className="bg-gradient-to-b from-green-950 from-[30%] via-green-800 to-green-700 h-min-screen">
        <div className="pt-12">
          <div className="max-w-xl text-center p-4 text-white mx-auto">
            <div className="font-semibold text-xl sm:text-3xl">Lorem, ipsum dolor sit amet</div>
            <div className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti quia in modi porro minima nisi iste, fugiat deserunt corrupti voluptas? Animi est repudiandae velit necessitatibus vitae, illo reiciendis omnis.</div>
          </div>
        </div>
        <div className="max-w-7xl grid min-h-screen items-center md:grid-cols-2 gap-5 px-3 pt-20 sm:pt-28 mx-auto">
          <div className="h-full relative">
            <div className="bg-black h-[60%] w-[50%] absolute -top-9"></div>
            <div className="bg-black h-[60%] w-[50%] absolute -bottom-7 md:bottom-20 right-3"></div>
            <div className="h-[80%] w-[80%] mx-auto min-h-96 relative bg-green-500"></div>
          </div>
          <div className="space-y-3 md:space-y-7 py-16">
            <div className="font-extrabold text-white text-2xl xl:space-y-4 xl:text-5xl">
              <div className="">Who are we</div>
              <div className="">and What do we Do</div>
            </div>
            <div className="max-w-lg text-xs md:text-sm text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, non nisi? Officia architecto magni beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, non nisi? Officia architecto magni beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
            </div>
            <div className="max-w-lg text-xs md:text-sm text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, non nisi? Officia architecto magni beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
              beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
            </div>
            <div className="max-w-lg text-xs md:text-sm text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, non nisi? Officia architecto magni beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
            </div>
            <div className="">
              <div className="flex gap-4">
                <div className="bg-green-500 rounded-full cursor-pointer py-4 px-9 text-white font-bold">Learn More About Us</div>
                <div className="w-14 h-14 flex justify-center cursor-pointer items-center rounded-full border border-green-500 text-green-500"><FaPlay /></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-24">

        <div className="pt-12">
          <div className="max-w-xl text-center p-4 mx-auto">
            <div className="font-semibold text-xl text-green-700 sm:text-3xl">Our Instructors</div>
            <div className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti quia in modi porro minima nisi iste, fugiat deserunt corrupti voluptas? Animi est repudiandae velit necessitatibus vitae, illo reiciendis omnis.</div>
          </div>
        </div>
        <div className="grid justify-center md:grid-cols-3 max-w-5xl gap-5 mx-auto">
          <div class="group cursor-pointer overflow-hidden relative h-96 block">
            <div class="h-full w-full flex flex-col bg-gray-100">
              <div class="flex-grow"></div>
              <div class="bg-white z-30 p-4">
                <div class="text-2xl font-bold hover:text-green-800">Anna naomi</div>
                <div class="text-sm text-gray-400">Project manager</div>
              </div>
            </div>
            <div
              class="p-5 h-full gap-3 flex top-full group-hover: items-center justify-center w-full group-hover:top-0 group-hover:bg-opacity-30 right-0 transition-all duration-300 absolute group-hover:bg-green-800">
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaInstagram />
              </div>
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div class="group cursor-pointer overflow-hidden relative h-96 block">
            <div class="h-full w-full flex flex-col bg-gray-100">
              <div class="flex-grow"></div>
              <div class="bg-white z-30 p-4">
                <div class="text-2xl font-bold hover:text-green-800">Anna naomi</div>
                <div class="text-sm text-gray-400">Project manager</div>
              </div>
            </div>
            <div
              class="p-5 h-full gap-3 flex top-full group-hover: items-center justify-center w-full group-hover:top-0 group-hover:bg-opacity-30 right-0 transition-all duration-300 absolute group-hover:bg-green-800">
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaInstagram />
              </div>
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div class="group cursor-pointer overflow-hidden relative h-96 block">
            <div class="h-full w-full flex flex-col bg-gray-100">
              <div class="flex-grow"></div>
              <div class="bg-white z-30 p-4">
                <div class="text-2xl font-bold hover:text-green-800">Anna naomi</div>
                <div class="text-sm text-gray-400">Project manager</div>
              </div>
            </div>
            <div
              class="p-5 h-full gap-3 flex top-full group-hover: items-center justify-center w-full group-hover:top-0 group-hover:bg-opacity-30 right-0 transition-all duration-300 absolute group-hover:bg-green-800">
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaInstagram />
              </div>
              <div
                class="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="lg:h-96 bg-green-800 rounded-2xl relative overflow-hidden lg:overflow-visible">
          <div className="h-full w-full p-4 flex items-center justify-center lg:justify-end rounded-2xl lg:relative overflow-hidden bg-green-800">
            <div className="z-10 space-y-4 max-w-lg text-center lg:text-right">
              <div className="text-3xl font-bold text-white">Lorem ipsum dolor sit.</div>
              <div className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni adipisci ipsum nisi id veritatis repellendus, quos iureae tenetur quisquam sunt iusto explicabo recusandae.
              </div>
              <div className="bg-green-500 rounded-full inline-block cursor-pointer py-4 px-9 text-white font-bold">Rigster for a course</div>
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

export default page