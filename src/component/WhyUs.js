import React from 'react'

import './WhyUs.css'
import './FAQ.css'
import card1 from './images/operationalEfficiency.svg'
import card2 from './images/flexibility.svg'
import card3 from './images/strongNetwork.svg'
import card4 from './images/retailFulfillment.svg'
import FAQ from './FAQ'

export default function WhyUs() {
  return (
    <div>
        <div className='india'>
            <h1>How are we different</h1>
            <hr class="hline"></hr>
            <p>Warehousing &amp; Fulfillment requirements call for simplification of process and insights at a glance. Edgistify delivers on both of these promises.</p>
        </div>
        <div className='WhyCards'>
            <div className='card'>
                <img src={card1}></img>
                <h2>One point solution</h2>
                <p>We provide a holistic view &amp; control over all orders to bring about simplification across all the touch points.</p>
            </div>
            <div className='card'>
                <img src={card2}></img>
                <h2>Flexibility</h2>
                <p>Our plug and play model helps you to scale your requirements as &amp; when required.</p>
            </div>
            <div className='card'>
                <img src={card3}></img>
                <h2>Cost Efficiency</h2>
                <p>Our well-built network of service providers enables us to give you the most pocket-friendly options.</p>
            </div>
            <div className='card'>
                <img src={card4}></img>
                <h2>Speedy Fulfillment</h2>
                <p>We set up your inventory in locations closest to your customer through our wide geographic reach.</p>
            </div>
        </div>
        <div className='emailform'>
            <span>Subscribe for <strong>news and updates</strong></span>
            <form><input class="form" type="email" id="email" name="email" placeholder='Enter your email'></input></form>
            <button className='btn'><span>&#8594;</span></button>
        </div>
        <FAQ/>
    </div>
  )
}
