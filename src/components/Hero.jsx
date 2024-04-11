import React from 'react'
import Img1 from '../images/ellipse-img-1.png'
const Hero = () => {
  return (
    <div className='flex items-center justify-center  px-[148px] gap-[100px] mt-[100px] mb-[70px]'>
      <div className='grid gap-[40px]'>
        <h1 className='text-[44px] leading-[60px] font-bold relative w-[506px] h-[105px] text-dark-color text-left'>Hi, I am John,
          Creative Technologist</h1>
        <p className='w-[497px] h-[66px] text-dark-color text-left '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className='bg-[#FF6464] rounded-sm w-52 h-[47px] text-white '>Download Resume</button>
      </div>
      <div>
        <img src={Img1} alt="img-1" />
      </div>
    </div>
  )
}

export default Hero