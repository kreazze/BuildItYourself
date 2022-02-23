import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Button, Form } from "react-bootstrap";

const Build = () => {
  var [processor, setProcessor] = useState("");
  var [motherboard, setMotherboard] = useState("");
  var [graphicsCard, setGraphicsCard] = useState("");
  var [isDisabled, setIsDisabled] = useState(false);

  const createOrders = () => {
    Axios.post("http://localhost:3001/createOrders", {
      processor,
      motherboard,
      graphicsCard,
    }).then((response) => {
      alert("Build submitted");
    });
  };

  const enableMotherboard = () => {
    
    if (processor.value === "null") {
      setIsDisabled(!isDisabled)
    }
  };

 
  return (
<<<<<<< HEAD
    <div
      style={{
      display: "inline-block",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    }}>
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
=======
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupProcessor">
          <Form.Label>Processor:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onInput={enableMotherboard}
            onChange={(event) => 
              setProcessor(event.target.value)}
          >
            <option value="null" selected>Please select a processor...</option>
            <option value="Intel i5">Intel i5</option>
            <option value="AMD A7">AMD A7</option>
            <option value="AMD Ryzen 3">AMD Ryzen 3</option>
          </Form.Select>
          
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMotherboard">
          <Form.Label>Motherboard:</Form.Label>
          <Form.Select
            disabled={isDisabled}
            aria-label="Default select example"
            id="motherboardDrop"
            
            onChange={(event) => {
              setMotherboard(event.target.value);
            }}
          >
            <option id="null">Please select a motherboard...</option>
            <option value="Asus">Asus</option>
            <option value="Acer">Acer</option>
            <option value="Gigabyte">Gigabyte</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupGraphicsCard">
          <Form.Label>Graphics Card:</Form.Label>
          <Form.Select
            disabled={isDisabled}
            aria-label="Default select example"
            id="GraphicsCardDrop"
            onChange={(event) => {
              setGraphicsCard(event.target.value);
            }}
          >
            <option id="null">Please select a graphics card...</option>
            <option value="GTX 1050">GTX 1050</option>
            <option value="RX 6600">RX 6600</option>
            <option value="GTX 3060">GTX 3060</option>
          </Form.Select>
        </Form.Group>
        <button onClick={createOrders}>Submit</button>
      </Form>

      <p>{processor}{motherboard}{graphicsCard}</p>
>>>>>>> b54f214288d0b6c6922df7f9a5493148a4e4b3e6
    </div>
  );
};

export default Build;
