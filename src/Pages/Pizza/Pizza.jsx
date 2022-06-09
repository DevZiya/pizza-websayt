import React,{useEffect} from "react";
import "./Pizza.css";
import { pizza } from "../data";
import { GiShoppingCart } from "react-icons/gi";
import Badge  from "@mui/material/Badge";
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import UptadeCart from "../../hoc/addToCart";
import { useSelector } from "react-redux";
import Footer from '../../components/Footer/Footer'

const Pizza = (props) => {

  const{ handleClick } = props
  const data = useSelector(state=>state.cart.product)

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <>
    <div className="pizzaContainer">
      <div className="icons">
        <Link to="/"><button>Back To Home</button></Link>
        <Badge badgeContent={data.length} color="success">
        <Link to='/cart'><GiShoppingCart className="icon" color="action" /></Link> 
        </Badge>
      </div>
      {pizza.map((pizza) => (
        <div className="cartBox"
        key={pizza.id}
        data-aos="fade-right"
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
    </>
  );
};

export default UptadeCart(Pizza);
