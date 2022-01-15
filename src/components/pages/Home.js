import React from 'react'
import NSA_Badge from '../images/nsa_member_badge.png'
import NSA_Trained_Badge from '../images/nsa-trained-badge.png'
import Logo from '../images/DiamondNotaryDMVLogo.jpg'
import './Home.css'

function Home() {
    return (
        <div className="b-example-divider">
            <h1 className='welcome display-1'> Welcome to Diamond Notary DMV, LLC.</h1>
                <div class="card">
                    <img src={Logo} class="card-img-top" alt="Diamond DMV Logo"/>   
                <div class="card-body">
                <h2 className='info card-text '> Commision a professional Notary and Loan Signing agent with over 10 years  of experience notarizing accounting, real estate and property management documents. My reliability and attention to detail will make you a happy returning customer. </h2>
                </div>
            </div>    
            {/* <h2 className='info card-text '> Commision a professional Notary and Loan Signing agent with over 10 years  of experience notarizing accounting, real estate and property management documents. My reliability and attention to detail will make you a happy returning customer. 
            <br/> 
            <br/>
            <label className="info1 card-title">Call Me Today to Schedule Your Signing!
            <br/>
            (240)-424-9577
            </label>
            </h2>
            <h2 className='hours btn btn-success'> Hours of Operation <br></br>
            Monday-Friday: 3pm - 9pm <br></br>
            Saturday: 9 am - 9pm <br></br>
            Sunday: 9 am - 9 pm </h2>
            <img src={NSA_Badge} className='rounded float-start"' alt='NSA Badge'/>
            <img src={NSA_Trained_Badge} className='rounded float-end' alt='NSA Trained Badge'/>
        
            <br></br> */}
           
        </div>
    )
}

export default Home
