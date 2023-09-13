import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../Components/Header';
import FilterGallery from '../Components/FilterGallery';
import Footer from '../Components/Footer';
import { motion } from "framer-motion";



const Portfolio = () => {
  return (
    <>

      {/* -------------------------------------SEO---------------------------------------- */}

      <Helmet>
        <title>Portfolio | Md Zarak Khan</title>
        <meta name="description" content="Welcome to our Portfolio Page, where Md Zarak Khan showcases a collection of impressive web design projects. Explore a diverse range of visually captivating and user-centric websites that exemplify expertise in responsive layouts, UX/UI finesse, and aesthetic appeal. From e-commerce platforms to personal blogs, our portfolio highlights the versatility and creativity inherent in each project. Immerse yourself in Md Zarak Khan's design journey, gaining insights into the innovative strategies employed. Get inspired for your own web design endeavors as you browse through our carefully curated showcase of digital craftsmanship."/>

        {/* keywords */}
        <meta name="keywords"
          content="web design,Blog, stunning websites, modern web design, professional web design, web designer, Web Design Services by Freelance Website Designer, Md Zarak Khan, Web development, Online presence, Expert services, Transform ideas, Stunning websites, Md Zarak Khan, Web design, Website creation, Digital presence, Professional web development, web designer in mardan, web designer near me, mdzarakkhan, contact, portfolio" />
      </Helmet>

      <section id="main-section">

        {/* -------------------------------------header---------------------------------------- */}

        <div className="row">
          <Header />
        </div>

        {/* -------------------------------------breadcrumb---------------------------------------- */}
        <motion.div className="container-fluid contact-container"
          initial={{ opacity: 0, scale: 0.8 }} // Initial styles
          animate={{ opacity: 1, scale: 1 }}   // Animation styles
          transition={{ duration: 0.8 }}       // Animation duration

        >
          <div className="container">
            <div className="row">
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <h1 className='contact' style={{ fontSize: '42px' }}>Portfolio</h1>
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end'>
                <p>Completed Projects</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* -------------------------------------page-content---------------------------------------- */}
        <div className='container page-container'
        >


          {/* -------------------------------------gallery---------------------------------------- */}
          <motion.section className='gallery'
            initial={{ opacity: 0, scale: 0.8 }} // Initial styles
            animate={{ opacity: 1, scale: 1 }}   // Animation styles
            transition={{ duration: 0.8 }}       // Animation duration
          >
            <div className="container">
              <div className="row">
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <FilterGallery />
                </div>
              </div>
            </div>

          </motion.section>
        </div>

        {/* -------------------------------------footer---------------------------------------- */}

        <Footer />
      </section>

    </>
  )
}

export default Portfolio;