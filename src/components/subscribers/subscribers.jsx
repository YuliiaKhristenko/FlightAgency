import React, {useEffect} from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {
    useEffect(() => {
        AOS.init({duration: 200})
    }, [])

    return (
        <div className='subscribe section'>
            <div data-aos='fade-up' data-aos-duration='1800' className="sectionContainer container">
                <h2>Subscribe Newsletters & get Latest News</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder='Enter your email...'/>
                    <button className='btn'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribers;