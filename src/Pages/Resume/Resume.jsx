import React from 'react';
import './resume.scss';
import { Header, Timeline, Footer, Breadcrumb } from '../../Components/index.js';
import wordpress from '../../assets/svg/wordpress.svg';
import coding from '../../assets/svg/coding.svg';
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";


const Resume = () => {
  return (

    <>
      {/* -------------------------------------SEO---------------------------------------- */}

      <Helmet>
        <title>Resume | Md Zarak Khan</title>
        <meta name="description" content="Discover Md Zarak Khan's professional journey and expertise on our Resume Page. Explore a comprehensive overview of skills, experiences, and accomplishments that have shaped Md Zarak Khan's proficiency in web design. From educational background to hands-on projects, delve into a detailed account of the knowledge and creativity that drive outstanding website development. Whether you're seeking collaboration, inspiration, or a skilled web designer, this page offers valuable insights into Md Zarak Khan's capabilities. Explore the resume to understand the depth of expertise that can contribute to your web design needs and aspirations." />

        {/* keywords */}
        <meta name="keywords"
          content="web design,Blog, stunning websites, modern web design, professional web design, web designer, Web Design Services by Freelance Website Designer, Md Zarak Khan, Web development, Online presence, Expert services, Transform ideas, Stunning websites, Md Zarak Khan, Web design, Website creation, Digital presence, Professional web development, web designer in mardan, web designer near me, mdzarakkhan, contact, portfolio, resume" />
      </Helmet>

      {/* -------------------------------------page content---------------------------------------- */}
      <section id="main-section"

      >
        {/* -------------------------------------header---------------------------------------- */}
        <div className="row">
          <Header />
        </div>

        {/* -------------------------------------breadcrumb---------------------------------------- */}

        <Breadcrumb
          page_name='Resume'
          description='4+ Years of Experience'
        />

        {/* -------------------------------------page---------------------------------------- */}

        <motion.div className='container page-container'
          initial={{ opacity: 0, scale: 0.8 }} // Initial styles
          animate={{ opacity: 1, scale: 1 }}   // Animation styles
          transition={{ duration: 0.8 }}       // Animation duration
        >

          {/* ----------------------------------timelines------------------------------------- */}

          <section className='education'>
            <div className="container p-0">
              <div className="row">

                {/* ----------------------------------education timeline------------------------------------- */}

                <div className="col-lg-6 col-md-12 col-sm-12"

                >

                  <div className='block-title'>
                    <h2>Education</h2>
                  </div>

                  <Timeline
                    time='2019 - 2023'
                    place='The Sarhad University of Peshawar'
                    post='Software Engineering (BS)'
                    description='Successfully Completed my Bs in Software Engineering From the Sarhad University of Peshawar.'
                  />

                  <div className="sec-timeline">
                    <Timeline
                      time='2016 - 2017'
                      place='Success School & College Mardan'
                      post='Pre-Engineering (FSC)'
                      description='Completed Pre-Engineering from the Success School & College Mardan in 2017.'
                    />
                  </div>

                  <div className="sec-timeline">
                    <Timeline
                      time='2014 - 2015'
                      place='Govt High School Sharqi Par Hoti Mardan'
                      post='Science (Matric)'
                      description='Matriculated in 2015 from a Government High School Sharqi Par Hoti Mardan.'
                    />
                  </div>


                </div>

                {/* ----------------------------------experience timeline------------------------------------- */}

                <div className="col-lg-6 col-md-12 col-sm-12 experience"

                >

                  <div className='block-title'>
                    <h2>Experience</h2>
                  </div>

                  <Timeline
                    time='MAY - 2021'
                    place='Fiverr & Upwork'
                    post='Web Designer & Developer'
                    description='Working for the last few years as a web designer and developer on fiverr & upwork both, Now I am a Level 2 seller on Fiverr.'
                  />

                  <div className="sec-timeline">
                    <Timeline
                      time='FEB - 2021'
                      place='Softhat IT Solutions / Mardan'
                      post='Web Designer'
                      description='Softhat IT Solutions is a software house in Peshawar, having a new branch in Mardan, where I did an internship of 7 months.'
                    />
                  </div>

                  <div className="sec-timeline">
                    <Timeline
                      time='AUG - 2022'
                      place='Code Prisma / Mardan'
                      post='Web Designer & Developer'
                      description='CodePrisma is a software house in Mardan, successfully done an internship of 7 months with them as well.'
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* -----------------------------------certificate-section-------------------------------------- */}

          <section className='certificates'>
            <div className="container">
              <div className="row">

                <div className='block-title'>
                  <h2>Certificates</h2>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12 animate'>
                  <a href='https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Certificates/SoftHat-IT-Solutions' target='_blank' rel="noreferrer">
                    <div style={{ border: '1px solid rgb(226, 226, 226)' }} className='card-md d-flex justify-content-start  rounded'>
                      <div style={{ borderRight: '1px solid rgb(226, 226, 226)', backgroundColor: '#f3f3f3' }} className='inner col-2 d-flex align-items-center justify-content-center'>
                        <img style={{ width: '40px', height: '40px' }} src={wordpress} alt="wordpress-svg" />
                      </div>
                      <div style={{ paddingLeft: '2rem' }} className='inner-2 col-lg-10 col-md-10 col-sm-10 mt-3 '>
                        <h4>Web Designer (WordPress)</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px' }}>Softhat IT Solutions</h4>
                        <p className='mb-2'>7 Months</p>
                      </div>
                    </div>

                  </a>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12 animate codeprisma-margin mt-lg-0 mt-md-0'>
                  <a href='https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Certificates/Code-Prisma' target='_blank' rel="noreferrer">
                    <div style={{ border: '1px solid rgb(226, 226, 226)' }} className='card-md d-flex justify-content-start  rounded'>
                      <div style={{ borderRight: '1px solid rgb(226, 226, 226)', backgroundColor: '#f3f3f3' }} className='inner col-2 d-flex align-items-center justify-content-center'>
                        <img style={{ width: '40px', height: '40px' }} src={coding} alt="wordpress-svg" />
                      </div>
                      <div style={{ paddingLeft: '2rem' }} className='inner-2 col-lg-10 col-md-10 col-sm-10 mt-3 '>
                        <h4>Web Designer & Developer</h4>
                        <h4 style={{ fontWeight: '400', fontSize: '14px' }}>CodePrisma Software Company</h4>
                        <p className='mb-2'>7 Months</p>
                      </div>
                    </div>


                  </a>
                </div>

              </div>
            </div>
          </section>
        </motion.div>
        <Footer />
      </section >

    </>

  )
}

export default Resume;