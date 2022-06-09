import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaYoutube } from 'react-icons/fa'
import './Fotter.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-wrap'>
                <div className='sosial-media'>
                    <div className='sosial-mediaWrap'>
                        <Link to='/' className='logo'>Pizza</Link>
                        <div className='sosial-icons'>
                            <a href='/' target='_blank' aria-label='Facebook' className='sosial-link'><FaFacebook /></a>
                            <a href='/' target='_blank' aria-label='Instagram' className='sosial-link'><FaInstagram /></a>
                            <a href='/' target='_blank' aria-label='Youtube' className='sosial-link'><FaYoutube /></a>
                            <a href='/' target='_blank' aria-label='Twitter' className='sosial-link'><FaTwitter /></a>
                            <a href='/' target='_blank' aria-label='Linkedin' className='sosial-link'><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
