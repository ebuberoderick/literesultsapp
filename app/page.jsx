"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaPlay } from "react-icons/fa6";
import img from "@/public/banImg.png"
import digitalM from "@/public/digitalM.jpeg"
import webInst from "@/public/web  instructor.jpeg"
import UIUX from "@/public/UIUX.jpeg"
import about from "@/public/about.jpg"
import bube from "@/public/bube.jpeg"
import std1 from "@/public/std1.jpeg"
import std2 from "@/public/std2.jpeg"
import std3 from "@/public/std3.jpeg"
import std4 from "@/public/std4.jpeg"
import inst1 from "@/public/inst1.jpeg"
import inst2 from "@/public/inst2.jpeg"
import inst3 from "@/public/inst1.jpeg"
import inst4 from "@/public/inst2.jpeg"
import maam from "@/public/maam.png"
import why1 from "@/public/african-woman-pointing-laptop-studying-with-colleague-university_242111-40133.jpg"
import why2 from "@/public/study-group-african-people_23-2149156376.jpg"
import why3 from "@/public/2149891363.jpg"
import why4 from "@/public/1625.jpg"
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import atlas from "@/public/Asset-2.svg"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Footer from './components/Footer';
import Link from 'next/link';
import Navbar from './components/Navbar';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "ltr", dragFree: false }, [Autoplay()])
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    if (emblaApi) { console.log(emblaApi.slideNodes()) }
  }, [emblaApi])

  return (
    <div className='select-none scroll-smooth'>
      <Navbar />
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
              Start creating the career you deserve today by unlocking your potential with Literesults, where your tech success is paved with excellent courses alongside expert guidance.
            </div>
            <div className="flex gap-4">
              <Link href="/courses">
                <div className="bg-green-500 rounded-full cursor-pointer py-4 px-9 text-white font-bold">Explore More Courses</div>
              </Link>
              <div className="w-14 h-14 flex justify-center cursor-pointer items-center rounded-full border border-green-500 text-green-500"><FaPlay /></div>
            </div>
            <div className="">
              <div className="inline-flex -space-x-7 hover:space-x-2 cursor-pointer">
                <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                  <Image src={bube} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                </div>
                <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                  <Image src={std1} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                </div>
                <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                  <Image src={std2} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                </div>
                <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                  <Image src={std3} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                </div>
                <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                  <Image src={std4} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                </div>
              </div>
              <div className="text-white">Over 100+ students</div>
            </div>
          </div>
          <div className="h-full">
            <Image src={img} className='md:w-full mx-auto relative bottom-0' alt='banner image' draggable={false} />
          </div>
        </div>
      </div>



      <div id='about' className="bg-gradient-to-b from-green-950 from-[30%] via-green-800 to-green-700 h-min-screen">
        <div className="pt-12">
          <div className="max-w-xl text-center p-4 text-white mx-auto">
            <div className="font-semibold text-xl sm:text-3xl">Learn, Grow, Succeed</div>
            <div className="text-xs sm:text-base">Take the first step towards your dream career with our expertly designed courses. At Literesults, we make learning accessible, practical, and impactful, so you can achieve your goals with confidence.</div>
          </div>
        </div>
        <div className="max-w-7xl grid min-h-screen items-center md:grid-cols-2 gap-5 px-3 pt-20 sm:pt-28 mx-auto">
          <div className="h-full relative">
            <div className="bg-black h-[60%] w-[50%] absolute -top-9"></div>
            <div className="bg-black h-[60%] w-[50%] absolute -bottom-7 md:bottom-20 right-3"></div>
            <div className="h-[80%] w-[80%] mx-auto min-h-96 relative bg-green-500 bgImg" style={{ backgroundImage: about }}>
              {/* <Image src={about} draggable={false} alt='about us' className='h-full object-contain w-auto' /> */}
            </div>
          </div>
          <div className="space-y-3 md:space-y-7 py-16">
            <div className="font-extrabold text-white text-2xl xl:space-y-4 xl:text-5xl">
              <div className="">Who are we</div>
              <div className="">and What do we Do</div>
            </div>

            <div data-aos="fade-up" className="max-w-lg text-xs md:text-sm text-white">
              Literesults is a forward-thinking platform dedicated to transforming lives through education and skill development. With a focus on quality, accessibility, and innovation, we give learners the tools they need to succeed in their careers and stay ahead in the constantly changing tech landscape.
            </div>
            <div data-aos="fade-up" className="max-w-lg text-xs md:text-sm text-white">
              Whether you&apos;re starting from scratch or looking to expand your expertise, Literesults is here to guide you every step of the way. Our mission is to bridge the gap between ambition and achievement by offering expertly curated courses designed to meet the demands of the modern workforce.
            </div>
            <div className="">
              <div className="flex gap-4">
                <Link href="/courses">
                  <div className="bg-green-500 rounded-full cursor-pointer py-4 px-9 text-white font-bold">Learn More About Us</div>
                </Link>
                <div className="w-14 h-14 flex justify-center cursor-pointer items-center rounded-full border border-green-500 text-green-500"><FaPlay /></div>
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


      <div className="max-w-7xl overflow-hidden grid items-start xl:grid-cols-3 py-12 mx-auto px-5 space-y-6 lg:space-y-12">
        <div className="space-y-6 z-40 md:space-y-24 md:space-x-3 grid md:grid-cols-2 xl:grid-cols-1 relative xl:top-16">
          <Link href="/courses" data-aos="fade-left" className="xl:w-[276px] bg-green-300 overflow-hidden w-full relative rounded-3xl mx-auto h-[350px] gallery7">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Web Development</div>
              <div className="text-xs">
                Master the art of building modern, responsive websites with our comprehensive web development courses.
              </div>
            </div>
            <div className="w-12 h-12 cursor-pointer bg-white rounded-full absolute top-5 right-5 flex items-center justify-center">
              {/* <Image draggable={false} src={heart} className="w-1/2" alt="" /> */}
            </div>
          </Link>
          <Link href="/courses" data-aos="fade-left" className="xl:w-[376px] bg-green-300 overflow-hidden w-full relative xl:left-12 rounded-3xl mx-auto h-[200px] gallery8">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Mobile Development</div>
              <div className="text-xs">
                Learn to create innovative, user-friendly apps with our expert-led mobile development courses.
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center md:flex-row xl:flex-col xl:items-end justify-center lg:gap-6">
          <Link href="/courses" data-aos="fade-up" className="h-[200px] bg-green-300 overflow-hidden w-full xl:w-[300px] rounded-3xl gallery9">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Digital Marketing</div>
              <div className="text-xs">
                Boost your expertise in online strategies with our advanced digital marketing courses designed for success.
              </div>
            </div>
          </Link>
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
              <Link href="/courses">
                <div className="bg-green-800 rounded-full inline-block cursor-pointer py-4 px-9 text-white font-bold">Register for a course</div>
              </Link>
            </div>
          </div>
          <Link href="/courses" data-aos="fade-down" className="h-[200px] bg-green-300 overflow-hidden w-full xl:w-[440px] rounded-3xl mt-14 gallery10">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">UI/UX Design</div>
              <div className="text-xs">
                Transform ideas into seamless user experiences with our creative and practical UI/UX design courses.
              </div>
            </div>
          </Link>
        </div>
        <div className="space-y-6 z-40 md:space-y-24 md:space-x-3 grid md:grid-cols-2 xl:grid-cols-1 relative xl:-top-16">
          <Link href="/courses" data-aos="fade-right" className="xl:w-[276px]  bg-green-300 overflow-hidden relative rounded-3xl xl:ml-auto h-[350px] gallery11">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Cyber Security</div>
              <div className="text-xs">
                With our in-depth cybersecurity courses, designed to provide you with necessary protective skills, secure the digital environment.
              </div>
            </div>
          </Link>
          <Link href="/courses" data-aos="fade-right" className="xl:w-[276px] bg-green-300 overflow-hidden relative rounded-3xl xl:mx-auto h-[350px] gallery12">
            <div className="p-3 py-6 space-y-2 bg-white rounded-3xl w-full">
              <div className="font-semibold sm:text-xl">Project Management</div>
              <div className="text-xs">
                Gain the skills to lead and deliver successful projects with our dynamic project management courses.
              </div>
            </div>
          </Link>
        </div>
      </div>


      <div id='testimonials' className="bg-gradient-to-b w-full overflow-hidden from-green-950 from-[30%] via-green-800 to-green-700">
        <div className="grid items-center md:grid-cols-5 px-3 py-20 sm:pt-28 mx-auto">
          <div className="space-y-3 md:pl-12 text-white md:space-y-7 col-span-2 py-16">
            <div className="text-2xl font-bold">Testimony</div>
            <div className="text-3xl md:text-5xl">
              <div className="">What Our <span className='text-[#f9820b]'>Students</span></div>
              <div className="">Have to say</div>
            </div>
            <div className="">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="text-sm md:text-base">
                        Enrolling in Literesults was the best decision for my career. The web development course gave me the skills and confidence to land my dream job in tech!
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                          <Image src={std3} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                        </div>
                        <div className="-space-y-1">
                          <div className="font-bold">Pascal</div>
                          <div className="text-sm">Web development</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="">
                        The digital marketing course was a game-changer for me. I not only learned the latest strategies but also how to apply them effectively in real-world scenarios.
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                          <Image src={std4} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                        </div>
                        <div className="-space-y-1">
                          <div className="font-bold">Chiamaka</div>
                          <div className="text-sm">Digital marketing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className="space-y-3">
                      <div className="">
                        The mobile development course was fantastic! I went from having no coding experience to creating my first app in just a few months.
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                          <Image src={std2} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
                        </div>
                        <div className="-space-y-1">
                          <div className="font-bold">Benjamin</div>
                          <div className="text-sm">Mobile development</div>
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
            <div className="text-xs sm:text-base text-white"> Each instructor is carefully selected for their knowledge, skills, and ability to deliver engaging, real-world lessons that help students succeed.</div>
          </div>
        </div>
        <div className="px-6 grid md:justify-center md:grid-cols-3 max-w-5xl gap-5 mx-auto">
          <div data-aos="fade-up" className="group bg-black cursor-pointer overflow-hidden relative h-96 block">
            <div className="h-full w-full flex flex-col bg-gray-100">
              <div className="flex-grow relative z-0">
                <Image src={webInst} draggable={false} alt='digital market instructor' />
              </div>
              <div className="bg-white z-30 p-4 bottom-0 absolute w-full">
                <div className="text-2xl font-bold hover:text-green-800">Noble Okechi</div>
                <div className="text-sm text-gray-400">Web Development</div>
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
          <div data-aos="fade-up" className="group bg-black cursor-pointer overflow-hidden relative h-96 block">
            <div className="h-full w-full flex flex-col bg-gray-100">
              <div className="flex-grow relative z-0">
                <Image src={digitalM} draggable={false} alt='digital market instructor' />
              </div>
              <div className="bg-white z-30 p-4 bottom-0 absolute w-full">
                <div className="text-2xl font-bold hover:text-green-800">Praises Jonathan</div>
                <div className="text-sm text-gray-400">Digital Marketing </div>
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
          <div data-aos="fade-up" className="group bg-black cursor-pointer overflow-hidden relative h-96 block">
            <div className="h-full w-full flex flex-col bg-gray-100">
              <div className="flex-grow relative z-0">
                <Image src={UIUX} draggable={false} alt='digital market instructor' />
              </div>
              <div className="bg-white z-30 p-4 bottom-0 absolute w-full">
                <div className="text-2xl font-bold hover:text-green-800">Victor Diala</div>
                <div className="text-sm text-gray-400">UI/UX Design</div>
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
              <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                <Image src={maam} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
              </div>
              <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                <Image src={inst1} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
              </div>
              <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                <Image src={inst2} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
              </div>
              <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                <Image src={inst3} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
              </div>
              <div className="h-12 w-12 overflow-hidden border rounded-full transition-all duration-300 bg-gray-600">
                <Image src={inst4} width={100} height={100} className='w-full h-full pointer-events-none' draggable={false} />
              </div>
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
              <div className="bg-green-700 h-full">
                <Image src={why1} alt='Why Us' className='w-full h-full' />
              </div>
              <div className="bg-green-700 h-full">
                <Image src={why2} alt='Why Us' className='w-full h-full' />
              </div>
              <div className="bg-green-700 h-full">
                <Image src={why3} alt='Why Us' className='w-full h-full' />
              </div>
              <div className="bg-green-700 h-full">
                <Image src={why4} alt='Why Us' className='w-full h-full' />
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-7 py-16">
            <div className="font-extrabold  text-2xl xl:space-y-4 xl:text-5xl">
              <div className="">Why Us?</div>
            </div>
            <div className="max-w-lg text-xs md:text-sm ">
              At Literesults, we are committed to providing an exceptional learning experience that sets you up for long-term success. Here&apos;s why you should choose us:
            </div>
            <ul className="max-w-lg grid grid-cols-2 list-disc list-inside text-xs md:text-sm">
              <li>Expert-Led Courses</li>
              <li>Comprehensive Curriculum</li>
              <li>Flexible Learning</li>
              <li>Hands-On Learning,</li>
              <li>Hands-On Projects</li>
              <li>Certification</li>
              <li>Community & Networking</li>
            </ul>
            <div className="max-w-lg text-xs md:text-sm ">
              Choose Literesults to unlock your full potential and take the next step in your career with confidence.
            </div>
            <div className="">
              <div className="flex gap-4">
                <Link href="/courses">
                  <div className="bg-green-700 rounded-full cursor-pointer py-4 px-9 text-white font-bold">Join our next section</div>
                </Link>
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