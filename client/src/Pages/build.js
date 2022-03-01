import React from "react";
import { useState, useRef} from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import "./build.css";
import Slides1 from "./slides1";
import Slides2 from "./slides2";
import Slides3 from "./slides3";
import Slides4 from "./slides4";
import Slides5 from "./slides5"
import Slides6 from "./slides6"
import Slides7 from "./slides7"
import Slides8 from "./slides8"
import Slides9 from "./slides9"
import Slides10 from "./slides10"
import Slides11 from "./slides11"
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
  const [disabledPButton, setDisabledPButton] = useState(true);
  const [disabledMButton, setDisabledMButton] = useState(true);
  const [disabledGButton, setDisabledGButton] = useState(true);
  const [disabledRButton, setDisabledRButton] = useState(true);
  const [disabledPSButton, setDisabledPSButton] = useState(true);
  const [disabledProcessor, setDisabledProcessor] = useState(false);
  const [disabledMobo, setDisabledMobo] = useState(true);
  const [disabledRAM, setDisabledRAM] = useState(true);
  const [disabledGPU, setDisabledGPU] = useState(true);
  const [RyzenDisable, setDisableRyzen] = useState(true);
  const [FxDisable, setDisableFx] = useState(true);
  const [IntelDisable, setDisableIntel] = useState(true);
  const [DDR3Disable, setDisableDDR3] = useState(true);
  const [DDR4Disable, setDisableDDR4] = useState(true);
  const {ProcessorDrop, MoboDrop} = useRef(null);

  function DoneProcessor() {
    setDisabledProcessor(!disabledProcessor);
    setDisabledMobo(!disabledMobo);
    
    if (processor.includes("Intel")){
      setDisableRyzen(RyzenDisable);
      setDisableFx(FxDisable);
      setDisableIntel(!IntelDisable);
      
    }
    if (processor.includes("Ryzen")){
      setDisableRyzen(!RyzenDisable);
      setDisableFx(FxDisable);
      setDisableIntel(IntelDisable);
    }
    if (processor.includes("FX")){
      setDisableRyzen(RyzenDisable);
      setDisableFx(!FxDisable);
      setDisableIntel(IntelDisable);
    }
   
  }
  function DoneMobo() {
    setDisabledMobo(disabledMobo);
    setDisabledRAM(!disabledRAM);
    if (motherboard.includes("970")){
      setDisableDDR4(DDR4Disable);
      setDisableDDR3(!DDR3Disable);
    }
    else {
      setDisableDDR3(DDR3Disable);
      setDisableDDR4(!DDR4Disable);
    }
  }

  function StartProcessor(){
    
    if (processor.length !== 0){
      setDisabledPButton(disabledPButton)
    }

    else {
      setDisabledPButton(!disabledPButton)
    }
  }

  function StartMobo(){
    
    if (motherboard.length !== 0){
      setDisabledMButton(disabledPButton)
    }

    else {
      setDisabledMButton(!disabledPButton)
    }
  }
  function StartRAM(){
    if (ram.length !== 0){
      setDisabledRButton(disabledRButton)
    }

    else {
      setDisabledRButton(!disabledRButton)
    }
  }


  return (
    <div className="Process">
      <div className="firstProcess">
        <Form className="buildForm">
          <alert id="id-note"><b>NOTE:</b> Choose an item for every needed component</alert>
          <Form.Group controlId="formGroupProcessor" >
            <Form.Label>Processor</Form.Label>
            <Form.Select
              required
              ref = {ProcessorDrop}
              disabled={disabledProcessor}
              onClick={StartProcessor}
              onChange={(event) => 
                setProcessor(event.target.value)}
            >
              <option value="" selected isInvalid>Please select a processor...</option>
              <option value="AMD Ryzen 3 3300X" >AMD Ryzen 3 3300X</option>
              <option value="AMD FX-6300">AMD FX-6300</option>
              <option value="Intel Core i9-9900K">Intel Core i9-9900K</option>
              <option value="Intel Core i7-10700K">Intel Core i7-10700K</option>
              <option value="Intel Core i5-10400F">Intel Core i5-10400F</option>
            </Form.Select>
            <button onClick={DoneProcessor} type="button" disabled={disabledPButton} >Next Component / Change selection</button>
            <Slides1 />
          </Form.Group>

          <Form.Group controlId="formGroupMotherboard">
            <Form.Label>Motherboard:</Form.Label>
            <Form.Select
              required
              ref = {MoboDrop}
              disabled={disabledMobo}
              onClick={StartMobo}
              onChange={(event) => {
                setMotherboard(event.target.value);
              }}
            >
              <option value="" selected isInvalid>Please select a motherboard...</option>
              <option value="ASUS CROSSHAIR VI HERO" disabled={RyzenDisable}>ASUS CROSSHAIR VI HERO</option>
              <option value="ASUS Z170 PRO GAMING" disabled={IntelDisable}>ASUS Z170 PRO GAMING</option>
              <option value="ASUS 970 PRO GAMING/AURA"disabled={FxDisable}>ASUS 970 PRO GAMING/AURA</option>
              <option value="Gigabyte AB350-Gaming 3-CF" disabled={RyzenDisable}>Gigabyte AB350-Gaming 3-CF</option>
              <option value="TUF GAMING Z490" disabled={IntelDisable}>TUF GAMING Z490</option>
            </Form.Select>
            <button onClick={DoneMobo} disabled={disabledMButton} type="button" >Next Component / Change selection</button>
            <Slides2 />
          </Form.Group>
          
          <Form.Group controlId="formGroupRAM">
            <Form.Label>RAM:</Form.Label>
            <Form.Select
              disabled={disabledRAM}
              required
              onClick={StartRAM}
              onChange={(event) => {
                setRAM(event.target.value);
              }}
            >
              <option value="" selected isInvalid>Please select a RAM...</option>
              <option value="Kingston HyperX Predator DDR3 - 8 GB" disabled={DDR3Disable}>Kingston HyperX Predator DDR3 - 8 GB</option>
              <option value="Corsair Dominator Platinum DDR4 - 32 GB" disabled={DDR4Disable}>Corsair Dominator Platinum DDR4 - 32 GB</option>
              <option value="HyperX Fury RGB 3733MHz DDR4 - 16 GB" disabled={DDR4Disable}>HyperX Fury RGB 3733MHz DDR4  - 16 GB</option>
              <option value="G.Skill Trident Z DDR4 - 64 GB" disabled={DDR4Disable}>G.Skill Trident Z DDR4 - 64 GB</option>
              <option value="Kingston HyperX Fury DDR4 - 16 GB" disabled={DDR4Disable}>Kingston HyperX Fury DDR4 - 16 GB</option>
            </Form.Select>
            <button type="button" disabled={disabledRButton}>Next Component / Change selection</button>
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
            <button type="button" >Next Component / Change selection</button>
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
            <button  type="button" >Next Component / Change selection</button>
            <Slides5 />
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
            <button type="button" >Next Component / Change selection</button>
            <Slides6 />
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
            <button type="button" >Next Component / Change selection</button>
            <Slides7 />
          </Form.Group>
          
      

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
            <button type="button" >Next Component / Change selection</button>
            <Slides8 />
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
            <button type="button" >Next Component / Change selection</button>
            <Slides9 />
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
            <button type="button" >Next Component / Change selection</button>
            <Slides10 />
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
            <Slides11 />
          </Form.Group>
          </Form>

      </div>
      <div className="secondProcess">

      </div>
    </div>
  );
};

export default Build
