import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Page = () => {
  return (
    <div className="bg-black text-white px-6 py-10 min-h-screen">
      <h1 className="mt-24 md:mt-[10px] text-4xl font-bold">CONTACTS</h1>
      <div className="h-1 w-16 bg-blue-900 relative mt-5 mb-10">
        <div className="absolute top-0 left-0 w-5 bg-blue-500 h-1"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side: Contact form */}
        <div className="flex-1 bg-[#191D2B] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-white text-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-white text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded bg-white text-black focus:outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded bg-white text-black focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-semibold"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Right side: Contact info */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Phone */}
          <div className="bg-[#191D2B] p-6 rounded-lg shadow-md flex items-start gap-4">
            <div className="text-blue-500 text-xl mt-1">
              <FaPhoneAlt />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Phone</h2>
              <p className="text-gray-300">+962 78240 7533 <span className="text-sm text-gray-400">— Work</span></p>
              <p className="text-gray-300">+962 78240 7533 <span className="text-sm text-gray-400">— Personal</span></p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#191D2B] p-6 rounded-lg shadow-md flex items-start gap-4">
            <div className="text-blue-500 text-xl mt-1">
              <FaEnvelope />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Email</h2>
              <p className="text-gray-300">abdalfatah.aljuaidi@gmail.com <span className="text-sm text-gray-400">— Business inquiries</span></p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#191D2B] p-6 rounded-lg shadow-md flex items-start gap-4">
            <div className="text-blue-500 text-xl mt-1">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Address</h2>
              <p className="text-gray-300">Amman, Jordan <span className="text-sm text-gray-400">— Office location</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
