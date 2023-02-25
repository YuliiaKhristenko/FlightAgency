import React, {useEffect} from 'react';
import air from '../../assets/air.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
    useEffect(() => {
        AOS.init({duration: 200})
    }, [])

    return (
        <div className='support container section'>
            <div className="sectionContainer">

                <div className="titlesDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence!</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey!</p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">

                        <div data-aos='fade-up' data-aos-duration='1800' className="singleInfo">
                            <span className='number'>01</span>
                            <h4>Travel requirements for USA</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='1900' className="singleInfo">
                            <span className='number'>02</span>
                            <h4>Chauffeur services at your arrival</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='2000' className="singleInfo">
                            <span className='number'>03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
                        </div>

                    </div>
                    <div data-aos='fade-up' data-aos-duration='2000' className="imgDiv">
                        <img src={air} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;