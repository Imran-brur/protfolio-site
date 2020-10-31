import React from 'react';
import Header from '../Sheared/Header/Header';
import img from '../../images/IMG_8062.JPG';
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about text-white">
            <Header></Header>
            <div className='text-center'>
                <h1 style={{paddingTop: "100px"}}>LET ME <span className='text-success'>INTRODUCE MYSELF</span></h1>
            </div>
            <div className='row'>
                <div className="col-md-3">
                    <img className='img' src={img} alt=""/>
                </div>
        
                <div className="col-md-8 ml-5 mt-5">
                    <p style={{ fontSize: '25px' }}>I have held responsible positions in specializing as Full Stack Developer with sound knowledge over ReactJS for frontend and NodeJs for API Services. My practical experience also includes Web designing which is also my area of expertise. Acquired to maintain strong interpersonal relationships with teammates. I am passionate about providing care to my work. Always try to grab the new features of technology.</p>
                </div>
            </div>
                <div className='ml-5 mt-3'>
                    <h1>IMRAN KHAN</h1>
                    <h2 className='text-success'>WEB DEVELOPER</h2>
                </div>
            <div class="row ml-5 mt-5">
                <div class="col-md-5">
                    <div style={{fontSize: '20px', height: '322px'}} class="card bg-dark p-3">
                    <h2 className='text-success'>PERSONAL INFO</h2>
                       <p><b>Name</b>    : Imran Khan</p>
                       <p>Bsc in Computer Science & Engineering</p>
                       <p>Begum Rokeya University, Rangpur</p>
                       <p><b>Blood Group</b> : B+</p>
                       <p><b>Nationality</b> : Bangladesh</p>
                    </div>
                </div>
                <div class="col-md-5 ml-5">
                    <div style={{fontSize: '20px'}} class="card bg-dark p-3">
                        <h2 className='text-success'>SKILL</h2>
                        <p><b>Web</b> : Javascript, ES6, React, React Router, NodeJs, HTML, CSS, Bootstrap, Material UI, REST API</p>
                        <p><b>Database</b> : MongoDB, Express JS, Firebase</p>
                        <p><b>Tools</b> : Git, Netlify, VS Code, Firebase, Heroku, Figma, Chrome Dev Tools, NPM</p>
                        <p><b>OS</b> : Windows, Linux</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 mr-5'>
                <a href="https://drive.google.com/u/0/uc?id=1HjJRaRGZoMC6HqCBGtKw1OlBjJGAOZWI&export=download"  rel="noopener noreferrer" target="_blank">
                <button class="btn btn-outline-light btn-lg">DOWNLOAD RESUME</button>
                </a>          
            </div>
        </div>
    );
};

export default About;
