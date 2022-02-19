import React, {useState} from 'react'
import logo from './images/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

import './Navbar.css'

export default function Navbar() {
const [click, setClick]=useState(false)

const handleClick = () => setClick(!click)
  return (
    <div className='header'>
        <nav className='navbar'>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color:'white'}}/>):(<FaBars size={30} style={{color:'white'}}/>)}
            </div>
            <a href='/' className='logo'>
                <img  src={logo} alt="logo"></img>
            </a>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <a href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Solutions</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Why Us</a>
                </li>
                <li className='nav-item'>
                    <button className='menubtn'>Schedule A Call</button>
                </li>
                <li className='nav-item'>
                    <button className='menubtn'>Partner With Us</button>
                </li>
            </ul>
        </nav>
        
    </div>
  )
}
