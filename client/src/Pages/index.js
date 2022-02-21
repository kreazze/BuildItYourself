import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css";
import Img3 from '../Images/img3.png';
import Img4 from '../Images/img4.png';
import Img5 from '../Images/img5.png';
import Img6 from '../Images/img6.png';

const Home = () => {
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
                    <a href="#midScroll" target='_parent' className='btnHome1'>Learn More</a>
                    <Link to='/pre-build'>
                        <button className='btnHome2'>Pre-Builds</button>
                    </Link>
                    <div className='anchorLink'>
                        <a name="midScroll"a/>
                    </div>
                </form>
                <form className='upperrightDiv'>
                    <img src={Img3} alt='' height={500} width={500}/>
                </form>
                
            </div>

            <div className='downcontainerIndex'>
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

export default Home
