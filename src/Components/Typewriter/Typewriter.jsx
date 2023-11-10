import React from 'react';
import Typed from 'react-typed';
import './typewriter.scss';


const Typewriter = () => {
    
    return (
        <>
            <h4 style={{ color: '#10b981', fontSize: '30px', fontWeight: '700', marginBottom: '0', fontFamily: 'Poppins' }} >
                <Typed
                    strings={[
                        'HTML',
                        'Css',
                        'Bootstrap',
                        'SASS',
                        'WordPress',
                        'JavaScript',
                        'React js',
                        'GIT',
                        'GitHub',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop>

                </Typed>


            </h4>
        </>
    )
}

export default Typewriter;