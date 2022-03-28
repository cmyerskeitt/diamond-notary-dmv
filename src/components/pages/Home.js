import React from 'react'
import NSA_Badge from '../images/nsa_member_badge.png'
import NSA_Trained_Badge from '../images/nsa-trained-badge.png'
import Logo from '../images/DiamondNotaryDMVLogo.jpg'
import './Home.css'

function Home() {
    return (
        <div class="container-fluid">
            <div className="b-example-divider">
                <h1 className='info'> Looking for a Notary?</h1>
                <section className="card">
                <h2 className='welcome display-1'> Welcome to Diamond Notary DMV, LLC.</h2> 
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F60209f40dacf4b64ff2dcd1c%2F1613179570008-V0O0E15KZ54JYJPUUZNF%2Fke17ZwdGBToddI8pDm48kEt_v2EX9GtAJgLtqLXx-3J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe6CRawwjMbRFT4hbu0QnHz9xuVto2nJwMxrL2rUquKQ0A%2Fimage-asset.jpeg%3Fformat%3D2500w&f=1&nofb=1' className='capital' alt="Capital BUilding"></img>
                </section>  
                <h4 className='info1' id="deyonna"> Commission Notary Agent Deyonna Roberts </h4>
                <section className="card-text">
                    <h3 className="card-text"> With over 10 years  of professional experience specializing in: </h3>
                    <ul className="list">
                        <li> Accounting</li>
                        <li> Real Estate </li>
                        <li> Property Management</li>
                    </ul> 
                    <h4 className="card-text"> My reliability and attention to detail will make you a happy returning customer.</h4>
                </section>
              
                            {/* <img src={NSA_Badge} className='rounded float-start' alt='NSA Badge'/>
                            <img src={NSA_Trained_Badge} className='rounded float-end' alt='NSA Trained Badge'/> 
                    <h3> Call (240) 424-9577 </h3> */}
             
                <footer className='info1'>
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
