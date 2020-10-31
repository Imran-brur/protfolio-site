import React from 'react';
import Typical from 'react-typical';
import image from '../../../images/IMG_8062.JPG'
import './HomePart.css'

const HomePart = () => {
    return (
        <div>
            <h2 style={{paddingTop: '100px'}} className='text-success text-center'>Have patience. All things are difficult before they become easy.</h2>
            <h3 style={{textAlign: 'end', marginRight: '300px'}} className='text-white'>-Sheikh Saadi</h3>
            <div className='d-flex' style={{ paddingTop: '150px', opacity: '1'}}>
            <div className="col-md-6">
            <h1 className="lg-heading text-white">
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
                        'A Brain Master', 2000
                        ]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h2>       
            </div>
            <div className="col-md-6">
                <img className="img" src={image} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default HomePart;