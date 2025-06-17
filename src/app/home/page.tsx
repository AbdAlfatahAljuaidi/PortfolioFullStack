'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">

      {/* خلفية متحركة واضحة */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full top-[-100px] left-[-150px] blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-600/30 rounded-full bottom-[-120px] right-[-150px] blur-3xl"
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] bg-pink-500/30 rounded-full top-[30%] left-[60%] blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[200px] h-[200px] bg-yellow-400/30 rounded-full bottom-[20%] left-[30%] blur-2xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* محتوى الترحيب */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-gray-300 text-xl md:text-2xl"
        >
          I am a <span className="text-blue-400">Full-Stack Developer</span> who brings ideas to life.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Home
