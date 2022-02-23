import React from 'react';
import { Parallax } from 'react-parallax'
import Footer from '../Pages/footer';
import './about.css';
import Img1 from '../Images/img1.jpg';
import Img2 from '../Images/img2.jpg';

function About() {
    const About1 = () => {
        return (
            <Parallax className='about_parallax1' bgImage={Img1} strength={700} blur={{min: -3, max: 6}}>
                <div className='about_div1'>
                    <p className='text1'><h1>Mission</h1> <br/> People are becoming fond of using the works of technology, specifically, 
                    computers. Based on this event, almost all the individuals are hoping to get atleast one custom 
                    PC of their own. Build-It-Yourself is built with the mission of helping all various customers to 
                    get their own custom PC, with or without full knowledge in the components of a computer.</p>
    
                    <p className='text1'><h1>Vision</h1> <br/> Our vision is to make people an access into technology.</p>
                </div>
            </Parallax>
        )
    }
    
    const About2 = () => {
      return (
          <Parallax className='about_parallax2' bgImage={Img2} strength={700}>
              <div className='about_div2'>
                  <p className='text2'><h1>Build-It-Yourself</h1> <br/> offers custom PC building services to all kinds of user who visited 
                      the website. It allows them to browse and shop freely without having any inconveniences specifically, 
                      recording of their personal information online. This website also helps those users who want to have 
                      their own choice of custom PC despite of them having insufficient knowledge in technology. Since 
                      custom PC building is the type of services we offered, B-I-Y contains selection of computer parts 
                      based on the user's preferences. Selections are being filtered out on its brand, price, budget, and 
                      availability of the components.</p>
              </div>
              <div className='about_footer'>
                  <Footer/>
              </div>
          </Parallax>
      )
    }
    
    return (
      <div>
          <About1 />
          <About2 />
      </div>
    );
}

export default About