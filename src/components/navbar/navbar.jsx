import React, {useState} from 'react';
import {SiConsul} from 'react-icons/si'
import {AiOutlineGlobal, BsPhoneVibrate, CgMenuGridO} from "react-icons/all.js";
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const [active, setActive] = useState('navbarMenu')

    const showNavbar = () => {
        setActive('navbarMenu showNavbar')
    }

    const removeNavbar = () => {
        setActive('navbarMenu')
    }

    //Add a background color to the second Navbar
    const [noBg, setBg] = useState('navbarTwo')

    const addBgColor = () => {
        if(window.scrollY >= 10) {
            setBg('navbarTwo navbarBackground')
        } else {
            setBg('navbarTwo')
        }
    }
    window.addEventListener('scroll', addBgColor)

    return (
        <div className='navbar flex'>
            <div className='navbarOne flex'>
                {/*<div><SiConsul/></div>*/}
                <div className='none flex'>
                    <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
                    <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
                </div>
                <div className='atb flex'>
                    <span>Sign In</span>
                    <span>Sign Up</span>
                </div>
            </div>
            <div className={noBg}>
                <div className='logoDiv'>
                    <img src={logo} alt="logo" className='logo'/>
                </div>
                <div className={active}>
                    <ul className='menu flex'>
                        <li onClick={removeNavbar} className='listItem'>Home</li>
                        <li onClick={removeNavbar} className='listItem'>About</li>
                        <li onClick={removeNavbar} className='listItem'>Offers</li>
                        <li onClick={removeNavbar} className='listItem'>Seats</li>
                        <li onClick={removeNavbar} className='listItem'>Destinations</li>
                    </ul>
                    <button onClick={removeNavbar} className='btn flex btnOne'>Contact</button>
                </div>
                <button className='btn flex btnTwo'>Contact</button>
                <div onClick={showNavbar} className='toggleIcon'>
                    <CgMenuGridO className='icon'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;