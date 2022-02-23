import React from 'react'
import './learn.css';
<<<<<<< HEAD
import { Carousel, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Pages/footer';
import Img6 from '../Images/img6.png';
import CPU from '../Images/cpu.png';
import Motherboard from '../Images/motherboard.png';
import RAM from '../Images/ram.png';
import GPU from '../Images/gpu.png';
import PSU from '../Images/powersupply.png';
import SystemCooling from '../Images/fan.png';
import Windows from '../Images/windows.png';
import Apple from '../Images/apple.png';
import Linux from '../Images/linux.png';
import CPUCase from '../Images/cpucase.png';
import Monitor from '../Images/monitor.png';
import Keyboard from '../Images/keyboard.png';
import Mouse from '../Images/mouse.png';
import Opportunities from '../Images/opportunities.jpg';
import Careers from '../Images/careers.jpg';
import Community from '../Images/community.jpg';


const Learn = () => {
    return (
        <div className='learnmore_body'>
            <Carousel>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={Img6}
                            alt="second"
                            height={400}
                            width={470}
                        />
                        <Carousel.Caption id='carouselTexttitle'>
                            <p>Parts of a Computer</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={CPU}
                            alt=""
                            height={400}
                            width={550}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Central Processing Unit</h2>
                            <p>also called central processor, is the electronic circuitry within a computer 
                                that executes instructions that make up a computer program</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={Motherboard}
                            alt=""
                            height={400}
                            width={400}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Motherboard</h2>         
                            <p>also called, system board, is the main printed circuit board in most computers. </p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={RAM}
                            alt=""
                            height={400}
                            width={550}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Random Access Memory</h2>
                            <p>a short term memory where data is stored as the processor needs it</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={GPU}
                            alt=""
                            height={450}
                            width={550}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Graphic Processing Unit</h2>
                            <p>creates graphics and images that can be shown on a monitor</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={PSU}
                            alt=""
                            height={380}
                            width={510}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Power Supply Unit</h2>
                            <p>a power supply converts the alternating high voltage current (AC) into direct current
                                DC), and they also regulate the DC output voltage to the fine tolerances required 
                                for modern computing components.</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={SystemCooling}
                            alt=""
                            height={450}
                            width={400}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>System Cooling</h2>
                            <p>designed to regulate and dissipate the heat generated by a computer</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={Windows}
                            alt=""
                            height={350}
                            width={350}
                        />
                        <img
                            src={Apple}
                            alt=""
                            height={350}
                            width={350}
                        />
                        <img
                            src={Linux}
                            alt=""
                            height={350}
                            width={350}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Operating System</h2>
                            <p>program that manages a computer's resources</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={CPUCase}
                            alt=""
                            height={400}
                            width={310}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>CPU Case</h2>
                            <p>designed to regulate and dissipate the heat generated by a computer</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={Monitor}
                            alt=""
                            height={400}
                            width={500}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Monitor</h2>
                            <p>designed to regulate and dissipate the heat generated by a computer</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={Keyboard}
                            alt=""
                            height={400}
                            width={800}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Keyboard</h2>
                            <p>designed to regulate and dissipate the heat generated by a computer</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carouselImages'>
                        <img
                            src={Mouse}
                            alt=""
                            height={400}
                            width={400}
                        />
                        <Carousel.Caption id='carouselText'>
                            <h2>Mouse</h2>
                            <p>designed to regulate and dissipate the heat generated by a computer</p> <br/>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='learnmore_div'>
                <Card className='learnmore_div1' style = {{borderRadius: "0px"}}>
                    <Card.Img src={Opportunities} height={350} width={300} />
                    <Card.Body>
                        <Card.Title>Opportunities</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='learnmore_div1' style = {{borderRadius: "0px"}}>
                    <Card.Img src={Careers} height={350} width={350} />
                        <Card.Body>
                            <Card.Title>Careers</Card.Title>
                        </Card.Body>
                </Card>
                <Card className='learnmore_div1' style = {{borderRadius: "0px"}}>
                    <Card.Img src={Community} height={350} width={300} />
                        <Card.Body>
                            <Card.Title>Community</Card.Title>
                        </Card.Body>
                </Card>
=======

const Learn = () => {
    return (
        <div>
            <div className='learnmore_div1'>
                <h1>Learn Now!</h1>
>>>>>>> b54f214288d0b6c6922df7f9a5493148a4e4b3e6
            </div>
        </div>
    )
}

export default Learn
