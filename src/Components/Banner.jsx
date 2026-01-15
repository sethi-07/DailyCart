import React from 'react'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <div className='w-full flex flex-col items-centre justify-center min-h-[743px] bg-linear-to-r from-[#07343d] to-[#136f83] relative'>
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-center w-full h-full">
          <div className='flex flex-col gap-4'>
            <h2 className='text-white text-6xl font-bold'>Welcome to my portfolio</h2>
            <p className='text-emerald-100 text-2xl font-semibold'>Nice to see you, I'm SayC. I love design, code and user experience. I've spent my career at early-stage startups in AI, finance, and productivity - bridging the gap between design and code.</p>

            <Link to={"/shop"}><button className='h-8 w-30 bg-green-200 my-5 border-2 rounded-2xl hover:bg-green-400 font-bold transition-all duration-400'>Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Banner
