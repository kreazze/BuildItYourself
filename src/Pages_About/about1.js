import React from 'react'
import { Parallax } from 'react-parallax'
import './about.css'
import Img1 from '../Images/img1.jpg';

const About1 = () => {
    return (
        <Parallax className='about_parallax1' bgImage={Img1} strength={700} blur={{min: -1, max: 6}}>
            <div className='about_div1'>
                <p className='text1'><h1>Mission</h1> <br/> People are becoming fond of using the works of technology, specifically, 
                computers. Based on this event, almost all the individuals are hoping to get atleast one custom 
                PC of their own. Built-It-Yourself is built with the mission of helping all various customers to 
                get their own custom PC, with or without full knowledge in the components of a computer.</p>

                <p className='text1'><h1>Vision</h1> <br/> Our vision is to make people an access into technology.</p>
            </div>
        </Parallax>
    )
}

export default About1
