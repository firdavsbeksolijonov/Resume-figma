import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Middle from './components/Middle';
import Article from './components/Article';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Middle/>
        <Article/>
        <Footer/>
    </>
  )
}

export default Home