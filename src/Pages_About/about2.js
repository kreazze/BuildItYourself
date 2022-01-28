import React from 'react'
import { Parallax } from 'react-parallax'
import './about.css';
import Img2 from '../Images/img2.jpg';

const About2 = () => {
    return (
        <Parallax className='about_parallax2' bgImage={Img2} strength={700}>
            <div className='about_div2'>
                <p className='text2'><h1>Built-It-Yourself</h1> <br/> offers custom PC building services to all kinds of user who visited 
                    the website. It allows them to browse and shop freely without having any inconveniences specifically, 
                    recording of their personal information online. This website also helps those users who want to have 
                    their own choice of custom PC despite of them having insufficient knowledge in technology. Since 
                    custom PC building is the type of services we offered, B-I-Y contains selection of computer parts 
                    based on the user's preferences. Selections are being filtered out on its brand, price, budget, and 
                    availability of the components.</p>
            </div>
        </Parallax>
    )
}

export default About2
