import React from 'react';
import './footer.css';
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';
import {MdLocationOn, MdEmail} from 'react-icons/md';

const Footer = () => {
    const contact_text1 = 'PUP Sta. Mesa, Manila, Philippines'
    const contact_text2 = 'buildityourself@mail.com'
    const contact_text3 = 'www.facebook.com/b-i-y'
    const contact_text4 = 'www.intagram.com/@b-i-y'
    const contact_text5 = 'www.youtube.com/Build-It-Yourself'

    return (
        <div className='homeFooter'> 
            <div className='homeFooterleft'>
                <h2>Social Media Links</h2>
                <div className='contact_apps'> 
                    <BsFacebook size={30}/> {contact_text3}
                </div>
                <div className='contact_apps'> 
                    <BsInstagram size={30}/> {contact_text4}
                </div>
                <div className='contact_apps'> 
                    <BsYoutube size={30}/> {contact_text5}
                </div>
            </div>
            <div className='homeFooterright'>
                <h2>Contact Info</h2>
                <div className='contact_apps'>
                    <MdLocationOn size={30}/>{contact_text1}
                </div>
                <div className='contact_apps'>
                    <MdEmail size={30}/>{contact_text2}
                </div>
            </div>
        </div>
    )
}

export default Footer
