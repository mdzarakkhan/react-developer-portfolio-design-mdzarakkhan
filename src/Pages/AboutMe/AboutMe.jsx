import React from 'react';
import './aboutMe.scss';
import { Header, Card, Footer, FiverrCard } from '../../Components/index.js';
import cv from '../../assets/Files/Muhammad Zarak Resume.pdf';
import { html, css, sass, bootstrap, js, wordpress, reactjs, git, github, fiverr, upwork, linkedin, twitter, whatsapp, facebook, instagram } from '../../assets/svg/index.js';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Typewriter from '../../Components/Typewriter/Typewriter.jsx';


const AboutMe = () => {


  return (
    <>
      {/* -------------------------------------SEO---------------------------------------- */}
      <Helmet>

        <title>Modern Web Design Services by Freelance Website Designer | Md Zarak Khan</title>

        <meta name="description"
          content="Get modern web design done by the top website designer in Mardan, Pakistan. Transform your ideas into stunning websites. Md Zarak Khan provides professional web design services at a very competitive price." />

        <meta name="keywords"
          content="web design, stunning websites, modern web design, professional web design, web designer, Web Design Services by Freelance Website Designer, Md Zarak Khan, Web development, Online presence, Expert services, Transform ideas, Stunning websites, Md Zarak Khan, Web design, Website creation, Digital presence, Professional web development, web designer in mardan, web designer near me, mdzarakkhan" />
      </Helmet>

      <motion.section id="main-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

      >

        {/* -------------------------------------header---------------------------------------- */}
        <div className="row">
          <Header />
        </div>

        {/* --------------------------------page container------------------------------------------ */}

        <div className='container page-container'>


          {/* ------------------------------page content-------------------------------------------- */}


          {/* ------------------------------hero section-------------------------------------------- */}
          <div id='hero' className="container d-flex justify-content-center col-lg-10 mt-2">
            <div className="row d-flex justify-content-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} // Initial styles
                animate={{ opacity: 1, scale: 1 }}   // Animation styles
                transition={{ duration: 0.8 }}       // Animation duration

                className="col-lg-5 col-md-6 mt-5 my-dp-Pdiv">
                <img className="img-fluid rounded-circle my-dp" src='https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/profile-2' alt="mdzarakkhan" />
              </motion.div>

              <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-center mt-lg-5 mt-md-4 mt-sm-5 about-content">
                <motion.h4
                  initial={{ scale: 0.8, opacity: 0 }}   // Initial scale and opacity
                  animate={{ scale: 1, opacity: 1 }}     // Animation scale and opacity
                  transition={{ duration: 0.8 }}
                  className='text-lg-start text-md-center text-sm-center type-writer'><Typewriter /></motion.h4>
                <motion.h1
                  initial={{ scale: 0.8, opacity: 0 }}   // Initial scale and opacity
                  animate={{ scale: 1, opacity: 1 }}     // Animation scale and opacity
                  transition={{ duration: 0.8 }}         // Animation duration
                  className='name text-lg-start text-md-center text-sm-center' >
                  <span style={{ color:'#10B981'}}>Md</span> Zarak Khan</motion.h1>
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}   // Initial scale and opacity
                  animate={{ scale: 1, opacity: 1 }}     // Animation scale and opacity
                  transition={{ duration: 0.8 }}         // Animation duration
                >I have done B.S Software Engineering from The Sarhad University of Peshawar and I am looking for an opportunity in any organization that will help me polish my skills and fulfill the demands of the company. I have enthusiasm and dedication that drives me to attain a challenging position as a Web Designer/Developer.
                </motion.p>

                <motion.div

                  initial={{ scale: 0.8, opacity: 0 }}   // Initial scale and opacity
                  animate={{ scale: 1, opacity: 1 }}     // Animation scale and opacity
                  transition={{ duration: 0.5 }}         // Animation duration

                  className='btns text-lg-start text-md-center text-sm-center mt-4' style={{ marginTop: '.7rem' }}>
                  <a href={cv}>
                    <button className="btn primary-button">
                      Download CV<i className="fa-solid fa-download"></i>
                    </button>
                  </a>
                  <a href='https://mdzarakkhan.me/blog' className="btn secondary-button portfolio">
                    Blog<i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>

                </motion.div>

              </div>


            </div>
          </div>

          {/* ------------------------------about section-------------------------------------------- */}
          <section id='about-me'>
            <div className='block-title'>
              <h2>About</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 p-lg-0">
                  <p>Elevate your online presence with the unparalleled expertise of Md Zarak Khan, an accomplished website designer with over 4 years of dedicated experience in Website Design & Malware Removal. Md Zarak Khan brings a unique blend of creativity and technical proficiency to the table, making him a standout in the digital landscape.
                    Md Zarak Khan's forte lies in crafting captivating WordPress websites as well, that seamlessly combine visual aesthetics with cutting-edge functionality. Proficient in HTML5, CSS3, Bootstrap4, WordPress and React JS, Zarak creates digital wonders that captivate the eye while delivering a seamless user experience. His adeptness with renowned page builders like Divi and Elementor ensures your website not only looks stunning but also operates flawlessly.
                    Embark on a future-focused web design journey by partnering with Md Zarak Khan. <strong> <a href="https://wa.me/+923149011559">Contact</a> </strong>him today and witness your digital aspirations come to life in ways that redefine excellence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------services section------------------------------------------ */}
          <section id='section-services' className='pb-5'>

            <div className="container">
              <div className="row pt-3">
                <div className=' d-flex justify-content-center'>
                  <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div>
                      <i style={{ color: 'white', fontSize: '30px' }} className="fa-solid fa-gear d-block text-center pb-3"></i>
                      <h2 style={{ color: 'white' }} className='d-block text-center pb-3'>My Services</h2>
                      <p style={{ color: 'white' }} className='d-block text-center pb-3'> Here are some of the services I provide, if you need any service that is not included, feel free to contact</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="container">
              <div className="row">

                <div className='col-lg-3 col-md-6 col-sm-12 p-2 '>
                  <div className='icon-box p-4'>
                    <i className="fa-solid fa-code d-block text-center mb-3"></i>
                    <h4 style={{ fontSize: '19px', fontFamily: 'Poppins', fontWeight: '500' }} className='d-block text-center p-2'>Website Design</h4>
                    <p style={{ fontSize: '15px' }} className='text-center m-0'>Design any type of website, like business, portfolio, blog and much more</p>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12 p-2 '>
                  <div className='icon-box p-4'>
                    <i className="fa-solid fa-shield-halved d-block text-center mb-3"></i>
                    <h4 style={{ fontSize: '19px', fontFamily: 'Poppins', fontWeight: '500' }} className='d-block text-center p-2'>Security/Malware</h4>
                    <p style={{ fontSize: '15px' }} className='text-center m-0'>Secure your website from brute force attacks and malwares.</p>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12 p-2 '>
                  <div className='icon-box p-4'>
                    <i className="fa-solid fa-gauge d-block text-center mb-3"></i>
                    <h4 style={{ fontSize: '19px', fontFamily: 'Poppins', fontWeight: '500' }} className='d-block text-center p-2'>Speed Optimization</h4>
                    <p style={{ fontSize: '15px' }} className='text-center m-0'>Optimize your website to load much faster than before.</p>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12 p-2 '>
                  <div className='icon-box p-4'>
                    <i className="fa-solid fa-shop d-block text-center mb-3"></i>
                    <h4 style={{ fontSize: '19px', fontFamily: 'Poppins', fontWeight: '500' }} className='d-block text-center p-2'>Ecommerce</h4>
                    <p style={{ fontSize: '15px' }} className='text-center m-0'>Build any kind of ecommerce website using woocommerce.</p>
                  </div>
                </div>

              </div>





            </div>
          </section>

          {/* ------------------------------Gigs section-------------------------------------------- */}
          <section id='FiverrGigs'>
            {/* title */}
            <div className='block-title'>
              <h2>Fiverr Gigs</h2>
            </div>

            {/* gigs */}

            <div className="container p-lg-0">
              <div className="row">

                <div className='col-lg-4 col-md-6 col-sm-12 pt-2'>
                  <FiverrCard
                    FiverrCardUrl='https://www.fiverr.com/s/o24lP8'
                    FiverrCardImage='https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Fiverr-Gig-Images/elementor%20pro%20expert'
                    FiverrCardTitle='Elementor Pro Expert'
                  />
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 pt-2'>

                  <FiverrCard
                    FiverrCardUrl='https://www.fiverr.com/s/Ygl2Bz'
                    FiverrCardImage='https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Fiverr-Gig-Images/fiverr_portfolio'
                    FiverrCardTitle='Portfolio/Business Website'
                  />

                </div>


                <div className='col-lg-4 col-md-6 col-sm-12 pt-2'>
                  <FiverrCard
                    FiverrCardUrl='https://www.fiverr.com/md_zarak_khan/customization-customize-update-wordpress-fix-wordpess-change-wordpress-update?context_referrer=user_page&ref_ctx_id=4033d8da85ff9322b65d90a5a23e7d9f&pckg_id=1&pos=2&seller_online=true&imp_id=f0f72072-8046-47e9-ad3c-4c103de7afcc'
                    FiverrCardImage='https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Fiverr-Gig-Images/blog%20website'
                    FiverrCardTitle='Design a Blog Website'
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------pricing section-------------------------------------------- */}
          <section id='pricing' className='card-section mb-5 mt-5'>
            <div className='block-title'>
              <h2>Pricing</h2>
            </div>

            <div className="continer">
              <div className="row">
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card
                    name='Web Design'
                    price='$120'
                    time='/website'
                    description='Elevating digital experiences through innovative Web Design.'
                    line1='Portfolio/Resume'
                    line2='Ecommerce'
                    line3='Blogs'
                    line4='Multi Vendor Stores'
                    line5='Rental'
                    line6='Business/Tech Websites'

                  />
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card
                    name='Website Redesign'
                    price='$100'
                    time='/website'
                    description='Transform outdated websites into modern, engaging experiences.'
                    line1='Business/Tech Websites '
                    line2='Rental '
                    line3='Multi Vendor Stores'
                    line4='Blogs'
                    line5='Ecommerce'
                    line6='Portfolio/Resume'

                  />
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card
                    name='Speed Optimization'
                    price='$50'
                    time='/website'
                    description='Maximizing website performance through speed optimization.'
                    line1='Core Web Vitals Fixed'
                    line2='Css & JS files Minification'
                    line3='Images Optimization'
                    line4='Images to WEBP'
                    line5='Lazy Load'
                    line6='Rendor-blocking'

                  />
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card
                    name='Web Security'
                    price='$30'
                    time='/website'
                    description='Safeguarding websites from threats with expert security solutions.'
                    line1='Malware Removal'
                    line2='Login URL Change'
                    line3='Database Prefix Change'
                    line4='More Security Layers'
                    line5='Brute Force'
                    line6=' Captcha on Forms'

                  />
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------skills section-------------------------------------------- */}
          <section id='skills-section'>

            {/* skills svg div */}
            <div className="container">
              <div className="row">
                <div className='p-0 col-lg-6 col-sm-12 skills-svg'>
                  <div className='block-title'>
                    <h2>Skills</h2>
                  </div>
                  <img style={{ width: '40px', height: '40px' }} src={html} alt="html-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={css} alt="css-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={sass} alt="sass-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={bootstrap} alt="bootstrap-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={js} alt="js-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={reactjs} alt="reactjs-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={wordpress} alt="wordpress-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={git} alt="git-svg" />
                  <img style={{ width: '40px', height: '40px' }} src={github} alt="github-svg" />
                </div>

                {/* social as */}

                <div className='p-0 col-lg-6 skills-svg mt-md-5 mt-lg-0 links-section'>

                  <div className='block-title'>
                    <h2>Links</h2>
                  </div>

                  <a href="https://www.fiverr.com/md_zarak_khan" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={fiverr} alt="fiverr-svg" />
                  </a>

                  <a href="https://www.upwork.com/freelancers/~0182fd065637dfe6a4" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={upwork} alt="upwork-svg" />
                  </a>

                  <a href="https://github.com/mdzarakkhan" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={github} alt="github-svg" />
                  </a>

                  <a href="https://www.linkedin.com/in/mdzarakkhan/" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={linkedin} alt="linkedin-svg" />
                  </a>

                  <a href="https://wa.me/+923149011559" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={whatsapp} alt="whatsapp-svg" />
                  </a>

                  <a href="https://twitter.com/mdzarakkhan" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={twitter} alt="twitter-svg" />
                  </a>

                  <a href="https://web.facebook.com/mdzarakkhan1/" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={facebook} alt="facebook-svg" />
                  </a>

                  <a href="https://www.instagram.com/Mdzarakkhan/" target='_blank' rel="noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={instagram} alt="instagram-svg" />
                  </a>

                </div>
              </div>
            </div>
          </section>

        </div>
        {/* page contianer ended  */}

        {/* -----------------------------page container ended----------------------------------------- */}

        {/* ------------------------------footer-------------------------------------------- */}
        <Footer />

      </motion.section>
    </>
  )
}

export default AboutMe;