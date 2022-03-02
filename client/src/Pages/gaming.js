import React from "react"
import "./dropdown.css"
import Footer from '../Pages/footer';
import Student1 from '../Images/student1.png';
import Student2 from '../Images/student2.png';
import Student3 from '../Images/student3.png';

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

function Gaming() {
  return (
    <>
    <div className="dropdown-area">
      <div className="dropdown-header">
        <h3>PRE-BUILTS for <span id="id-span">Gaming</span></h3>
      </div>
      <div className="dropdown-body">
        <div className="dropdown-sub">
          <Studentbox 
            info1="Entry Level AMD Gaming Build" 
            info2="AMD Ryzen 5 5600G - 16GB DDR4 RAM + 480-15360GB SSD" 
            info3="PHP 22,502.25" 
            images={Student1}/>
          <Studentbox 
            info1="Modest Intel Gaming Build" 
            info2="Intel Core i5-12400F - 2x8GB DDR4 RAM + 1TB NVME SSD" 
            info3="PHP 56,421.57" 
            images={Student2}/>
          <Studentbox 
            info1="Enthusiast Intel Gaming/Streaming Build" 
            info2="Intel Core i7-12700K - 32GB DDR4-3200 RAM + 1TB NVME SSD" 
            info3="PHP 99,873.00" 
            images={Student3}/>
          <Studentbox 
            info1="Mid-Budget Gaming PC" 
            info2="AMD Ryzen 5 2600X @4.2 GHz GeForce GTX 1070" 
            info3="PHP 41,819.25" 
            images={Student2}/>
        </div>
        <div className="dropdown-sub">
          <Studentbox 
            info1="Low-Budget Gaming PC" 
            info2="Intel Core i7-11700K @3.6 GHz 8-Core - 16GB DDR4-2400 RAM + 500 GB 2.5'' SSD" 
            info3="PHP 31,935.73" 
            images={Student1}/>
          <Studentbox 
            info1="PCX GFH TUF FROST STRIX Intel Core I9 Gaming Desktop" 
            info2="Intel Core i9 - 32GB 3200MHZ (4x8GB) 500GB PCIE NVME M.2 SSD | 4TB SATA & NVIDIA® GEFORCE RTX™ 3070 OC" 
            info3="PHP 156,995.00" 
            images={Student2}/>
          <Studentbox 
            info1="PCX GFH CENTAUR TUF GAMING DESKTOP" 
            info2="AMD Ryzen™ 5 3600 (3.6GHZ) - 2500GB PCIE NVME M.2 SSD + 1TB SATA & NVIDIA GEFORCE® GTX 1660 SUPER™ OC" 
            info3="PHP 59,495.00" 
            images={Student2}/>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Gaming
