import React from 'react';
import emailjs from 'emailjs-com';
import Header from '../Sheared/Header/Header';
import './contact.css'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_cfv425m', 'template_pkza7do', e.target, 'user_x0IjvE5GMLitF8D2ukunk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <div className="home text-white">
                 
            <div className="contact text-center">
            <form className="contact-form" onSubmit={sendEmail}>
            <div >
            <h1>GET IN <span className="text-warning">TOUCH</span></h1>
                <p>Name</p>
                <input style={{width: '460px', height: '45px',border: 'none', borderBottom: '4px solid orange', borderRadius: '8px'}} type="text" name='name' placeholder="Your Name"/> <br/>
                <p>Email</p>
                <input style={{width: '460px', height: '45px',border: 'none',borderBottom: '4px solid orange', borderRadius: '8px'}} type="text" name="email" placeholder="Your Email"/> <br/>
                <p>Message</p>
                <textarea style={{width: '460px', height: '150px', borderBottom: '4px solid orange', borderRadius: '8px'}} name='message' placeholder="Message"></textarea> <br/>
                <input style={{fontSize: '20px',}} class="btn btn-outline-light w-75 mt-3" type="submit" value="Send" />
            </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;