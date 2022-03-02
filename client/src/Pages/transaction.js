import React, {useState}  from 'react'
import './transaction.css'


const Transaction = () => {
    const [fullname, setFullName] = useState('');
    const [mobilenum, setMobileNum] = useState('');
    const [deliveryaddress, setDeliveryAddress] = useState('');
    const [email, setemail] = useState('');
    const [notes, setNotes] = useState('');

    const fullnametb = (e) => {
        setFullName(e.target.value)
    }
    const mobilenumtb = (e) => {
        setMobileNum(e.target.value)
    }
    const devaddresstb = (e) => {
        setDeliveryAddress(e.target.value)
    }
    const emailtb = (e) => {
        setemail(e.target.value)
    }
    const notestb = (e) => {
        setNotes(e.target.value)
    }


    return (
        <div className='transaction-body'>
            <div className='transaction-header'>
                <h1>BILLLING DETAILS</h1>
            </div>
            <div className='containerTransaction'>
                <div className='transaction_div2'>
                    <div className='transaction-order'>
                        <h2 id="h2-id">Your Order</h2>
                        <alert>Check your order details below</alert>                     
                    </div>
                </div> 
                <div className='transaction_div1'>
                    <div>
                        <h4 id="id-label">Please fill in with your personal details:</h4>
                        <label id="id-label">Full Name:</label>
                        <input 
                            id="textBox" 
                            type={fullname} 
                            name='fullName' 
                            onChange={fullnametb} 
                            placeholder='Enter full name' 
                            required/>
                        
                        <label id="id-label">Mobile Number:</label>
                        <input 
                            id="textBox" 
                            type={mobilenum} 
                            name='mobilenum' 
                            onChange={mobilenumtb} 
                            placeholder='09XX-XXX-XXXX' 
                            required/> <br/>

                        <label id="id-label">E-mail:</label>
                        <input 
                            id="textBox" 
                            type={email} 
                            name='email' 
                            onChange={emailtb} 
                            placeholder= 'ex. abc@example.com' 
                            required/> <br/>

                        <label id="id-label">Delivery Address:</label>
                        <input 
                            id="textBox" 
                            type={deliveryaddress} 
                            name='4address' 
                            onChange={devaddresstb} 
                            placeholder='Complete address'/> <br/>

                        <label id="id-label">Mode of Payment :</label>
                        <div id="id-radio">
                            <label class="container">Debit
                                <input type="radio"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Credit
                                <input type="radio"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Mobile Payments
                                <input type="radio"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>

                        <label id="id-label">Order Notes: (Optional)</label>
                        <textarea 
                            id="textBox" 
                            type={notes} 
                            name='message' 
                            onChange={notestb} 
                            rows='10' 
                            placeholder='Notes regarding your order'/>
                        <button id='doneBtn' type='submit' variant='warning'>Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction
