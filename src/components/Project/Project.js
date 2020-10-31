import React from 'react';
import Header from '../Sheared/Header/Header';
import img1 from '../../images/1 Landing page.png';
import img2 from '../../images/2 Landing page.png';
import img3 from '../../images/Screenshot 2020-10-31 101615.png';
import './Project.css';

const Project = () => {
    return (
        <div className="project">
            <Header></Header>
            <div style={{paddingTop: '200px'}} class="d-flex justify-content-center row">
                <div className='col-12'>
                <h1 className='text-center'>MY <span className='text-success'>PROJECTS</span></h1>
                </div>
                <div class="card col-md-3  m-5">
                    <img style={{height: '317px'}} src={img1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <a href="https://creative-agency-32dca.web.app/"  rel="noopener noreferrer" target="_blank">
                    <button class="btn btn-outline-success m-3">LIVE</button>
                    </a> 
                    <a href="https://github.com/Imran-brur/creative-agency-client"  rel="noopener noreferrer" target="_blank">
                    <button class="btn btn-outline-secondary">Github</button>
                    </a>
                    </div>
                </div>
                <div class="card col-md-3  m-5">
                    <img style={{height: '317px'}} src={img2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <a href="https://volenteer-site.web.app/"  rel="noopener noreferrer" target="_blank">
                    <button class="btn btn-outline-success m-3">LIVE</button>
                    </a>
                    <a href="https://github.com/Imran-brur/travel-guru"  rel="noopener noreferrer" target="_blank">
                    <button class="btn btn-outline-secondary">Github</button>
                    </a>
                    </div>
                </div>
                <div class="card col-md-3 m-5">
                    <img style={{height: '317px'}} src={img3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <a href="https://travel-guru-assingment.web.app/"  rel="noopener noreferrer" target="_blank">
                    <button class="btn btn-outline-success m-3">LIVE</button>
                    </a>
                    
                    <a href="https://github.com/Imran-brur/volenteer-client-site"  rel="noopener noreferrer" target="_blank">
                    <button class="btn btn-outline-secondary">Github</button>
                    </a>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Project;