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
          alert('Thanks a lot')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <div className="container text-white ">
            <Header></Header>
            <div className="contact text-center container">
            <form className="contact-form" onSubmit={sendEmail}>
            <div >
            <h1>GET IN <span className=" text-warning">TOUCH</span></h1>
                <p>Name</p>
                <input className='field' type="text" name='name' placeholder="Your Name"/> <br/>
                <p>Email</p>
                <input className='field'  type="text" name="email" placeholder="Your Email"/> <br/>
                <p>Message</p>
                <textarea className='field' name='message' placeholder="Message"></textarea> <br/>
                <input className='field'  class="btn btn-light mt-3" type="submit" value="Send" />
            </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;