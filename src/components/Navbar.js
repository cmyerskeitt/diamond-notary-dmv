import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './images/DiamondNotaryDMVLogo.jpg'
import './Navbar.css'

function Navbar() {  
    return (
     
        <nav className="navbar navbar-expand-lg bg-dark">
            {/* fixed-top */}
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" >
                    <img src={Logo} width="150" height="150" alt='Diamond Notary Logo'/>       
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                                <Link to='/pricing' className="nav-link" aria-current="page" > 
                               Pricing
                                </Link>
                        </li>
                        <li className="nav-item">
                                <Link to='/about' className="nav-link" aria-current="page" > 
                                    About
                                </Link>
                         </li>
                        <li className="nav-item">
                                <Link to='/contact' className="nav-link" aria-current="page" > 
                                    Contact
                                </Link>
                        </li>  
                    </ul>
                </div> 
            </div>
            <li className="nav-item dropdown">
                    <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Diamond Notary DMV, LLC
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="dropdown-item">
                            <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="dropdown-item">
                                <Link to='/pricing' className="nav-link" > 
                                Pricing
                                </Link>
                        </li>
                        <li className="dropdown-item">
                                <Link to='/about' className="nav-link" > 
                                    About
                                </Link>
                         </li>
                        <li className="dropdown-item">
                                <Link to='/contact' className="nav-link" > 
                                    Contact
                                </Link>
                        </li>  
                    </ul>
                </li>
        </nav>
      
    )
}

export default Navbar
