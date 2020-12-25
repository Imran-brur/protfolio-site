
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container' style={{fontSize: '18px'}}>
            <nav class="navbar navbar-expand-lg navbar-light">
                <h2 className='text-dark'>IMRAN <span style={{color: 'orangered'}}>X</span></h2>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-dark"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ml-auto text-center">
                    <li class="nav-item active">
                        <Link className="nav-link text-dark mr-5" to="/home">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark mr-5" to="/about">ABOUT</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark mr-5" to="/projects">PROJECTS</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark mr-5" to="/blogs">BLOGS</Link>
                    </li> 
                    <li class="nav-item">
                        <Link className="nav-link text-dark mr-5" to="/ContactMe">CONTACT</Link>
                    </li>
                    <li class="nav-item">
                        <a href="https://drive.google.com/u/0/uc?id=1HjJRaRGZoMC6HqCBGtKw1OlBjJGAOZWI&export=download"  rel="noopener noreferrer" target="_blank">
                            <button class="btn btn-outline-dark mr-5">RESUME</button>
                        </a>  
                    </li>            
                    </ul>
                </div>          
            </nav>
        </div>
        
    );
};

export default Header;