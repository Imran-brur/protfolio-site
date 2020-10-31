import React from 'react';

const Header = () => {
    return (
        <div>
            <div class="fixed-top">   
            <nav class="navbar navbar-dark">
                <button class="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
                <div style={{opacity: .9}} class="bg-white p-2 d-flex justify-content-center">
                <ul style={{fontSize: "20px"}} class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">HOME<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">ABOUT ME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects">PROJECTS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/blogs">BLOG</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contactMe">CONTACT ME</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;