import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from '../Pages/footer';

const Build = () => {
  const [processor, setProcessor] = useState("");
  const [motherboard, setMotherboard] = useState("");
  const [graphicsCard, setGraphicsCard] = useState("");

  const createOrders = () => {
    Axios.post("http://localhost:3001/createOrders", {
      processor,
      motherboard,
      graphicsCard,
    }).then((response) => {
      alert("Build submitted");
    });
  };
  return (
    <div  
      style={{
      display: "inline-block",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    }}
    >
      <input
        type="text"
        placeholder="Processor"
        onChange={(event) => {
          setProcessor(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Motherboard"
        onChange={(event) => {
          setMotherboard(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Graphics card"
        onChange={(event) => {
          setGraphicsCard(event.target.value);
        }}
      />
      <button onClick={createOrders}>Submit</button>
      <Footer/>
    </div>
    
  );
};

export default Build;
