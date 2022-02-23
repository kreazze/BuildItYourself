import React from "react";
import { useState } from "react";
import Axios from "axios";
import {Form } from "react-bootstrap";

const Build = () => {
  var [processor, setProcessor] = useState("");
  var [motherboard, setMotherboard] = useState("");
  var [graphicsCard, setGraphicsCard] = useState("");

  const createOrders = () => {
    Axios.post("http://localhost:3001/createOrders", {
      processor,
      motherboard,
      graphicsCard,
    }).then((response) => {
      alert("Build submitted");
    });
  };

  const [disabledMobo, setDisabledMobo] = useState(true);
  const [disabledGPU, setDisabledGPU] = useState(true);

  function handleEnableMobo() {
    if (processor.length !== 0 && processor !== "null"){
      setDisabledMobo(!disabledMobo);
    }
  }
  function handleEnableGPU() {
    if (processor.length !== 0 && processor !== "null" && motherboard.length !== 0 && motherboard !== "null"){
      setDisabledGPU(!disabledGPU);
    }
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupProcessor">
          <Form.Label>Processor:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(event) => 
              setProcessor(event.target.value)}
          >
            <option value="null" selected>Please select a processor...</option>
            <option value="Intel i5">Intel i5</option>
            <option value="AMD A7">AMD A7</option>
            <option value="AMD Ryzen 3">AMD Ryzen 3</option>
          </Form.Select>
              <button onClick={handleEnableMobo} type="button" >Next</button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMotherboard">
          <Form.Label>Motherboard:</Form.Label>
          <Form.Select
            disabled={disabledMobo}
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
          <button onClick={handleEnableGPU} type="button" >Next</button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupGraphicsCard">
          <Form.Label>Graphics Card:</Form.Label>
          <Form.Select
            disabled={disabledGPU}
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
    </div>
  );
};

export default Build;
