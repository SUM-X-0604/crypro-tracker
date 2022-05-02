import React from 'react'
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Link to='/'>
            <div className='footer'>
                <BiUserCircle className='icons' />
                <h1>Devdeloped By <span className='purple'>Sumit</span></h1>
            </div>
        </Link>
    )
}

export default Footer