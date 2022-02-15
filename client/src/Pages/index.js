import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css";
import Img3 from '../Images/img3.png';
import Img4 from '../Images/img4.png';
import Img5 from '../Images/img5.png';
import Img6 from '../Images/img6.png';
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';
import {MdLocationOn, MdEmail} from 'react-icons/md';


const Home = () => {
    const divScroll = () => window.scrollTo({
        scroll: document.getElementById('midScroll').scrollHeight,
        behavior: "smooth"
    })

    return (
        <div>
            <div className='uppercontainerIndex'>
                <form className='upperleftDiv'>
                <div>
                    <video autoPlay loop muted id="videoTag">
                    <source src="./Resources/vidBack.WEBM" type="video/mp4" />
                    </video>
                </div>
                    <h1>LET'S <span>BUILD YOUR PC</span> NOW!</h1>
                    <p className='pIndex'>Get your way to technology</p>
                    <button className='btnHome1' onClick={divScroll}>Learn More</button>
                    <Link to='/pre-build'>
                        <button className='btnHome2'>Pre-Builds</button>
                    </Link>
                </form>
                <form className='upperrightDiv'>
                    <img src={Img3} alt='' height={500} width={500}/>
                </form>
            </div>
            <div className='downcontainerIndex' id="midScroll">
                <form>
                    <Link to='/build' className='downDiv' color='#dd600'>
                        <div className='box1'>
                            <Box description="Gaming" images={Img4}/>
                        </div>
                        <div className='box1'>
                            <Box description="Office" images={Img5}/>
                        </div>
                        <div className='box1'>
                            <Box description="Educational" images={Img6}/>
                        </div>
                    </Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}

const Box = (props) => {
    return (
        <div>
            <div className='homeBox' style={{cursor:'pointer'}}>
                <img src={props.images} alt='' height={300} width={300}/>
                <h1>for {props.description}</h1>
            </div>
        </div>
    )
}


const Footer = () => {
    const contact_text1 = 'PUP Sta. Mesa, Manila, Philippines'
    const contact_text2 = 'buildityourself@mail.com'
    const contact_text3 = 'www.facebook.com/b-i-y'
    const contact_text4 = 'www.intagram.com/@b-i-y'
    const contact_text5 = 'www.youtube.com/Build-It-Yourself'

    return (
        <div className='homeFooter'> 
            <div className='homeFooterleft'>
                <h1>Social Media Links</h1>
                <div className='contact_apps'> 
                    <BsFacebook size={50}/> {contact_text3}
                </div>
                <div className='contact_apps'> 
                    <BsInstagram size={50}/> {contact_text4}
                </div>
                <div className='contact_apps'> 
                    <BsYoutube size={50}/> {contact_text5}
                </div>
            </div>
            <div className='homeFooterright'>
                <h1>Contact Info</h1>
                <div className='contact_apps'>
                    <MdLocationOn size={50}/>{contact_text1}
                </div>
                <div className='contact_apps'>
                    <MdEmail size={50}/>{contact_text2}
                </div>
            </div>
        </div>
    )
}

export default Home
