import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';
import image from '../../../images/IMG_8062.JPG'
import './HomePart.css'

const HomePart = () => {
    return (
        <div>
            <h2 style={{paddingTop: '80px'}} className='text-success text-center'>Have patience. All things are difficult before they become easy.</h2>
            <h3 style={{textAlign: 'end', marginRight: '300px'}} className='text-white'>-Sheikh Saadi</h3>
            <div className=' ml-5' style={{ paddingTop: '40px', opacity: '1'}}>
            <div className=" col-md-12">
                <img style={{ height: '300px', width: '300px', borderRadius: '50%'}} src={image} alt=""/>
            <h1 style={{fontSize: '80px'}} className="lg-heading text-white">
            IMRAN
            <span className="text-success"> KHAN</span>
            </h1>
                <h2 className="sm-heading text-white">
                    I am {' '}
                    <Typical
                        steps={[
                        'A Web Developer', 2000, 
                        'A Programmer', 2000,
                        'A Designer', 2000,
                        'A Front-End Developer', 2000
                        ]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h2> 
                <div className="mt-3">
                    <a style={{height: '100px',}} className="p-3" target="_blank" href="https://www.facebook.com">
                        <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                    </a>
                    <a className="p-3" target="_blank" href="hhttps://www.linkedin.com/in/lmran-khan-483933182/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <a className="p-3" target="_blank" href="https://github.com/Imran-brur">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                </div>  
                   <div className="mt-4">
                   <a href="https://drive.google.com/u/0/uc?id=1HjJRaRGZoMC6HqCBGtKw1OlBjJGAOZWI&export=download"  rel="noopener noreferrer" target="_blank">
                            <button class="btn btn-outline-success p-2 m-2">DOWNLOAD RESUME</button>
                    </a> 
                    <a href="/contact"  rel="noopener noreferrer" target="_blank">
                            <button class="btn btn-outline-danger p-2">HIRE ME</button>
                    </a>    
                    </div>  
            </div>
            </div>
        </div>
    );
};

export default HomePart;