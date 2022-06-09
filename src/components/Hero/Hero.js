import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar";
import Sidebar from '../Sidebar/Sidebar';
import './Hero.css'

const Hero = () => {
    const [open, setOpen]=useState(false)

    const toggle=()=>{
        setOpen(!open)
    }

    return (
        <div className='hero-container'>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} open={open}/>
            <div className='hero-content'>
                <div className='hero-items'>
                    <h1>Greatest Pizza Every</h1>
                    <p>Ready in 60 seconds</p>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
