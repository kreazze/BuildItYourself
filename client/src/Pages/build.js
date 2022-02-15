import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
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
    </div>
  );
};

export default Build;
