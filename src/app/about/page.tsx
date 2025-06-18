import React from 'react'
import aboutImage from '@/../public/pictures/About.jpeg'
import Image from 'next/image'
import { MdDesignServices } from "react-icons/md";
import { FaCode, FaMobileAlt } from "react-icons/fa";

const Page = () => {
    return (
        <div className='bg-black text-white p-5 border-r-1 border-white z-50 md:ml-[3px]'>
            <h1 className='mt-[110px] md:mt-[90px] text-4xl font-bold'>ABOUT ME</h1>
            <div className='h-1 w-16 bg-blue-900 relative mt-5'>
                <div className='absolute top-0 left-0 w-5 bg-blue-500 h-1 '></div>
            </div>

            <div className='md:flex justify-center items-center'>

                <div className='w-fit mt-9 relative before:bg-blue-500 before:top-0 before:w-4 before:h-52 before:opacity-60 before:absolute after:bg-blue-500 after:bottom-0 after:w-4 after:right-0 after:h-52 after:opacity-60 after:absolute '>
                    <Image src={aboutImage} className='' alt='test' height={500} width={1500} />
                </div>
                <div className='p-5'>
                    <h1 className='text-4xl'>I am <span className='text-blue-500'>Abd Alfatah </span> </h1>
                    <p className='text-gray-400'>I am a frontend web developer. I can provide clean code and pixel-perfect design. I also make websites more and more interactive with web animations.
                        Additionally, I have solid experience in backend development, working with databases, server-side logic, and APIs, which enables me to build complete full-stack applications from end to end.

                    </p>

                    <div className='mt-5 text-gray-300 text-[18px]'>
                        <h1>Full Name: Abd Alfatah Aljuaidi</h1>
                        <h1 className='mt-2'>Age: 22</h1>
                        <h1 className='mt-2'>Languages: English, Arabic</h1>
                        <h1 className='mt-2'>Address: Amman, Jordan</h1>
                        <h1 className='mt-2'>Freelance: Available</h1>
                    </div>

                    <div className='mt-9 '>
                        <a href='/pictures/Resume.pdf' download className=" bg-blue-500 relative py-2 px-6 text-xl hover:cursor-pointer
  hover:bg-white hover:text-blue-500 transition-all duration-1000 ease-in-out">

                            DownLoad CV
                        </a>
                    </div>



                </div>

            </div>

            <h1 className='mt-8 md:mt-[90px] text-4xl font-bold'>Services</h1>
            <div className='h-1 w-16 bg-blue-900 relative mt-5'>
                <div className='absolute top-0 left-0 w-5 bg-blue-500 h-1 '></div>
            </div>

            <div className='grid grid-cols-12 mt-10 gap-5'>
                <div className="lg:col-span-4 col-span-12 bg-[#191D2B] p-3 border-t-2 border-transparent hover:border-t-blue-500 transition-all duration-700 ease-in-out">

                    <h1><MdDesignServices className='text-blue-500 text-4xl mt-3' /></h1>
                    <h1 className='text-2xl mt-3'><span className='border-b-1 border-gray-400 pb-3 '>Web</span> Design</h1>
                    <p className='text-gray-400 mt-5'>I design modern, responsive websites with a strong focus on user experience and usability to help you achieve your goals effectively.</p>


                </div>
                <div className="lg:col-span-4 col-span-12 bg-[#191D2B] p-3 border-t-2 border-transparent hover:border-t-blue-500 transition-all duration-700 ease-in-out">

                    <h1><FaCode className='text-blue-500 text-4xl mt-3' /></h1>
                    <h1 className='text-2xl mt-3'><span className='border-b-1 border-gray-400 pb-3 '>Web</span> Development</h1>
                    <p className='text-gray-400 mt-5'>I develop fast, scalable web applications using modern technologies with a focus on performance, security, and clean code.</p>


                </div>

                <div className="lg:col-span-4 col-span-12 bg-[#191D2B] p-3 border-t-2 border-transparent hover:border-t-blue-500 transition-all duration-700 ease-in-out">

                    <h1><FaMobileAlt className='text-blue-500 text-4xl mt-3' /></h1>
                    <h1 className='text-2xl mt-3'><span className='border-b-1 border-gray-400 pb-3 '>Mobile</span> Application</h1>
                    <p className='text-gray-400 mt-5'>I build responsive, user-friendly mobile applications using modern frameworks with a focus on performance, reliability, and seamless experience.</p>


                </div>

            </div>



        </div>
    )
}

export default Page