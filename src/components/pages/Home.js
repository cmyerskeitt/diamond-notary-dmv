import React from 'react'
import NSA_Badge from '../images/nsa_member_badge.png'
import NSA_Trained_Badge from '../images/nsa-trained-badge.png'
import Logo from '../images/DiamondNotaryDMVLogo.jpg'
import './Home.css'

function Home() {
    return (
        <div class="container-fluid">
            <div className="b-example-divider">
                {/* <h1 className='welcome display-1'> Welcome to Diamond Notary DMV, LLC.</h1> */}
                <h1 className='info'> Looking for a Notary?</h1>
                <section class="card">
                <img src={Logo} class="card-img-top" alt="Diamond DMV Logo"/> 
                {/* <h2 className="info"> Looking for a notary? </h2>   */}
                <h2 className='welcome display-1'> Welcome to Diamond Notary DMV, LLC.</h2> 
                    <section class="card-body"> 
                    <br></br>
                        <h3 className='card-text'> Commision a professional Notary agent with over 10 years  of experience in:</h3>
                            <ul >
                                <li > accounting</li>
                                <li> real estate</li>
                                <li> property management</li>
                            </ul>
                            <img src={NSA_Badge} className='rounded float-start' alt='NSA Badge'/>
                            <img src={NSA_Trained_Badge} className='rounded float-end' alt='NSA Trained Badge'/>
                            <br></br>
                            <br></br>
                            <br></br>  
                            <h3 className='card-text'> <em> Call (240) 424-9577 </em><br></br>Schedule your signing with Notary Agent Deyonna Roberts today! <br></br> My reliability and attention to detail will make you a happy returning customer. </h3>
                            
                    </section>
                </section>   
                <footer className='info1'>
                    <br></br>
                    <h2>
                        
                        Hours of Operation <br></br>
                        Monday-Friday: 3pm - 9pm <br></br>
                        Saturday: 9 am - 9pm <br></br>
                        Sunday: 9 am - 9 pm 
                    </h2> 
                </footer>
            </div>
        </div>
    )
}

export default Home
