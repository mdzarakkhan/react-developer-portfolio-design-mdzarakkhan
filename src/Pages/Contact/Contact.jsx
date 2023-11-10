import React, { useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Header, Footer, Breadcrumb } from '../../Components/index.js';
import {github, fiverr, upwork, linkedin, twitter, whatsapp, facebook, instagram} from '../../assets/svg/index.js';
import { Helmet } from "react-helmet";




const Contact = () => {

  // /* -------------------------------------email receiving code-------------------------------------- */ 

  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_57952qd', 'template_koh31w6', form.current, 'fiw4LinZlL_fNAMbz')
      .then((result) => {
        setSubmissionStatus("success");
        setSubmissionMessage("Your email has been received.");
      })
      .catch((error) => {
        setSubmissionStatus("error");
        setSubmissionMessage("Sending Failed. Please contact the owner via whatsapp given below");
      });

    e.target.reset();
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  // /* -------------------------------------page content---------------------------------------- */ 

  return (

    <>

      {/* -------------------------------------SEO---------------------------------------- */}

      <Helmet>
        <title>Contact | Md Zarak Khan</title>
        <meta name="description" content="Connect with us easily through our Contact Page. Have questions about website design, trends, or tutorials? Want to collaborate or share your thoughts? Feel free to reach out. We value your feedback and look forward to hearing from you. Let's discuss your ideas and explore opportunities together. Contact us now for a seamless interaction and let Md Zarak Khan and our team assist you on your web design journey." />

        {/* keywords */}
        <meta name="keywords"
          content="web design,Blog, stunning websites, modern web design, professional web design, web designer, Web Design Services by Freelance Website Designer, Md Zarak Khan, Web development, Online presence, Expert services, Transform ideas, Stunning websites, Md Zarak Khan, Web design, Website creation, Digital presence, Professional web development, web designer in mardan, web designer near me, mdzarakkhan, contact" />
      </Helmet>



      <section id="main-section">

        {/* -------------------------------------header---------------------------------------- */}

        <div className="row">
          <Header />
        </div>

        {/* -------------------------------------breadcrumb---------------------------------------- */}

        <Breadcrumb
          page_name='Contact'
          description='Get in Touch'
        />

        {/* -------------------------------------page container---------------------------------------- */}
        <div className='container page-container'>


          {/* -------------------------------------map---------------------------------------- */}

          <section id='map'>

            <div className="row">
              <div className="col-lg-12 mt-4">
                <iframe
                  className='map'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.8301965407486!2d72.0633206748364!3d34.20181470981933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dec9d8628d534b%3A0x614dcb87110abc4e!2sWeb%20Design%20%26%20Development%20Services%20%7C%20Web%20Designer%20and%20Developer%20%7C%20-%20Md%20Zarak%20Khan!5e0!3m2!1sen!2s!4v1690964355534!5m2!1sen!2s"
                  title='my google map'
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>

          {/* -------------------------------------contact---------------------------------------- */}

          <section id='contact'>
            <div className="container ">
              <div className='row'>
                {/* icon boxes */}
                <div className='col-lg-4 col-md-6 col-sm-12' >
                  <div className='block-title'>
                    <h2>Details</h2>
                  </div>
                  <div className='icon-box'>
                    <i className="fa-solid fa-mobile-screen"></i>
                    <h4 className='d-inline-block'>+92 3149011559</h4>
                    <p style={{fontSize:'15px', marginBottom:'1rem'}}>Call or Whatsapp any time.</p>
                  </div>

                  <div className='icon-box'>
                    <i className="fa-solid fa-location-dot"></i>
                    <h4 className='d-inline-block'>Mardan, Pakistan</h4>
                    <p style={{ fontSize: '15px', marginBottom: '1rem' }}>Muhallah Pordal Street #18 Abad Par Hoti Mardan</p>
                  </div>

                  <div className='icon-box'>
                    <i className="fa-regular fa-envelope"></i>
                    <h4 className='d-inline-block'>mdzarakkhan@gmail.com</h4>
                    <p style={{ fontSize: '15px', marginBottom: '1rem' }}>Email me anytime 24/7 active.</p>
                  </div>
                </div>

                {/* -------------------------------------form---------------------------------------- */}

                <div className='col-lg-4 col-md-6 col-sm-12'>
                  <div className='block-title mt-sm-3 mt-lg-0 mt-md-0 what-i-do'>
                    <h2>How Can I Help You?</h2>
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="form-outline">
                      <input type="text" name='user_name' id="form3Example1" className="form-control" placeholder='Full Name' required />
                      <label className="form-label" htmlFor="form3Example1"></label>
                    </div>
                    <div className="form-outline">
                      <input type="email" name="user_email" id="form3Example2" className="form-control" placeholder='Email Address' required />
                      <label className="form-label" htmlFor="form3Example2"></label>
                    </div>
                    <div className="form-outline ">
                      <textarea className="form-control" name="message" id="form4Example3" rows="3" placeholder='Message' required></textarea>
                      <label className="form-label" htmlFor="form4Example3"></label>
                    </div>
                    <div>

                      {/* Display success and error messages */}
                      {submissionStatus === 'success' && (
                        <p className="success-message">{submissionMessage}</p>
                      )}

                      {submissionStatus === 'error' && (
                        <p className="error-message">{submissionMessage}</p>
                      )}
                      <ReCAPTCHA style={{ marginBottom: '0.6rem', marginTop: '-0.6rem' }}
                        sitekey="6Lc8aHYnAAAAAEmbcLhc7rYzoF6qqO-sfAvlp6hV"
                        onChange={onChange}
                      />
                      <button type="submit" className="btn secondary-button">
                        Send Email
                        <i className="fa-regular fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>


                {/* -------------------------------------links---------------------------------------- */}
                <div className='col-lg-4 col-md-6 col-sm-12 skills-svg links-section'>

                  <div className='block-title '>
                    <h2>Links</h2>
                  </div>

                  <a href="https://www.fiverr.com/md_zarak_khan" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={fiverr} alt="fiverr-svg" />
                  </a>

                  <a href="https://www.upwork.com/freelancers/~0182fd065637dfe6a4" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={upwork} alt="upwork-svg" />
                  </a>

                  <a href="https://github.com/mdzarakkhan" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={github} alt="github-svg" />
                  </a>

                  <a href="https://www.linkedin.com/in/mdzarakkhan/" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={linkedin} alt="linkedin-svg" />
                  </a>

                  <a href="https://wa.me/+923149011559" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={whatsapp} alt="whatsapp-svg" />
                  </a>

                  <a href="https://twitter.com/mdzarakkhan" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={twitter} alt="twitter-svg" />
                  </a>

                  <a href="https://web.facebook.com/mdzarakkhan1/" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={facebook} alt="facebook-svg" />
                  </a>

                  <a href="https://www.instagram.com/mdzarakkhan/" target='_blank' rel="noreferrer">
                    <img style={{ width: '38px', height: '38px' }} src={instagram} alt="instagram-svg" />
                  </a>

                </div>

              </div>
            </div>
          </section>

        </div>

        {/* -------------------------------------footer---------------------------------------- */}

        <Footer />
      </section>
    </>

  )
}

export default Contact;