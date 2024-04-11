import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Blog = () => {
  return (
    <>
    <div className='navbar'>
      <Navbar />
    </div>
    <hr />
      <div className="flex flex-col items-center  px-[148px] mt-[100px] mb-[50px]  bg-white">
        <h1 className="flex-shrink-0 w-[9.75rem] h-[3.375rem] text-[#21243d] font-['Heebo'] text-[2.75rem] font-bold leading-[60px] text-left relative left-[-21%]">Blog</h1>
        <div className='w-[700px] p-[20px] grid gap-3'>
        <h2 className="flex-shrink-0 w-[682px] h-[2.0625rem] text-[#21243d] font-['Heebo'] text-3xl font-medium leading-[normal]">UI Interactions of the week</h2>
        <div className="flex">
        <strong className="flex-shrink-0 w-[13.375rem] h-[1.5625rem] text-[#21243d] font-['Heebo'] text-xl leading-[normal]">12 Feb 2019</strong> 
        <span className="flex-shrink-0 w-[23.375rem] h-[2.125rem] text-[#8695a4] font-['Heebo'] text-xl leading-[normal]">Express, Handlebars</span>
        </div>
        <p className="flex-shrink-0 w-[682px] h-[2.6875rem] text-[#21243d] font-['Heebo'] leading-[normal]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className='w-[700px] p-[20px] grid gap-3'>
        <h2 className="flex-shrink-0 w-[682px] h-[2.0625rem] text-[#21243d] font-['Heebo'] text-3xl font-medium leading-[normal]">UI Interactions of the week</h2>
        <div className="flex">
        <strong className="flex-shrink-0 w-[13.375rem] h-[1.5625rem] text-[#21243d] font-['Heebo'] text-xl leading-[normal]">12 Feb 2019</strong> 
        <span className="flex-shrink-0 w-[23.375rem] h-[2.125rem] text-[#8695a4] font-['Heebo'] text-xl leading-[normal]">Express, Handlebars</span>
        </div>
        <p className="flex-shrink-0 w-[682px] h-[2.6875rem] text-[#21243d] font-['Heebo'] leading-[normal]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className='w-[700px] p-[20px] grid gap-3'>
        <h2 className="flex-shrink-0 w-[682px] h-[2.0625rem] text-[#21243d] font-['Heebo'] text-3xl font-medium leading-[normal]">UI Interactions of the week</h2>
        <div className="flex">
        <strong className="flex-shrink-0 w-[13.375rem] h-[1.5625rem] text-[#21243d] font-['Heebo'] text-xl leading-[normal]">12 Feb 2019</strong> 
        <span className="flex-shrink-0 w-[23.375rem] h-[2.125rem] text-[#8695a4] font-['Heebo'] text-xl leading-[normal]">Express, Handlebars</span>
        </div>
        <p className="flex-shrink-0 w-[682px] h-[2.6875rem] text-[#21243d] font-['Heebo'] leading-[normal]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className='w-[700px] p-[20px] grid gap-3'>
        <h2 className="flex-shrink-0 w-[682px] h-[2.0625rem] text-[#21243d] font-['Heebo'] text-3xl font-medium leading-[normal]">UI Interactions of the week</h2>
        <div className="flex">
        <strong className="flex-shrink-0 w-[13.375rem] h-[1.5625rem] text-[#21243d] font-['Heebo'] text-xl leading-[normal]">12 Feb 2019</strong> 
        <span className="flex-shrink-0 w-[23.375rem] h-[2.125rem] text-[#8695a4] font-['Heebo'] text-xl leading-[normal]">Express, Handlebars</span>
        </div>
        <p className="flex-shrink-0 w-[682px] h-[2.6875rem] text-[#21243d] font-['Heebo'] leading-[normal]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      <hr />
      <div className='footer mt-[-40px] '>
      <Footer />
      </div>
    </>
  )
}

export default Blog