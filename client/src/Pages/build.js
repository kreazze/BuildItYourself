import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import "./build.css";
import Slides1 from "./slides1";
import Slides2 from "./slides2";
import Slides3 from "./slides3";
import Slides4 from "./slides4";
import Transaction from "./transaction";


const Build = () => {
  var [processor, setProcessor] = useState("");
  var [motherboard, setMotherboard] = useState("");
  var [ram, setRAM] = useState("");
  var [graphicsCard, setGraphicsCard] = useState("");
  var [storage, setStorage] = useState("");
  var [powerSupply, setPowerSupply] = useState("");
  var [systemCooler, setSystemCooler] = useState("");
  var [cpuCase, setCPUCase] = useState("");
  var [monitor, setMonitor] = useState("");
  var [keyboard, setKeyboard] = useState("");
  var [mouse, setMouse] = useState("");


  const createOrders = () => {
    Axios.post("http://localhost:3001/createOrders", {
      processor,
      motherboard,
      graphicsCard,
      ram,
      storage,
      powerSupply,
      systemCooler,
      cpuCase,
      monitor,
      keyboard,
      mouse,
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
    <div className="Process">
      <div className="firstProcess">
        <Form className="buildForm">
          <alert id="note"><b>NOTE:</b> Choose an item for every needed component</alert>
          <Form.Group controlId="formGroupProcessor">
            <Form.Label>Processor</Form.Label>
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
            <Slides1 />
          </Form.Group>

          <Form.Group controlId="formGroupMotherboard">
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
            <Slides2 />
          </Form.Group>
          
          <Form.Group controlId="formGroupRAM">
            <Form.Label>RAM:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="RAMDrop"
              
              onChange={(event) => {
                setRAM(event.target.value);
              }}
            >
              <option id="null">Please select a RAM...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
            <Slides3 />
          </Form.Group>

          <Form.Group controlId="formGroupGraphicsCard">
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
            <button onClick={handleEnableGPU} type="button" >Next</button>
            <Slides4 />
          </Form.Group>

          <Form.Group controlId="formGroupStorage">
            <Form.Label>Storage:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="storageDrop"
              
              onChange={(event) => {
                setStorage(event.target.value);
              }}
            >
              <option id="null">Please select a storage...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
          </Form.Group>

          <Form.Group controlId="formGroupPowerSupply">
            <Form.Label>Power Supply:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="powersupplyDrop"
              
              onChange={(event) => {
                setPowerSupply(event.target.value);
              }}
            >
              <option id="null">Please select a Power Supply...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
          </Form.Group>

          <Form.Group controlId="formGroupSystemCooler">
            <Form.Label>System Cooler:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="systemcoolerDrop"
              
              onChange={(event) => {
                setSystemCooler(event.target.value);
              }}
            >
              <option id="null">Please select a System Cooler...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
          </Form.Group>
          
<<<<<<< HEAD
          <Form.Group controlId="formGroupSoundCard">
            <Form.Label>Sound Card:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="soundcardDrop"
              
              onChange={(event) => {
                setSoundCard(event.target.value);
              }}
            >
              <option id="null">Please select a Sound Card...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
          </Form.Group>
=======
      
>>>>>>> 8da2a798450e878f4be0e097b8d704f8442ce8c7

          <Form.Group controlId="formGroupCPUCase">
            <Form.Label>CPU Case:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="cpucaseDrop"
              
              onChange={(event) => {
                setCPUCase(event.target.value);
              }}
            >
              <option id="null">Please select a CPU Case...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
          </Form.Group>

          <Form.Group controlId="formGroupMonitor">
            <Form.Label>Monitor:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="monitorDrop"
              
              onChange={(event) => {
                setMonitor(event.target.value);
              }}
            >
              <option id="null">Please select a Monitor...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
          </Form.Group>

          <Form.Group controlId="formGroupKeyboard">
            <Form.Label>Keyboard:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="keyboardDrop"
              
              onChange={(event) => {
                setKeyboard(event.target.value);
              }}
            >
              <option id="null">Please select a Keyboard...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={handleEnableGPU} type="button" >Next</button>
          </Form.Group>

          <Form.Group controlId="formGroupMouse">
            <Form.Label>Mouse:</Form.Label>
            <Form.Select
              disabled={disabledMobo}
              aria-label="Default select example"
              id="mouseDrop"
              
              onChange={(event) => {
                setMouse(event.target.value);
              }}
            >
              <option id="null">Please select a Mouse...</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="Gigabyte">Gigabyte</option>
            </Form.Select>
            <button onClick={createOrders}>Confirm Order</button>
          </Form.Group>
          </Form>

        <p>{processor}{motherboard}{ram}{graphicsCard}{storage}{powerSupply}{systemCooler}
        {cpuCase}{monitor}{keyboard}{mouse}</p>
      </div>
      <div className="secondProcess">

      </div>
    </div>
  );
};

export default Build
