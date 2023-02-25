import React, {useEffect} from 'react';
import video from '../../assets/video.mp4'
import plane from '../../assets/plane.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
       AOS.init({duration: 200})
    }, [])

    return (
        <div className='home container flex'>
            <div className='mainText'>
                <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With US</h1>
            </div>
            <div data-aos='fade-down' data-aos-duration='2500' className='homeImages flex'>
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>
                </div>
                <img src={plane} alt="img" className='plane'/>
            </div>
        </div>
    );
};

export default Home;