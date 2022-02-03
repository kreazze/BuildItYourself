import React from "react";
import './index.css'
import Img4 from '../Images/img4.png';
import Img5 from '../Images/img5.png';
import Img6 from '../Images/img6.png';

function Box(props) {
    return (
        <div>
            <div>
                <div className='downleftDiv'>
                    <img src={Img4} alt='' height={500} width={500}/>
                </div> 
                <div className='downrightDiv'>
                    <h1>for Gaming, {props.description}</h1>
                </div>
            </div>
        </div>
    )
}

export default Box
