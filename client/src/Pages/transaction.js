import React, {useState}  from 'react'
import './transaction.css'


const Transaction = () => {
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

    return (
        <div className='contactUs_body'>
            <div className='header'>
                <h1>Connect with us!</h1>
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
            </div>
        </div>
    )
}

export default Transaction
