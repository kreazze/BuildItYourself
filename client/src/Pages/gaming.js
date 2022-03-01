import React from "react"
import "./dropdown.css"
import Student1 from '../Images/student1.png';
import Student2 from '../Images/student2.png';
import Student3 from '../Images/student3.png';

const Studentbox = (props) => {
  return (
      <div>
          <div className='studentContainer' style={{cursor:'pointer'}}>
            <img src={props.images} alt='' height={175} width={250}/>
            <p style={{ fontSize: "14px", padding: "15x 0", color: "black" }}>{props.info1}</p>
            <p style={{ fontSize: "12px", padding: "0 0", color: "gray" }}>{props.info2}</p>
            <p style={{ fontSize: "12px", padding: "0 0", color: "gray" }}>{props.info3}</p>          
          </div>
      </div>
  )
}

function Gaming() {
  return (
    <>
    <div className="dropdown-area">
      <div className="dropdown-header">
        <h3>PRE-BUILTS for Student</h3>
      </div>
      <div className="dropdown-body">
        <div className="dropdown-sub">
          <Studentbox info1="HP ENVY All-in-One PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student1}/>
          <Studentbox info1="HP All-in-One 24-df1036xt PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student2}/>
          <Studentbox info1="Acer ASpire XC-830" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student3}/>
          <Studentbox info1="HP All-in-One 24-df1036xt PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student2}/>
        </div>
        <div className="dropdown-sub">
          <Studentbox info1="HP ENVY All-in-One PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student1}/>
          <Studentbox info1="HP All-in-One 24-df1036xt PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student2}/>
          <Studentbox info1="Acer ASpire XC-830" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student3}/>
          <Studentbox info1="HP All-in-One 24-df1036xt PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student2}/>
        </div>
        <div className="dropdown-sub">
          <Studentbox info1="HP ENVY All-in-One PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student1}/>
          <Studentbox info1="HP All-in-One 24-df1036xt PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student2}/>
          <Studentbox info1="Acer ASpire XC-830" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student3}/>
          <Studentbox info1="HP All-in-One 24-df1036xt PC" info2="HP ENVY All-in-One PC" info3="HP ENVY All-in-One PC" images={Student2}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Gaming
