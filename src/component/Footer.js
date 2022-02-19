import React from 'react'
import './Footer.css'
import name from './images/name.png'

export default function Footer() {
  return (
    <div>
    <div className='footer_items'>
        <div className='footer_item'>
            <img src={name}></img>
            <p>Edgistify is India's Largest Plug &amp; Play Warehousing &amp; fulfillment Network helping D2C brands, SME's, Legacy Businesses, E-commerce sellers provide Amazon &amp; Flipkart like next day delivery.</p>
        </div>
        <div className='footer_item'>
            <ul>
                <h3>Company</h3>
                <li><a href='#'>Mentors</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </div>
        <div className='footer_item'>
            <ul>
                <h3>Newsroom</h3>
                <li><a href='#'>Awards</a></li>
                <li><a href='#'>Media &amp; Mentions</a></li>
            </ul>
        </div>
        <div className='footer_item'>
            <ul>
                <h3>Social Media</h3>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Linkedin</a></li>
                <li><a href='#'>Twitter</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Youtube</a></li>
            </ul>
        </div>
    </div>
    <div className='bottom'>
        <h5>© 2021 OptiSupply Chain Solution Pvt Ltd | All Rights Reserved</h5>
        <h5 className='left'><a>Privacy Policy</a></h5>
        <h5><a>Terms &amp; Conditions</a></h5>
        <h5><a>Sitemap</a></h5>
    </div>
    </div>
  )
}
