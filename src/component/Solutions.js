import React from 'react'
import './Solutions.css'
import startups from './images/startups.svg'
import ecomm from './images/ecommerceFulfillment.svg'


export default function Solutions() {
  return (
    <div>
        <div className='services'>
            <h1>Services</h1>
            <hr class="hline"></hr>
            <div className='strips'>
                <div className='stripb'>
                    <img src={ecomm}></img>
                    <div>
                        <h3>D2C &amp; Ecommerce Fulfillment</h3>
                        <p>D2C &amp; e-commerce businesses juggle multiple tasks. From building versatile product shelves to guaranteeing timely delivery. Edgistify can make the journey easier for you. We enable swift processes through our warehousing and fulfillment network making your product at lightning-fast speed &amp; in the most cost-effective way.</p>
                    </div>
                </div>
                <div className='stripa'>
                    <div>
                        <h3>Enterprise Warehousing Fulfillment</h3>
                        <p>Edgistify can meet enterprise-level storage and Omnichannel fulfillment requirements. Our robust network provides storage solutions in multiple locations empowering you to decrease the time frame of your deliverability. Escalate your market presence with our distinctive Fulfillment services at minimum costs.</p>
                    </div>
                    <img src={ecomm}></img>
                </div>
                <div className='stripb'>
                    <img src={ecomm}></img>
                    <div>
                        <h3>Start-Up Logistics Support</h3>
                        <p>From managing inventory to fulfilling orders, a start-up has to be tremendously cautious at every step. Edgistify can be a part of your growth journey by making it smooth as silk. Our complete suite of logistics services can help you buckle up for the market.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
