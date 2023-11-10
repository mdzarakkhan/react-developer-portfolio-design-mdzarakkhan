import React from 'react';
import { motion } from 'framer-motion';

const Breadcrumb = (props) => {
    return (
        <>
            <motion.div className="container-fluid contact-container"
                initial={{ opacity: 0, scale: 0.8 }} // Initial styles
                animate={{ opacity: 1, scale: 1 }}   // Animation styles
                transition={{ duration: 0.8 }}       // Animation duration

            >
                <div className="container">
                    <div className="row">
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h1 className='contact' style={{ fontSize: '42px' }}>{props.page_name}</h1>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end'>
                            <p >{props.description}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Breadcrumb;