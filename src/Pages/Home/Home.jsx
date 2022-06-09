import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import { productData, productDataTwo } from "../../components/Products/data";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import onLoads from '../../images/onLoad.gif'
import UptadeCart from "../../hoc/addToCart";
import './Home.css'


const Home = (props) => {
  const [load,setLoad]=useState(true)
  const{ handleClick } = props

  const onLoad = () =>{
    setInterval(()=>{
      setLoad(false)
    },5000)
  }

  return (
    <div className='homeContainer'>
        <div className={load ? 'onload':'onload active'} onLoad={onLoad}>
            <img src={onLoads} alt="img" />
        </div>
        <Hero />
        <Products data={productData} handleClick={handleClick} heading="Choose your favorite" />
        <Feature />
        <Products data={productDataTwo} handleClick={handleClick} heading="Sweet Treats for you" />
        <Footer />
    </div>
  );
};

export default UptadeCart(Home);
