import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css";
import Footer from '../Pages/footer';
import Img3 from '../Images/img3.png';
import Img4 from '../Images/img4.png';
import Img5 from '../Images/img5.png';
import Img6 from '../Images/img6.png';

const Home = () => {
    const Box = (props) => {
        return (
            <div>
                <div className='homeBox' style={{cursor:'pointer'}}>
                    <img src={props.images} alt='' height={300} width={300}/>
                    <h1>{props.description}</h1>
                </div>
            </div>
        )
    }

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
                    <Link to='/build'>
                        <button className='btnHome2'>Build Now</button>
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
                    <div className='downDiv' color='#dd600'>
                        <Link to='/office' className='box1'>
                            <Box description="Office" images={Img5}/>
                        </Link>
                        <Link to='/gaming' className='box1'>
                            <Box description="Gaming" id="dropdown" images={Img4}/>
                        </Link>
                        <Link to='/education' className='box1'>
                            <Box description="Education" images={Img6}/>
                        </Link>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Home