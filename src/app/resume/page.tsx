'use client'
import React, { useEffect, useState } from 'react'
import { MdOutlineWork } from "react-icons/md"

const page = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Sass', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Bootstrap', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'React Native', level: 80 },
    { name: 'Node.js', level: 90},
  ]

  const [progress, setProgress] = useState(skills.map(() => 0))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(skills.map(skill => skill.level))
    }, 300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='bg-black text-white px-6 py-10 min-h-screen md:ml-[3px]'>
      {/* Skills */}
      <h1 className="mt-[90px] md:mt-[60px] text-4xl font-bold">MY SKILLS</h1>
      <div className="h-1 w-16 bg-blue-900 relative mt-5 mb-10">
        <div className="absolute top-0 left-0 w-5 bg-blue-500 h-1"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-2">{skill.name}</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-300 w-12">{skill.level}%</span>
              <div className="h-2 w-full bg-blue-900 rounded ml-3 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-2 bg-blue-500 rounded transition-all duration-1000"
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    {/* Resume Title */}
<h1 className="mt-20 text-4xl font-bold">RESUME</h1>
<div className="h-1 w-16 bg-blue-900 relative mt-5 mb-10">
  <div className="absolute top-0 left-0 w-5 bg-blue-500 h-1"></div>
</div>

{/* Working Experience */}
<div className='flex items-center text-2xl'>
  <MdOutlineWork />
  <h1 className='ml-2'>Working Experience</h1>
</div>

<div className='relative mt-10 pl-6 before:absolute before:top-0 before:left-5 before:bottom-0 before:w-[2px] before:bg-gray-500'>
  {/* Job 1 */}
  <div className='relative flex flex-col md:flex-row mb-16 ml-6'>
    <div className='w-full md:w-[80px]'>
      <h1 className='text-sm text-gray-400'>2024 - 2025</h1>
      <div className='absolute left-[-37px] top-0 w-5 h-5 rounded-full border border-gray-500 bg-black'></div>
    </div>
    <div className='md:ml-28 mt-5 md:mt-0 border-l-1 pl-5 relative'>
      <div className='absolute left-[-10px] top-5 w-5 border border-gray-500 bg-black'></div>
      <h1 className='text-2xl text-blue-500 font-bold'>Backend Developer</h1>
      <span className='font-bold'>Freelance</span>
      <p className='mt-4 text-gray-400'>Developed a full-stack web platform to assist students applying to study in Italy, using technologies like Node.js, MongoDB, and React.</p>
    </div>
  </div>

  {/* Job 2 */}
  <div className='relative flex flex-col md:flex-row mb-16 ml-6'>
    <div className='w-full md:w-[80px]'>
      <h1 className='text-sm text-gray-400'>2024 - 2025</h1>
      <div className='absolute left-[-37px] top-0 w-5 h-5 rounded-full border border-gray-500 bg-black'></div>
    </div>
    <div className='md:ml-28 mt-5 md:mt-0 border-l-1 pl-5 relative'>
      <div className='absolute left-[-10px] top-5 w-5 border border-gray-500 bg-black'></div>
      <h1 className='text-2xl text-blue-500 font-bold'>Full Stack Developer</h1>
      <span className='font-bold'>Full Insight Technology Solutions</span>
      <p className='mt-4 text-gray-400'>Worked on web applications using React and Node.js, and gained practical experience in ERP systems like Epicor.</p>
    </div>
  </div>

  {/* Job 3 */}
  <div className='relative flex flex-col md:flex-row mb-16 ml-6'>
    <div className='w-full md:w-[80px]'>
      <h1 className='text-sm text-gray-400'>2023 - 2024</h1>
      <div className='absolute left-[-37px] top-0 w-5 h-5 rounded-full border border-gray-500 bg-black'></div>
    </div>
    <div className='md:ml-28 mt-5 md:mt-0 border-l-1 pl-5 relative'>
      <div className='absolute left-[-10px] top-5 w-5 border border-gray-500 bg-black'></div>
      <h1 className='text-2xl text-blue-500 font-bold'>Telemarketing Agent</h1>
      <span className='font-bold'>University of Jordan</span>
      <p className='mt-4 text-gray-400'>Provided support and guidance to students over the phone, assisting them in the application and registration process.</p>
    </div>
  </div>
</div>

{/* Education Section */}
<h1 className="text-4xl font-bold mt-20">Educational Background</h1>
<div className="h-1 w-16 bg-blue-900 relative mt-5 mb-10">
  <div className="absolute top-0 left-0 w-5 bg-blue-500 h-1"></div>
</div>

<div className='relative mt-10 pl-6 before:absolute before:top-0 before:left-5 before:bottom-0 before:w-[2px] before:bg-gray-500'>
  {/* Education Entry */}
  <div className='relative flex flex-col md:flex-row ml-6'>
    <div className='w-full md:w-[80px]'>
      <h1 className='text-sm text-gray-400'>2020 - 2024</h1>
      <div className='absolute left-[-37px] top-0 w-5 h-5 rounded-full border border-gray-500 bg-black'></div>
    </div>

    <div className='md:ml-28 mt-5 md:mt-0 border-l-1 pl-5 relative'>
      <div className='absolute left-[-10px] top-5 w-5 border border-gray-500 bg-black'></div>
      <h1 className='text-2xl text-blue-500 font-bold'>Bachelor’s in Software Engineering</h1>
      <span className='font-bold'>Amman Arab University</span>
      <p className='mt-4 text-gray-400'>Graduated after completing a 4-year program focused on web development, system design, and software project management.</p>
    </div>
  </div>
  </div>
  </div>

  )
}

export default page
