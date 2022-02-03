import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import Img3 from '../Images/img3.png';
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

const Home = () => {
    return (
        <div>
            <div className='uppercontainerIndex'>
                <form className='upperleftDiv'>
                    <h1>LET'S <span>BUILD YOUR PC</span> NOW!</h1>
                    <p className='pIndex'>Get your way to technology</p>
                    <Link to='/learn'>
                        <button className='btnHome1'>Learn More</button>
                    </Link>
                    <Link to='/pre-build'>
                        <button className='btnHome2'>Pre-Builds</button>
                    </Link>
                </form>
                <form className='upperrightDiv'>
                    <img src={Img3} alt='' height={500} width={500}/>
                </form>
            </div>
            <div className='downcontainerIndex'>
                <form>
                </form>
            </div>
        </div>
    )
}

export default Home
