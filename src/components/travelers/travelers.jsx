import React, {useEffect} from 'react';
import usa from '../../assets/usa.jpg'
import london from '../../assets/london.jpg'
import dubai from '../../assets/dubai.jpg'
import paris from '../../assets/paris.jpg'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const travelers = [
    {
        id: 1,
        destinationImage: usa,
        travelerImage: user1,
        travelerName: 'USA',
        socialLink: '@James'
    },
    {
        id: 2,
        destinationImage: london,
        travelerImage: user2,
        travelerName: 'London',
        socialLink: '@Michael'
    },
    {
        id: 3,
        destinationImage: dubai,
        travelerImage: user3,
        travelerName: 'Dubai',
        socialLink: '@Jennifer'
    },
    {
        id: 4,
        destinationImage: paris,
        travelerImage: user4,
        travelerName: 'Paris',
        socialLink: '@Melissa'
    },
]

const Travelers = () => {
    useEffect(() => {
        AOS.init({duration: 200})
    }, [])

    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2000'>Top travelers of this month!</h2>
                <div className="travelersContainer grid">

                    {travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
                            return (
                                <div data-aos='fade-up' data-aos-duration='1500' key={id} className="singleTraveler">
                                    <img src={destinationImage} alt="img" className='destinationImage'/>
                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} alt="img" className='travelerImage'/>
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Travelers;