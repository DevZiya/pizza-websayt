import React, { useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Cart.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrese,getTotals } from "../../Redux/cartReducer";
import Footer from '../../components/Footer/Footer'

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const decresCart = (item)=>{
    dispatch(decrese(item))
  }

  const incretCart = (item)=>{
    dispatch(addToCart(item))
  }

  useEffect(()=>{
    dispatch(getTotals())
  },[data,dispatch])

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
    <div className="cartContainer">
      <div className="total">
        <Link to="/">
          <button>Back to Menu</button>
        </Link>
        <span>Total:{data.totalPrice}$</span>
      </div>
      {data.product.map((item) => (
        <div
          className="cartBox"
          data-aos="zoom-out-down"
          data-aos-delay="40"
          key={item.id}
        >
          <div className="image">
            <img src={item.img} alt="img" />
          </div>
          <div className="text">
            <h3>{item.name}</h3>
            <span>{item.desc}</span>
            <div className="btn">
              <p>{item.price}</p>
              <div className="button">
                <FaMinus className="icon" onClick={()=>decresCart(item)}/>
                <span>{item.cartQuantity}</span>
                <FaPlus className="icon" onClick={()=>incretCart(item)}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cart;
