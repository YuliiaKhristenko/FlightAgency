import React, {useEffect} from 'react';
import {BsBookmarkCheck, BsShieldCheck, RxCalendar} from "react-icons/all.js";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
    useEffect(() => {
        AOS.init({duration: 200})
    }, [])

    return (
        <div className='info section'>
           <div className='infoContainer container'>
               <div className="titleDiv flex">
                   <h2 data-aos='fade-up' data-aos-duration='2500'>Travel to make memories all around the world</h2>
                   <button data-aos='fade-up' data-aos-duration='2500' className='btn'>View All</button>
               </div>

               <div className="cardsDiv grid">

                   <div data-aos='fade-up' data-aos-duration='1800' className="singleCard grid">
                       <div className="iconDiv flex">
                           <RxCalendar className='icon'/>
                       </div>
                       <span className='cardTitle'>Book & Relax</span>
                       <p>You can also call airlines from your phone and book a flight ticket!</p>
                   </div>

                   <div data-aos='fade-up' data-aos-duration='1800' className="singleCard grid">
                       <div className="iconDiv flex colorOne">
                           <BsShieldCheck className='icon'/>
                       </div>
                       <span className='cardTitle'>Smart Checklist</span>
                       <p>You can also call airlines from your phone and book a flight ticket!</p>
                   </div>

                   <div data-aos='fade-up' data-aos-duration='1800' className="singleCard grid">
                       <div className="iconDiv flex colorTwo">
                           <BsBookmarkCheck className='icon'/>
                       </div>
                       <span className='cardTitle'>Save More</span>
                       <p>You can also call airlines from your phone and book a flight ticket!</p>
                   </div>

               </div>
           </div>
        </div>
    );
};

export default Info;