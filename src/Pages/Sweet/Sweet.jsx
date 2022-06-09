import React,{useEffect} from "react";
import "./Sweet.css";
import { sweet } from "../data";
import { GiShoppingCart } from "react-icons/gi";
import Badge  from "@mui/material/Badge";
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useSelector } from "react-redux";
import UptadeCart from "../../hoc/addToCart";
import Footer from '../../components/Footer/Footer'

const Sweet = (props) => {

  const data = useSelector(state=>state.cart.product)
  const{ handleClick } = props

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <>
    <div className="sweetContainer">
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
    <Footer />
    </>
  );
};

export default UptadeCart(Sweet);
