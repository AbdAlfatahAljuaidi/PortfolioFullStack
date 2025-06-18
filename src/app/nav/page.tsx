'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const Links = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/contacts', label: 'Contacts' },
  ]

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      {/* ====== Sidebar - Desktop ====== */}
      <div className='bg-[#191D2B] fixed left-0 top-0 text-white h-screen p-3 w-[254px] hidden md:block z-50'>
      <div className="w-[150px] h-[150px] mx-auto mt-10 rounded-full 
                border-4 border-blue-100 hover:border-blue-500 
                hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.5)] 
                transition-all duration-500 ease-in-out">
  <Image
    src="/pictures/Personal.png"
    width={150}
    height={150}
    alt="personal"
    className="rounded-full"
  />
  <hr className="mt-6" />
</div>





        <nav className='mt-10'>
          <ul className='text-center'>
            {Links.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href} className={index !== 0 ? 'mt-2' : ''}>
                  <Link
                    href={link.href}
                    className={`text-[22px] block w-full py-2 rounded-md transition duration-300
                      ${isActive ? 'bg-blue-600 font-bold' : 'hover:bg-blue-400'}
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='mt-[45px]'>
          <hr />
          <h1 className='mt-2 text-center'>© 2025 Abd Alfatah Aljuaidi</h1>
        </div>
      </div>

      {/* ====== Top Bar - Mobile ====== */}
      <div className='md:hidden bg-[#191D2B] text-white px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50'>
        <h1 className='text-2xl font-bold'>Portfolio</h1>
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* ====== Mobile Sidebar with animation ====== */}
      <div className={`fixed inset-0 z-40 md:hidden`}>
        {/* خلفية شفافة تغلق القائمة عند الضغط عليها */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            menuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        ></div>

        {/* قائمة التنقل الجانبية */}
        <div
          className={`bg-[#191D2B] text-white fixed top-14 left-0 w-[70%] h-full z-50 p-5 transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className='flex justify-center'>
            <Image
              src="/pictures/Personal.png"
              width={100}
              height={100}
              alt='personal'
              className='bg-white border-4 border-blue-100 rounded-full mt-4'
            />
          </div>

          <nav className='mt-10'>
            <ul className='text-center space-y-4'>
              {Links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-xl block w-full py-2 rounded-md transition duration-300
                        ${isActive ? 'bg-blue-600 font-bold' : 'hover:bg-blue-400'}
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
