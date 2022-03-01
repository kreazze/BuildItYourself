import React from "react"
import "./dropdown.css"
import Footer from '../Pages/footer';
import Educ1 from '../Images/educ1.jpg';
import Educ2 from '../Images/educ2.png';
import Educ3 from '../Images/educ3.jpg';
import Educ4 from '../Images/educ4.webp';
import Educ5 from '../Images/educ5.png';
import Educ6 from '../Images/educ6.png';
import Educ7 from '../Images/educ7.png';
import Educ8 from '../Images/educ8.png';
import Educ9 from '../Images/educ9.png';


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

function Education() {
  return (
    <>
    <div className="dropdown-area">
      <div className="dropdown-header">
        <h3>PRE-BUILTS for <span id="id-span">Education</span></h3>
      </div>
      <div className="dropdown-body">
        <div className="dropdown-sub">
          <Studentbox 
            info1="Dell - Inspiron 24'' Touch-Screen All-In-One" 
            info2="Intel Core i3 - 8GB Memory-256GB SSD" 
            info3="PHP 33,171.59" 
            images={Educ1}/>
          <Studentbox 
            info1="HP - All-in-One 24-df1036xt PC" 
            info2="AMD Ryzen 5 - 128GB-256GB SSD" 
            info3="PHP 39,488.15" 
            images={Educ2}/>
          <Studentbox 
            info1="Lenovo - IdeaCentre A540 24'' Touch-Screen All-In-One" 
            info2="AMD Ryzen 3 - 8GB-256GB SSD Black" 
            info3="PHP 35,893.65" 
            images={Educ3}/>
          <Studentbox 
            info1="Dell - Inspiron 5680" 
            info2="Intel Core i5 8400 - 8GB RAM 128GB SSD + 1TB " 
            info3="PHP 53,694.64" 
            images={Educ4}/>
        </div>
        <div className="dropdown-sub">
          <Studentbox 
            info1="ASUS S500MA-710700013T" 
            info2="Intel Core i7 - DDR4 RAM 2TB SSD + 3TB HDD" 
            info3="PHP 48,936.04" 
            images={Educ5}/>
          <Studentbox 
            info1="Acer - Aspire CC22" 
            info2="Intel Pentium Silver - 16GB DDR4 512GB SSD" 
            info3="PHP 23,262.18" 
            images={Educ6}/>
          <Studentbox 
            info1="Acer - Aspire CC24" 
            info2="Intel Core i5-825OU - 16GB DDR4 SDRAM + 1TB HDD + 128GB SSD" 
            info3="PHP 39,999.00" 
            images={Educ7}/>
          <Studentbox 
            info1="Acer - Aspire Z 24 All in One Desktop PC" 
            info2="Intel Core i7 8 GB DDR4 2400 MHz and 16 GB Intel Optane Memory" 
            info3="PHP 48,250.00" 
            images={Educ8}/>
        </div>
        <div className="dropdown-sub">
          <Studentbox 
            info1="ThinkCentre M70a All-in-One PC" 
            info2="Intel Core i3 - 8GB DDR4 128GB PCIeSSD" 
            info3="PHP 48,813.65" 
            images={Educ9}/>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Education
