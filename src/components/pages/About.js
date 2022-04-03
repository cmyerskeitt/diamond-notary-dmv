import React from "react"
import Headshot from '../images/Headshot1.jpg'
import NSA_Badge from '../images/nsa_member_badge.png'
import NSA_Trained_Badge from '../images/nsa-trained-badge-modified.png'
import './About.css'

class About extends React.Component{
  
 render(){
     return (
       
        <div>
            <h1 className="welcome"> Meet Your Notary Specialist</h1>
            <img src={Headshot} className='headshot' alt='Headshot'/>
            <br></br>
            <section className='credentials'> 
                <h2> <center> Deyonna Roberts, CEO</center></h2>
                <br></br>
                <ul>
                    <li>Notary for over 7 years (MD)</li>
                    <li>Licensed Title Producer (MD- TIPIC)</li>
                    <li>Experience notarizing banking, real estate and property management documents</li>
                    <li>Successfully completed over 200 signings</li> 
                    <li>Insured: E&O of $50,000</li>
                    <li>Completely Background Screened</li>
                    <li>Local, Black Woman Owned Business</li>
                </ul>
            </section>
            <section>
                        <img src={NSA_Badge} className='rounded float-start notaryBadge' alt='NSA Badge'/>
                        <img src={NSA_Trained_Badge} className='rounded float-end trainedBadge' alt='NSA Trained Badge'/>
            </section>
        </div> 
    
        )
    }
}



export default About