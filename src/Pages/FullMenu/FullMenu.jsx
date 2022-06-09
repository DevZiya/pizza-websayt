import React,{useEffect} from "react";
import "./FullMenu.css";
import { sweet,pizza } from "../data";
import { GiShoppingCart } from "react-icons/gi";
import Badge  from "@mui/material/Badge";
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useSelector } from "react-redux";
import UptadeCart from "../../hoc/addToCart";
import Footer from '../../components/Footer/Footer'

const FullMenu = (props) => {
  const data = useSelector(state=>state.cart.product)
  const{ handleClick } = props

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <div className="fullContainer">
      <div className="sweet">
      <div className="icons">
        <Link to="/"><button>Back To Home</button></Link>
        <Badge badgeContent={data.length} color="success">
         <Link to='/cart'><GiShoppingCart className="icon" color="action" /></Link> 
        </Badge>
      </div>
      {sweet.map((sweet) => (
        <div className="cartBox"
        data-aos="fade-right"
        data-aos-delay='40'
        key={sweet.id}
        >
          <div className="image">
            <img src={sweet.img} alt={sweet.alt} />
          </div>
          <div className="text">
            <h3>{sweet.name}</h3>
            <span>{sweet.desc}</span>
            <div className="btn">
              <p>{sweet.price}</p>
              <button onClick={()=>handleClick(sweet)}>{sweet.button}</button>
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className="pizza">
      {pizza.map((pizza) => (
        <div className="cartBox"
        key={pizza.id}
        data-aos="fade-left"
        data-aos-delay='40'
        >
          <div className="image">
            <img src={pizza.img} alt={pizza.alt} />
          </div>
          <div className="text">
            <h3>{pizza.name}</h3>
            <span>{pizza.desc}</span>
            <div className="btn">
              <p>{pizza.price}</p>
              <button onClick={()=>handleClick(pizza)}>{pizza.button}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default UptadeCart(FullMenu);
