import React, { useEffect } from 'react'
import './Feature.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Feature = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className='feature-container'
        data-aos="slide-up"
        data-aos-delay='40'
        >
              <h1>Pizza of the Day</h1>
              <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
              <button>Order Now</button>
        </div>
    )
}

export default Feature
