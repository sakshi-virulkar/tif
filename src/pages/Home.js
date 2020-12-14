import React from 'react'
import Navbar from '../components/Nav' 
import Getstarted from "../components/Getstarted"
import Lowerbox from "../components/Lowerbox";
import Boost from '../components/Boost';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
           <Navbar />
           <Getstarted />
           <Lowerbox />
           <Boost />
           <Footer /> 
        </div>
    )
}
