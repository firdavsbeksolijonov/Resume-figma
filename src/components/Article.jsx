import React from 'react'
import Img2 from "../images/img-2.png"
import Img4 from "../images/img-4.png"
import Img6 from "../images/img-6.png"
import Img3 from "../images/img-3.2020.png"
import Img5 from "../images/img-5.2018.png"
import { Link, useLocation } from 'react-router-dom'

const Article = () => {
  const location = useLocation();
  const { pathname } = location;

  function renderLink() {
    if (pathname === "/") {
      return null;
    } else {
      return (
        <Link className='text-start w-[180px] p-3 border border-amber-800 rounded-3xl bg-green-500' to="/works/work__details/1">
          Open Work details
        </Link>
      );
    }
  }

  return (
    <div className='flex items-center justify-center  px-[148px] flex-col gap-[30px]'>
      <article className="text-dark-color text-left font-['Heebo-Regular',_sans-serif] text-[22px] leading-[60px] font-normal relative " >Featured works</article>
      <div className=' flex gap-5 flex-col'>
        <div className="flex gap-5">
          <img src={Img2} className="rounded-md w-[246px] h-[180px]" alt="img-2" />
          {/* img */}
          <div className=' grid gap-4'>
            <h3
              className="text-dark-color text-left font-['Heebo-Bold',_sans-serif] text-3xl font-bold relative"
            >
              Designing Dashboards
            </h3>
            <div className='w-[450px] flex gap-6'>
              <img className="min-w-[42px] object-none bg-black p-2 rounded-3xl" src={Img3} alt="" />
              <span className="text-light  font-['Heebo-Regular',_sans-serif] text-xl font-normal text-[#8695A4]  w-[374px] h-[34px]">
                Dashboard
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
        {renderLink()}
        {/* Link */}
      </div>
      <div className="flex gap-5 flex-col">
        <div className=' flex gap-5'>
          <img src={Img4} className="rounded-md w-[246px] h-[180px]" alt="img-2" />
          {/* img */}
          <div className=' grid gap-4'>
            <h3
              className="text-dark-color text-left font-['Heebo-Bold',_sans-serif] text-3xl font-bold relative"
            >
              Vibrant Portraits of 2020
            </h3>
            <div className='w-[450px] flex gap-6'>
              <img className="min-w-[42px] object-none bg-black p-2 rounded-3xl" src={Img5} alt="" />
              {/* Img */}
              <span className="text-light  font-['Heebo-Regular',_sans-serif] text-xl font-normal text-[#8695A4]  w-[374px] h-[34px]">
                Illustration
              </span>
            </div>
            <p
              className="text-dark-color text-left font-['Heebo-Regular',_sans-serif] text-base font-normal relative w-[594px] h-[93px]"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        {/* Link */}
        {renderLink()}
        {/* Link */}
      </div>
      <div className="flex gap-5 flex-col">
        <div className=' flex gap-5'>
          <img src={Img6} className="rounded-md w-[246px] h-[180px]" alt="img-2" />
          {/* img */}
          <div className=' grid gap-4'>
            <h3
              className="text-dark-color text-left font-['Heebo-Bold',_sans-serif] text-3xl font-bold relative"
            >
              36 Days of Malayalam type
            </h3>
            <div className='w-[450px] flex gap-6'>
              <img className="min-w-[42px] object-none bg-black p-2 rounded-3xl" src={Img5} alt="" />
              {/* Img */}
              <span className="text-light  font-['Heebo-Regular',_sans-serif] text-xl font-normal text-[#8695A4]  w-[374px] h-[34px]">
                Typography
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
        {renderLink()}
        {/* Link */}
      </div>
    </div>
  )
}

export default Article