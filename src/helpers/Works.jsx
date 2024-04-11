import React from 'react'
import Article from '../components/Article'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Img8 from '../images/img-8.png'
import Img5 from '../images/img-5.2018.png'
import { Link } from 'react-router-dom'
const Works = () => {
  return (
    <div className='main-works'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='body mb-[50px] mt-[90px]'>
        <Article/>
        <div className=' flex gap-5  items-center justify-center px-[148px] flex-col mt-8'>
          <div className="flex gap-5 ">
          <img src={Img8} className="rounded-md w-[246px] h-[180px]" alt="img-2" />
        {/* img */}
        <div className=' grid gap-4'>
          <h3
            className="text-dark-color text-left font-['Heebo-Bold',_sans-serif] text-3xl font-bold relative"
          >
            Components
          </h3>
          <div className='w-[450px] flex gap-6'>
            <img className="min-w-[42px] object-none bg-black p-2 rounded-3xl" src={Img5} alt="" />
            {/* Img */}
            <span className="text-light  font-['Heebo-Regular',_sans-serif] text-xl font-normal text-[#8695A4]  w-[374px] h-[34px]">
            Components, Design
            </span>
          </div>
          <p
            className="text-dark-color text-left font-['Heebo-Regular',_sans-serif] text-base font-normal relative w-[594px] h-[93px]"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.
          </p>
        </div>
          </div>
        {/* Link */}
        <Link className='work-link text-start w-[180px] p-3 border border-amber-800 rounded-3xl bg-green-500 ' to="/works/work__details/4 ">Open Work details </Link>
      </div>
      </div>
      <div className="footer">
        <hr />
        <Footer/>
      </div>
    </div>
  )
}

export default Works