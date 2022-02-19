import React from 'react'
import './Home.css'
import card1 from './images/flexibility.svg'
import card2 from './images/platformDriven.svg'
import card3 from './images/strongNetwork.svg'
import india from './images/edgistify-network.gif'
import flipkart from './images/flipkart.png'
import jio from './images/jio.png'
import marico from './images/marico.png'
import mcaffeine from './images/mcaffeine.png'
import pureplay from './images/pureplay.webp'
import udaan from './images/udaan.png'
import wakefit from './images/wakefit.png'
import grofers from './images/grofers.png'

export default function Home() {
  return (
    <div className='Home'>
        <div className='getintouch'>
            <p className='getintouch_para'>
            Warehousing &amp; Fulfillment Network ensuring Amazon &amp; Flipkart like next day delivery
            </p>
            <button className='getintouch_btn'> Get in Touch</button>
        </div>
        <div className='cards'>
            <div className='card'>
                <img src={card1}></img>
                <h2>Flexible Inventory Storage</h2>
                <p>We store your inventory closer to your customers using our vast geographical strong reach.</p>
            </div>
            <div className='card'>
                <img src={card2}></img>
                <h2>Omnichannel Inventory Management</h2>
                <p>Single dashboard to manage &amp; reconcile all your online and offline orders.</p>
            </div>
            <div className='card'>
                <img src={card3}></img>
                <h2>Optimized Quality Service</h2>
                <p>Ensure 8-16% reduction in cost structure with strictly following industry optimized processes.</p>
            </div>
        </div>
        <div className='india'>
            <h1>India’s largest Ecommerce fulfillment platform</h1>
            <hr class="hline"></hr>
            <p>We aim to make logistics simple, scalable &amp; flexible. Establish an adaptable warehousing network that befits your logistics requirements by connecting with us.</p>
            <img src={india}></img>
        </div>
        <div className='companies'>
            <h1>Trusted by more than 200 companies</h1>
            <hr class="hline"></hr>
            <div className='company'>
                <img src={pureplay}></img>
                <img src={wakefit}></img>
                <img src={marico}></img>
                <img src={mcaffeine}></img>
                <img src={jio}></img>
                <img src={flipkart}></img>
                <img src={udaan}></img>
                <img src={grofers}></img>
            </div>    
        </div>
        <div className='contactus'>
            <span>Create <strong>on-demand warehousing</strong> and <strong>fulfillment network</strong></span>
            <button className='getintouch_btn'>Contact Us</button>
        </div>

    </div>
  )
}
