import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import MobileApp from '../Components/MobileApp'
import Footer from '../Components/Footer'
import Menu from '../Components/Menu'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <MobileApp />
            <Footer />
        </>
    )
}

export default Home