import React, {useState}  from 'react'
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';
import {MdLocationOn, MdEmail} from 'react-icons/md';
import './contactUs.css'

const ContactUs = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const firstNametb = (e) => {
        setfirstName(e.target.value)
    }
    const lastNametb = (e) => {
        setlastName(e.target.value)
    }
    const addresstb = (e) => {
        setaddress(e.target.value)
    }
    const emailtb = (e) => {
        setemail(e.target.value)
    }
    const messagetb = (e) => {
        setmessage(e.target.value)
    }

    const contact_text1 = 'PUP Sta. Mesa, Manila, Philippines'
    const contact_text2 = 'buildityourself@mail.com'
    const contact_text3 = 'www.facebook.com/buildityourself'
    const contact_text4 = 'www.intagram.com/_buildityourself'
    const contact_text5 = 'www.youtube.com/Build-It-Yourself'


    return (
        <div className='contactUs_body'>
            <div className='header'>
                <h1><b>Connect with us!</b></h1>
            </div>
            <div className='containerContact'>
                <div className='contactUs_div1'>
                    <form>
                        <h2>Have some questions? Send us a message.</h2>
                        <alert>Feel free to contact us with your concerns.</alert> <br/>
                        <input 
                            id="textBox" 
                            type={firstName} 
                            name='firstName' 
                            onChange={firstNametb} 
                            placeholder='Enter first name' 
                            required/> <br/>
                        <input 
                            id="textBox" 
                            type={lastName} 
                            name='lastName' 
                            onChange={lastNametb} 
                            placeholder='Enter last name' 
                            required/> <br/>
                        <input 
                            id="textBox" 
                            type={address} 
                            name='address' 
                            onChange={addresstb} 
                            placeholder='Enter address'/> <br/>
                        <input 
                            id="textBox" 
                            type={email} 
                            name='email' 
                            onChange={emailtb} 
                            placeholder='Enter e-mail (ex. abc@example.com)' 
                            required/> <br/>
                        <textarea 
                            id="textBox" 
                            type={message} 
                            name='message' 
                            onChange={messagetb} 
                            rows='8' 
                            placeholder='Type message here' 
                            required/> <br/>                        
                        <button 
                            id='sendBtn' type='submit' variant='warning'>Send</button>
                    </form>
                </div>
                <div className='contactUS_div2'>
                    <div className='appicon_div'>
                        <h2 id="h2-id">Contact Information</h2>
                        <div className='contact'>
                            <MdLocationOn size={50}/>{contact_text1}
                        </div>
                        <div className='contact'>
                            <MdEmail size={50}/>{contact_text2}
                        </div><br/>
                        
                        <h2 id="h2-id">Other ways to connect</h2>
                        <div className='contact'>
                            <BsFacebook size={50}/>{contact_text3}
                        </div>
                        <div className='contact'>
                            <BsInstagram size={50}/>{contact_text4}
                        </div>
                        <div className='contact'>
                            <BsYoutube size={50}/>{contact_text5}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ContactUs
