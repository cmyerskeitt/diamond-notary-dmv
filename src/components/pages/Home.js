import React from 'react'
import NSA_Badge from '../images/nsa_member_badge.png'
import NSA_Trained_Badge from '../images/nsa-trained-badge.png'
import Logo from '../images/DiamondNotaryDMVLogo.jpg'
import './Home.css'

function Home() {
    return (
        <div className="b-example-divider">
            <h1 className='welcome display-1'> Welcome to Diamond Notary DMV, LLC.</h1>
            <section class="card">
            <img src={Logo} class="card-img-top" alt="Diamond DMV Logo"/> 
            <h2 className="info"> Looking for a notary? </h2>   
                <section class="card-body"> 
                    <h3 className='card-text'>Commision a professional Notary/Loan Signing agent with over 10 years  of experience related to:</h3>
                        <ul>
                            <li> accounting</li>
                            <li> real estate</li>
                            <li> property management</li>
                        </ul>
                        <img src={NSA_Badge} className='rounded float-start' alt='NSA Badge'/>
                        <img src={NSA_Trained_Badge} className='rounded float-end' alt='NSA Trained Badge'/>
                        <br></br>
                        <h2> My reliability and attention to detail will make you a happy returning customer. </h2>
                </section>
            </section>   
            <section className='info1'>
                <h2><em>Call Me Today to Schedule Your Signing!</em><br></br>(240)-424-9577</h2>
                <br></br>
                <h2>
                    Hours of Operation <br></br>
                    Monday-Friday: 3pm - 9pm <br></br>
                    Saturday: 9 am - 9pm <br></br>
                    Sunday: 9 am - 9 pm 
                </h2> 
            </section>
        </div>
    )
}

export default Home
