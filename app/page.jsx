"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaPlay } from "react-icons/fa6";
import img from "@/public/banImg.png"
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import atlas from "@/public/Asset-2.svg"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Footer from './components/Footer';

function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "ltr", dragFree: false }, [Autoplay()])
  useEffect(() => {
    if (emblaApi) { console.log(emblaApi.slideNodes()) }
  }, [emblaApi])

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
              <div className="bg-green-500 rounded-full cursor-pointer py-4 px-9 text-white font-bold">Explore More Courses</div>
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





      <div className="pt-12">
        <div className="max-w-xl text-center p-4 mx-auto">
          <div className="font-semibold text-xl sm:text-3xl">Our Courses</div>
          <div className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti quia in modi porro minima nisi iste, fugiat deserunt corrupti voluptas? Animi est repudiandae velit necessitatibus vitae, illo reiciendis omnis.</div>
        </div>
      </div>


      <div className="max-w-7xl overflow-hidden grid items-start xl:grid-cols-3 py-12 mx-auto px-5 space-y-6 lg:space-y-12">
        <div className="space-y-6 z-40 md:space-y-24 md:space-x-3 grid md:grid-cols-2 xl:grid-cols-1 relative xl:top-16">
          <div data-aos="fade-left" className="xl:w-[276px] bg-green-300 overflow-hidden w-full relative rounded-3xl mx-auto h-[350px] gallery7">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Speed Dating</div>
              <div className="text-xs">
                Spark new connections in our fun, relaxed speed dating sessions designed to bring singles together.
              </div>
            </div>
            <div className="w-12 h-12 cursor-pointer bg-white rounded-full absolute top-5 right-5 flex items-center justify-center">
              {/* <Image draggable={false} src={heart} className="w-1/2" alt="" /> */}
            </div>
          </div>
          <div data-aos="fade-left" className="xl:w-[376px] bg-green-300 overflow-hidden w-full relative xl:left-12 rounded-3xl mx-auto h-[200px] gallery8">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Waterparks and Palmwine Spots</div>
              <div className="text-xs">
                Leisure areas for relaxation and socializing.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row xl:flex-col xl:items-end justify-center lg:gap-6">
          <div data-aos="fade-up" className="h-[200px] bg-green-300 overflow-hidden w-full xl:w-[300px] rounded-3xl gallery9">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Live Music & Entertainment</div>
              <div className="text-xs">
                Groove to the beats of top DJs, live bands, and surprise musical performances that will keep you dancing all night.
              </div>
            </div>
          </div>
          <div className="space-y-20 min-w-96 lg:pb-16 flex-grow">
            <div className="space-y-8">
              <div className="relative">
                <div className="w-8 h-8 right-[48%] top-6 rounded-full bg-[#db7140] absolute z-0"></div>
                <div className="w-8 h-8 right-[50%] top-14 rounded-full bg-[#cf6c2a] absolute z-0"></div>
                <div className="w-8 h-8 right-[40%] top-14 rounded-full bg-[#207927] absolute z-0"></div>
                <div className="w-8 h-8 right-[55%] top-14 rounded-full bg-[#f5d548] absolute z-0"></div>
                <div className="relative py-10 bg-white backdrop-blur-lg bg-opacity-20 z-10 flex justify-center">
                  <div className="">
                    <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center">
                      {/* <Image draggable={false} src={fav} className="w-1/2" alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center font-semibold text-3xl md:text-5xl">
                <div className="">What to Expect</div>
                <div className="">at <span className="">Lite<span className="bg-green-800 text-white">results</span> Service</span></div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-green-500 rounded-full inline-block cursor-pointer py-4 px-9 text-white font-bold">Rigster for a course</div>
            </div>
          </div>
          <div data-aos="fade-down" className="h-[200px] bg-green-300 overflow-hidden w-full xl:w-[440px] rounded-3xl mt-14 gallery10">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Cultural Showcase</div>
              <div className="text-xs">
                Traditional dances, fashion shows, and art exhibitions representing various Nigerian tribes.
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 z-40 md:space-y-24 md:space-x-3 grid md:grid-cols-2 xl:grid-cols-1 relative xl:-top-16">
          <div data-aos="fade-right" className="xl:w-[276px]  bg-green-300 overflow-hidden relative rounded-3xl xl:ml-auto h-[350px] gallery11">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Games and Activities</div>
              <div className="text-xs">
                Dive into interactive games, obstacle courses, waterparks, and palm wine spots that promise endless fun and excitement.
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="xl:w-[276px] bg-green-300 overflow-hidden relative rounded-3xl xl:mx-auto h-[350px] gallery12">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Food and Beverage Stalls</div>
              <div className="text-xs">
                Offering diverse Nigerian cuisine and drinks from different regions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=""></div> */}



      <div className="bg-gradient-to-b w-full overflow-hidden from-green-950 from-[30%] via-green-800 to-green-700">
        <div className="grid items-center md:grid-cols-5 px-3 py-20 sm:pt-28 mx-auto">
          <div className="space-y-3 md:pl-12 text-white md:space-y-7 col-span-2 py-16">
            <div className="text-2xl font-bold">Testimony</div>
            <div className=" text-5xl">
              <div className="">What Our <span className='text-[#f9820b]'>Students</span></div>
              <div className="">Have to say</div>
            </div>
            <div className="">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nulla reiciendis dolore rem? Consequatur consequuntur, quaerat libero, quam provident minima a, possimus dolore aut sunt eos explicabo corrupti ut assumenda!
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                        <div className="-space-y-1">
                          <div className="font-bold">John Doe</div>
                          <div className="text-sm">Mobile Dev student</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nulla reiciendis dolore rem? Consequatur consequuntur, quaerat libero, quam provident minima a, possimus dolore aut sunt eos explicabo corrupti ut assumenda!
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                        <div className="-space-y-1">
                          <div className="font-bold">John Doe</div>
                          <div className="text-sm">Mobile Dev student</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nulla reiciendis dolore rem? Consequatur consequuntur, quaerat libero, quam provident minima a, possimus dolore aut sunt eos explicabo corrupti ut assumenda!
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                        <div className="-space-y-1">
                          <div className="font-bold">John Doe</div>
                          <div className="text-sm">Mobile Dev student</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nulla reiciendis dolore rem? Consequatur consequuntur, quaerat libero, quam provident minima a, possimus dolore aut sunt eos explicabo corrupti ut assumenda!
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                        <div className="-space-y-1">
                          <div className="font-bold">John Doe</div>
                          <div className="text-sm">Mobile Dev student</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nulla reiciendis dolore rem? Consequatur consequuntur, quaerat libero, quam provident minima a, possimus dolore aut sunt eos explicabo corrupti ut assumenda!
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                        <div className="-space-y-1">
                          <div className="font-bold">John Doe</div>
                          <div className="text-sm">Mobile Dev student</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative -top-14 right-8">
                <div className="flex-grow"></div>
                <div className="flex gap-3">
                  <div onClick={() => emblaApi.scrollPrev()} className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 cursor-pointer"><TfiAngleLeft className='text-white' /></div>
                  <div onClick={() => emblaApi.scrollNext()} className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 cursor-pointer"><TfiAngleRight className='text-white' /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full relative col-span-3">
            <Image src={atlas} className='mx-auto animate-pulse relative bottom-0' alt='banner image' draggable={false} />
          </div>
        </div>
      </div>




      <div className="pb-24 bg-green-700">
        <div className="pt-12">
          <div className="max-w-xl text-center p-4 mx-auto">
            <div className="font-semibold text-xl text-white sm:text-3xl">Our Instructors</div>
            <div className="text-xs sm:text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti quia in modi porro minima nisi iste, fugiat deserunt corrupti voluptas? Animi est repudiandae velit necessitatibus vitae, illo reiciendis omnis.</div>
          </div>
        </div>
        <div className="px-6 grid md:justify-center md:grid-cols-3 max-w-5xl gap-5 mx-auto">
          <div className="group bg-black cursor-pointer overflow-hidden relative h-96 block">
            <div className="h-full w-full flex flex-col bg-gray-100">
              <div className="flex-grow"></div>
              <div className="bg-white z-30 p-4">
                <div className="text-2xl font-bold hover:text-green-800">Anna naomi</div>
                <div className="text-sm text-gray-400">Project manager</div>
              </div>
            </div>
            <div className="p-5 h-full gap-3 flex top-full group-hover: items-center justify-center w-full group-hover:top-0 group-hover:bg-opacity-30 right-0 transition-all duration-300 absolute group-hover:bg-green-800">
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="group bg-black cursor-pointer overflow-hidden relative h-96 block">
            <div className="h-full w-full flex flex-col bg-gray-100">
              <div className="flex-grow"></div>
              <div className="bg-white z-30 p-4">
                <div className="text-2xl font-bold hover:text-green-800">Anna naomi</div>
                <div className="text-sm text-gray-400">Project manager</div>
              </div>
            </div>
            <div className="p-5 h-full gap-3 flex top-full group-hover: items-center justify-center w-full group-hover:top-0 group-hover:bg-opacity-30 right-0 transition-all duration-300 absolute group-hover:bg-green-800">
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="group bg-black cursor-pointer overflow-hidden relative h-96 block">
            <div className="h-full w-full flex flex-col bg-gray-100">
              <div className="flex-grow"></div>
              <div className="bg-white z-30 p-4">
                <div className="text-2xl font-bold hover:text-green-800">Anna naomi</div>
                <div className="text-sm text-gray-400">Project manager</div>
              </div>
            </div>
            <div className="p-5 h-full gap-3 flex top-full group-hover: items-center justify-center w-full group-hover:top-0 group-hover:bg-opacity-30 right-0 transition-all duration-300 absolute group-hover:bg-green-800">
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="border border-black hover:bg-white hover:text-green-800 rounded-full w-7 h-7 flex items-center justify-center">
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div className="">
            <div className="inline-flex -space-x-7 hover:space-x-2 cursor-pointer">
              <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
              <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
              <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
              <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
              <div className="h-12 w-12 border rounded-full transition-all duration-300 bg-gray-600"></div>
            </div>
            <div className="text-white">Other Instructors</div>
          </div>
        </div>
      </div>


      <div className=" h-min-screen">
        <div className="max-w-7xl grid min-h-screen items-center md:grid-cols-2 gap-5 px-3 pt-20 sm:pt-28 mx-auto">
          <div className="h-full relative">
            <div className="bg-black h-[30%] w-[30%] absolute -top-9"></div>
            <div className="bg-black h-[30%] w-[30%] absolute -bottom-7 md:bottom-20 right-3"></div>
            <div className="bg-black h-[30%] w-[30%] absolute -top-9 right-0"></div>
            <div className="bg-black h-[30%] w-[30%] absolute top-[25%] right-[35%]"></div>
            <div className="bg-black h-[30%] w-[30%] absolute -bottom-7 md:bottom-20 left-3"></div>
            <div className="h-[80%] w-[80%] mx-auto min-h-96 relative grid grid-cols-2 gap-5">
              <div className="bg-green-700 h-full"></div>
              <div className="bg-green-700 h-full"></div>
              <div className="bg-green-700 h-full"></div>
              <div className="bg-green-700 h-full"></div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-7 py-16">
            <div className="font-extrabold  text-2xl xl:space-y-4 xl:text-5xl">
              <div className="">Why Us?</div>
            </div>
            <div className="max-w-lg text-xs md:text-sm ">
              Emphasize unique aspects like expert instructors, real-world projects, and career support. optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, non nisi? Officia architecto magni beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
            </div>
            <ul className="max-w-lg grid grid-cols-2 list-disc list-inside text-xs md:text-sm">
              <li>web dev</li>
              <li>mobile app</li>
              <li>Expert Mentors</li>
              <li>Hands-On Learning,</li>
              <li>Career Opportunities</li>
              <li>And many more</li>
            </ul>
            <div className="max-w-lg text-xs md:text-sm ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, non nisi? Officia architecto magni beatae? Totam suscipit blanditiis, ex, optio laudantium quas architecto ut similique quos perspiciatis sed velit debitis.
            </div>
            <div className="">
              <div className="flex gap-4">
                <div className="bg-green-500 rounded-full cursor-pointer py-4 px-9 text-white font-bold">Join our next section</div>
                <div className="w-14 h-14 flex justify-center cursor-pointer items-center rounded-full border border-green-500 text-green-500"><FaPlay /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page