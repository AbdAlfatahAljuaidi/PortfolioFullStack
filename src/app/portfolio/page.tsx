'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import pictures from '@/../public/pictures/About.jpeg'
import AskStudent from '@/../public/pictures/AskStudent.png'
import Ocean from '@/../public/pictures/Ocean.png'
import FITS from '@/../public/pictures/FITS.png'
import Dash from '@/../public/pictures/Dash.png'
import Leon from '@/../public/pictures/Leon.png'
import Kasper from '@/../public/pictures/Kasper.png'
import Blog from '@/../public/pictures/Blog.png'

const page = () => {
  const [showModal, setShowModal] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Sample projects array
  const projects = [
    {
      id: 'AskStudent',
      title: 'ASK Students',
      description: 'A Platform for University Students',
      image: AskStudent,
      link: 'https://socialnetwork-6vdw.onrender.com/index',
      modalContent: (
        <>
           <h1 className='text-black text-2xl font-bold '>Ask Students</h1>
          <p className='text-gray-700 mb-4 mt-3'>
            ASK Students is a university platform designed to facilitate the exchange of questions and answers among students.
          </p>
          <ul className='list-disc list-inside text-gray-600 space-y-1'>
            <li>Built with React and Node.js</li>
            <li>User authentication and registration</li>
            <li>Post and interact with questions</li>
            <li>Scalable to include chat and student reviews</li>
          </ul>
        </>
      )
    },
    {
      id: 'TeamTool',
      title: 'Team Management',
      description: 'Tool for managing student projects',
      image: Ocean,
      link: 'https://ocean-ivory-six.vercel.app/',
      modalContent: (
        <>
        <h1 className='text-black text-2xl font-bold '>Ocean</h1>
        <p className='text-gray-700 mb-4 mt-3'>
          A CRM dashboard designed for engineering teams to boost productivity by streamlining project management, team collaboration, and data-driven decision-making.
        </p>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          <li>Lead and project tracking system</li>
          <li>Team collaboration interface</li>
          <li>Data-driven insights and reports</li>
          <li>Built with Next.js</li>
        </ul>
      </>
      )
    },
    {
      id: 'FITS',
      title: 'FITS Website',
      description: 'A basic responsive site',
      image: FITS,
      link: 'https://full-insight-technology-solution-frontend.onrender.com',
      modalContent: (
        <>
           <h1 className='text-black text-2xl font-bold '>Full Insight Technolgy Solution </h1>
        <p className='text-gray-700 mb-4 mt-3'>
          A corporate website for Full Insight Technology Solutions, showcasing their IT services, ERP solutions, and company profile in a modern and professional layout.
        </p>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          <li>Responsive company profile and services pages</li>
          <li>Clean UI/UX with modern component-based structure</li>
          <li>Contact and inquiry form with backend integration</li>
          <li>Built with React and Node.js</li>
        </ul>
      </>
      
      )
    },
    {
      id: 'Leon',
      title: 'FITS Website',
      description: 'A basic responsive site',
      image: Leon,
      link: ' https://abdalfatahaljuaidi.github.io/Leon/',
      modalContent: (
        <>
           <h1 className='text-black text-2xl font-bold '>Leon</h1>
        <p className='text-gray-700 mb-4 mt-3'>
          A multi-service website showcasing key digital services such as graphic design, UI/UX design, web design, and web development, aimed at increasing productivity and visibility.
        </p>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          <li>Service overview sections for Graphic Design, UI/UX, Web Design, and Development</li>
          <li>Fully responsive layout with custom styling</li>
          <li>Clean and semantic HTML structure</li>
          <li>Built with HTML, CSS, and JavaScript</li>
        </ul>
      </>
      )
    },
    {
      id: 'Dash',
      title: 'FITS Website',
      description: 'A basic responsive site',
      image: Dash,
      link: 'https://abdalfatahaljuaidi.github.io/Dashboard/',
      modalContent: (
        <>
           <h1 className='text-black text-2xl font-bold '>Dashboard</h1>
        <p className='text-gray-700 mb-4 mt-3'>
          A responsive dashboard interface built for administrative tasks, presenting data insights and user-friendly navigation using only frontend technologies.
        </p>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          <li>Sidebar navigation and top header layout</li>
          <li>Cards and tables for displaying key metrics</li>
          <li>Interactive UI with pure JavaScript</li>
          <li>Built with HTML, CSS, and JavaScript</li>
        </ul>
      </>
      )
    },
    {
      id: 'Kasper',
      title: 'FITS Website',
      description: 'A basic responsive site',
      image: Kasper,
      link: 'https://abdalfatahaljuaidi.github.io/Kasper/',
      modalContent: (
        <>
           <h1 className='text-black text-2xl font-bold '>Kasper</h1>
        <p className='text-gray-700 mb-4 mt-3'>
          A static website designed to present a range of professional services in a clean and modern layout, focusing on clarity and responsive design.
        </p>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          <li>Service sections with structured content layout</li>
          <li>Responsive design for mobile and desktop</li>
          <li>Modern styling with pure CSS</li>
          <li>Built with HTML and CSS</li>
        </ul>
      </>
      )
    },
    {
      id: 'Blog',
      title: 'FITS Website',
      description: 'A basic responsive site',
      image: Blog,
      link: 'https://abdalfatahaljuaidi.github.io/Blog/',
      modalContent: (
        <>
           <h1 className='text-black text-2xl font-bold '>Company </h1>
        <p className='text-gray-700 mb-4 mt-3'>
          A service-focused website featuring detailed sections on company offerings, technical skills, and workflow explanations — all styled with clean, responsive design.
        </p>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          <li>Service presentation including security, coding, marketing, and design</li>
          <li>Skills section with visual progress bars for HTML, CSS, JavaScript, and Python</li>
          <li>“How It Works” section outlining Business Analysis, Architecture, and Development steps</li>
          <li>Built with HTML and CSS</li>
        </ul>
      </>
      )
    },
  ]

  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className='bg-black text-white px-6 py-10 min-h-screen md:l-[3px]'>
      <h1 className="mt-[100px] md:mt-[60px] text-4xl font-bold">PORTFOLIO</h1>
      <div className="h-1 w-16 bg-blue-900 relative mt-5 mb-10">
        <div className="absolute top-0 left-0 w-5 bg-blue-500 h-1"></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {currentProjects.map(project => (
          <div key={project.id} className='relative w-full md:w-[400px] group'>
         <div className='w-full flex justify-center'>
  <Image
    src={project.image}
    height={350}
    alt={project.title}
    className='rounded-lg group-hover:opacity-50 transition-opacity duration-300 w-[100%] md:w-[450px] '
  />
</div>
            <h1 className='font-bold text-xl mt-2'>{project.title}</h1>
            <p className='text-gray-400'>{project.description}</p>

            <div className='absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className="flex gap-3 pointer-events-auto">
                {project.link && (
                  <a target='_blank' href={project.link} rel='noopener noreferrer'>
                    <button className='bg-white text-black font-semibold px-4 py-2 rounded hover:cursor-pointer'>Link</button>
                  </a>
                )}
                <button
                  onClick={() => setShowModal(project)}
                  className='bg-white text-black font-semibold px-4 py-2 rounded hover:cursor-pointer'
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-10 space-x-2'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 hover:cursor-pointer py-2 rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 z-50   bg-opacity-80 flex items-center justify-center'>
          <div className='bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative'>
            <button
              onClick={() => setShowModal(null)}
              className='absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold hover:cursor-pointer'
            >
              &times;
            </button>
            <h2 className='text-2xl font-bold mb-4'>{showModal.title}</h2>
            {showModal.modalContent}
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowModal(null)}
                className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition hover:cursor-pointer'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default page
