import React from "react"
import "./dropdown.css"
import Footer from '../Pages/footer';
import Ofc1 from '../Images/ofc1.png';
import Ofc2 from '../Images/ofc2.png';
import Ofc3 from '../Images/ofc3.jpg';
import Ofc4 from '../Images/ofc4.png';
import Ofc5 from '../Images/ofc5.png';
import Ofc6 from '../Images/ofc6.jpg';
import Ofc7 from '../Images/ofc7.png';



const Studentbox = (props) => {
  return (
      <div>
          <div className='studentContainer' style={{cursor:'pointer'}}>
            <div id="id-img"><img id="id-img1" src={props.images} alt='' height={175} width={250}/></div>
            <div id="id-p">
              <p style={{ fontSize: "14px", padding: "0 0", color: "black" }}>{props.info1}</p>
              <p style={{ fontSize: "12px", padding: "0 0", color: "white" }}>{props.info2} <br/> {props.info3}</p>
            </div>       
          </div>
      </div>
  )
}

function Office() {
  return (
    <>
    <div className="dropdown-area">
      <div className="dropdown-header">
        <h3>PRE-BUILTS for <span id="id-span">Office</span></h3>
      </div>
      <div className="dropdown-body">
        <div className="dropdown-sub">
          <Studentbox 
            info1="ASRock B660M Pro RS Motherboard" 
            info2="Intel Core i3 - Western Digital Blue SN550 M.2 SSD" 
            info3="PHP 23,463.52" 
            images={Ofc1}/>
          <Studentbox 
            info1="OptiPlex 3080 Micro" 
            info2="Intel Core i5 - 8GB, 1x8GB, DDR4 RAM + 256 GB SSD" 
            info3="PHP 42,049.51" 
            images={Ofc2}/>
          <Studentbox 
            info1="Acer ASpire XC-830" 
            info2="AMD Ryzen 3 2200G - 8GB DDR4-300 Memory + 512 GB SSD" 
            info3="PHP 26,041.94" 
            images={Ofc3}/>
          <Studentbox 
            info1="WFH Office PC Build Guide" 
            info2="AMD Athlon 3000G - Kingston HyperX Fury 8GB 2666Mhz + 240GB M.2 SSD" 
            info3="PHP 10,471.00" 
            images={Ofc4}/>
        </div>
        <div className="dropdown-sub">
          <Studentbox 
            info1="Budget Office PC Build" 
            info2="AMD A4-7300 APU - 8GB DDR RAM + 320GB Western Digital Blue" 
            info3="PHP 12,243.65 " 
            images={Ofc5}/>
          <Studentbox 
            info1="Office Desktop Build" 
            info2="Intel Core i3 10100 - Oloy 2x8GB DDR4 2666 + 512GB SSD" 
            info3="PHP 27,827.64"
            images={Ofc6}/>
          <Studentbox 
            info1="HP All-in-One 24-df1036xt PC" 
            info2="HP ENVY All-in-One PC" 
            info3="HP ENVY All-in-One PC" 
            images={Ofc7}/>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Office
