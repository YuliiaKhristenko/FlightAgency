import React, {useEffect} from 'react';
import airCabin from '../../assets/airCabin.webp'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
    useEffect(() => {
        AOS.init({duration: 200})
    }, [])

    return (
        <div className='lounge container section'>
            <div className='sectionContainer grid'>
                <div data-aos='fade-up' data-aos-duration='2000' className="imgDiv">
                    <img src={airCabin} alt="img"/>
                </div>

                <div className="textDiv">
                    <h2 data-aos='fade-up' data-aos-duration='1800'>Unaccompanied Minor Lounge</h2>

                    <div className="grids grid">

                        <div data-aos='fade-up' data-aos-duration='1800' className="singleGrid">
                        <span className='gridTitle'>
                            Help through the airport
                        </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='1800' className="singleGrid">
                        <span className='gridTitle'>
                            Priority Boarding
                        </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='1800' className="singleGrid">
                        <span className='gridTitle'>
                            Care on the flight
                        </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='2000' className="singleGrid">
                        <span className='gridTitle'>
                            Chauffeur-drive service
                        </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lounge;