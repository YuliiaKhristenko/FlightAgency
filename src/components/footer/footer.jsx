import React, {useEffect} from 'react';
import logo from '../../assets/logo.svg'
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter, TiSocialFacebook} from "react-icons/all.js";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 200})
    }, [])

    return (
        <div className='footer'>
           <div className="sectionContainer container grid">
               <div data-aos='fade-up' data-aos-duration='1800' className="gridOne">
                   <div className="logoDiv">
                       <img src={logo} alt="logo" className='logo'/>
                   </div>
                   <p>Your mind should be stronger than your feelings, fly!</p>
                   <div className="socialIcon flex">
                       <TiSocialFacebook className='icon'/>
                       <AiOutlineTwitter className='icon'/>
                       <AiFillInstagram className='icon'/>
                       <AiFillYoutube className='icon'/>
                   </div>
               </div>

               <div data-aos='fade-up' data-aos-duration='1800' className="footerLinks">
                   <span className='linkTitle'>Information</span>
                   <li><a href=''>Home</a></li>
                   <li><a href=''>Explore</a></li>
                   <li><a href=''>Flight Status</a></li>
                   <li><a href=''>Travel</a></li>
                   <li><a href=''>Check In</a></li>
                   <li><a href=''>Manage your booking</a></li>
               </div>

               <div data-aos='fade-up' data-aos-duration='1800' className="footerLinks">
                   <span className='linkTitle'>Quick Guide</span>
                   <li><a href=''>FAQ</a></li>
                   <li><a href=''>How to start</a></li>
                   <li><a href=''>Features</a></li>
                   <li><a href=''>Baggage</a></li>
                   <li><a href=''>Route map</a></li>
                   <li><a href=''>Our communities</a></li>
               </div>

               <div data-aos='fade-up' data-aos-duration='1800' className="footerLinks">
                   <span className='linkTitle'>Information</span>
                   <li><a href=''>Chauffeur</a></li>
                   <li><a href=''>Our partners</a></li>
                   <li><a href=''>Destination</a></li>
                   <li><a href=''>Careers</a></li>
                   <li><a href=''>Transportation</a></li>
                   <li><a href=''>Programme rules</a></li>
               </div>
           </div>

            <div className='copyRightDiv flex'>
                <p>Copyright © 1996–2023 Booking.com™.</p>
            </div>
        </div>
    );
};

export default Footer;