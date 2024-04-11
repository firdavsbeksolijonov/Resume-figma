import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img9 from '../images/img-3.2020.png'
import Img10 from '../images/img-10.png'
import Img11 from '../images/car-img-11.png'
import Img12 from '../images/img-12.png'


const WorkDetails = () => {
  const { id } = useParams()
  console.log(+id)
  return (
    <div className='main-detail'>
      <div className="navbar">
        <Navbar />
      </div>
      <hr />
      <div className='flex gap-6  items-center justify-center px-[148px] flex-col mt-8'>
        <div className="flex gap-5 p-5">
          <div className=' grid gap-4'>
            <h3
              className="text-dark-color text-left font-['Heebo-Bold',_sans-serif] text-3xl font-bold relative"
            >
              Designing Dashboards with <br /> usability in mind
            </h3>
            <div className='w-[450px] flex gap-6'>
              <img className="min-w-[42px] object-none bg-orange-500 p-2 rounded-3xl" src={Img9} alt="" />
              {/* Img */}
              <span className="text-light  font-['Heebo-Regular',_sans-serif] text-xl font-normal text-[#8695A4]  w-[374px] h-[34px]">
                Dashboard, User Experience Design
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
        <img className='mt-[-20px]' src={Img10} alt="" />
      </div>
      <div className='flex gap-6  items-center justify-center px-[148px] flex-col mt-8'>
        <div className="flex flex-col p-5 gap-2 w-[680px]">
          <h1 className="flex-shrink-0 w-[506px] h-[2.8125rem] text-[#21243d] font-['Heebo'] text-3xl font-medium leading-[60px]">Heading 1</h1>
          <div className="flex-shrink-0 w-[506px]  text-[#21243d] font-['Heebo'] text-2xl font-medium leading-[60px]">Heading 2</div>
          <p className="w-[597px] text-black font-['Heebo'] leading-[normal]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <img src={Img11} alt="" />
      </div>
      <div className='flex gap-6  items-center justify-center px-[148px] flex-col mt-8 mb-7'>
        <img src={Img12} alt="" />
      </div>
      <div className='footer'>
        <hr />
        <Footer />
      </div>
    </div>
  )
}

export default WorkDetails