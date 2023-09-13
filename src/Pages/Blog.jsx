import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './blog.scss';
import {motion} from 'framer-motion';

const Blog = () => {
  return (
    <>
      {/* -------------------------------------SEO---------------------------------------- */}

      <Helmet>
        <title>Blog | Md Zarak Khan</title>
        <meta name="description" content="Explore the world of website design with Md Zarak Khan on our SEO-optimized blog page. Stay informed about the latest trends, responsive layouts, UX/UI best practices, and visual aesthetics. Elevate your skills with expert tips and tutorials, and learn from Md Zarak Khan's expertise in creating stunning, user-friendly websites. Keep up with cutting-edge techniques to enhance your online presence. Discover valuable insights into web design's dynamic realm through Md Zarak Khan's articles and boost your design prowess. Join us now to stay updated and inspired by Md Zarak Khan's contributions to the ever-evolving field of web design." />

        {/* keywords */}
        <meta name="keywords"
          content="web design,Blog, stunning websites, modern web design, professional web design, web designer, Web Design Services by Freelance Website Designer, Md Zarak Khan, Web development, Online presence, Expert services, Transform ideas, Stunning websites, Md Zarak Khan, Web design, Website creation, Digital presence, Professional web development, web designer in mardan, web designer near me, mdzarakkhan" />
      </Helmet>

      <section id="main-section">

        {/* -------------------------------------header here---------------------------------------- */}

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
                <h1 className='contact' style={{ fontSize: '42px' }}>Blog</h1>
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end'>
                <p>Helpfull Articles</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* -------------------------------------page content---------------------------------------- */}
        <div className='container page-container'>
          <div className="container">

            

          </div>
        </div>

        {/* -------------------------------------footer---------------------------------------- */}
        <Footer />
      </section>

    </>
  )
}

export default Blog;