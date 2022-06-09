import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({toggle,open}) => {
    return (
            <div className={open ? 'sidebar-container' : ' sidebar-container active'}  onClick={toggle}>
            <div className='sidebar-menu'>
               <Link to='/pizzaMenu' className='links'>Pizzas</Link> 
               <Link to='/sweetMenu' className='links'>Desserts</Link> 
               <Link to='/fullMenu' className='links'>Full menu</Link>
            </div>

            <div className='sidebar-btn'>
                <Link to='/cart' className='link-btn'>Order Now</Link> 
            </div>
        </div>
    )
}

export default Sidebar
