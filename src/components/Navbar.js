import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './images/DiamondNotaryDMVLogo.jpg'
// import './Navbar.css'

function Navbar() {  
    return (
     
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                {/* <Link to='/' class="navbar-brand" >
                    <img src={Logo} width="100" height="100" class="d-inline-block align-text-top" alt='Diamond Notary Logo'/>       
                </Link> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                                <Link to='/services' class="nav-link" aria-current="page" > 
                                Services
                                </Link>
                        </li>
                        <li class="nav-item">
                                <Link to='/about' class="nav-link" aria-current="page" > 
                                    About
                                </Link>
                         </li>
                        <li class="nav-item">
                                <Link to='/contact' class="nav-link" aria-current="page" > 
                                    Contact
                                </Link>
                        </li>  
                    </ul>
                </div> 
            </div>
            <li class="nav-item dropdown">
                    <Link to='/' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Diamond Notary DMV, LLC
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li class="dropdown-item">
                            <Link to='/' class="nav-link active">Home</Link>
                        </li>
                        <li class="dropdown-item">
                                <Link to='/services' class="nav-link" > 
                                Services
                                </Link>
                        </li>
                        <li class="dropdown-item">
                                <Link to='/about' class="nav-link" > 
                                    About
                                </Link>
                         </li>
                        <li class="dropdown-item">
                                <Link to='/contact' class="nav-link" > 
                                    Contact
                                </Link>
                        </li>  
                    </ul>
                </li>
        </nav>
      
    )
}

export default Navbar
