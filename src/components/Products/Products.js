import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Products.css'


const Products = ({data,heading,handleClick}) => {

    useEffect(()=>{
        Aos.init({duration:3000})
    },[])

    return (
        <div className='products-container'>
            <div className='head'>{heading}</div>

            <div className='product-wrapper'>
                {
                    data.map((product)=>(
                        <div className='card' 
                        key={product.id}
                        data-aos="flip-up"
                         data-aos-delay='40'
                        >
                            <img src={product.img} alt={product.alt} />
                            <div className='info'>
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                                <span>{product.price}</span>
                                <button onClick={()=>handleClick(product)}>{product.button}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
