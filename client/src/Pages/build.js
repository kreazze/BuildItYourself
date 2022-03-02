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
import "./dropdown.css"

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
  const [disabledMBButton, setDisabledMBButton] = useState(true);
  const [disabledGButton, setDisabledGButton] = useState(true);
  const [disabledRButton, setDisabledRButton] = useState(true);
  const [disabledPSButton, setDisabledPSButton] = useState(true);
  const [disabledSButton, setDisabledSButton] = useState(true);
  const [disabledCButton, setDisabledCButton] = useState(true);
  const [disabledCSButton, setDisabledCSButton] = useState(true);
  const [disabledMSButton, setDisabledMSButton] = useState(true);
  const [disabledKButton, setDisabledKButton] = useState(true);
  const [disabledProcessor, setDisabledProcessor] = useState(false);
  const [disabledMobo, setDisabledMobo] = useState(true);
  const [disabledRAM, setDisabledRAM] = useState(true);
  const [disabledGPU, setDisabledGPU] = useState(true);
  const [disabledStorage, setDisabledStorage] = useState(true);
  const [disabledCooler, setDisabledCooler] = useState(true);
  const [disabledCase, setDisabledCase] = useState(true);
  const [disabledMonitor, setDisabledMonitor] = useState(true);
  const [disabledKeyboard, setDisabledKeyboard] = useState(true);
  const [disabledMouse, setDisabledMouse] = useState(true);
  const [disabledPowerSupply, setDisabledPowerSupply] = useState(true);
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
    setDisabledMobo(!disabledMobo);
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

  function DoneRAM(){
    setDisabledRAM(!disabledRAM);
    setDisabledGPU(!disabledGPU);
  }
  function DoneGPU(){
    setDisabledGPU(!disabledGPU);
    setDisabledStorage(!disabledStorage);
  }

  function DoneStorage(){
    setDisabledStorage(!disabledStorage);
    setDisabledPowerSupply(!disabledPowerSupply);
  }

  function DonePowerSupply(){
    setDisabledPowerSupply(!disabledPowerSupply);
    setDisabledCooler(!disabledCooler);
  }

  function DoneCooler(){
    setDisabledCooler(!disabledCooler);
    setDisabledCase(!disabledCase);
  }

  function DoneCase(){
    setDisabledCase(!disabledCase);
    setDisabledMonitor(!disabledMonitor);
  }

  function DoneMonitor(){
    setDisabledMonitor(!disabledMonitor);
    setDisabledKeyboard(!disabledKeyboard);
  }

  function DoneKeyboard(){
    setDisabledKeyboard(!disabledKeyboard);
    setDisabledMouse(!disabledMouse);
  }

  function DoneMouse(){
    setDisabledMouse(disabledMouse);
  }
  function StartProcessor(){
    
    if (processor.length !== 0){
      setDisabledPButton(!disabledPButton)
    }

    else {
      setDisabledPButton(disabledPButton)
    }
  }

  function StartMobo(){
    
    if (motherboard.length !== 0){
      setDisabledMBButton(disabledMBButton)
    }

    else {
      setDisabledMBButton(!disabledMBButton)
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

  function StartGPU(){
    if (graphicsCard.length !==0){
      setDisabledGButton(!disabledGButton)
    }

    else {
      setDisabledGButton(disabledGButton)
    }
  }

  function StartStorage(){
    if (storage.length !== 0){
      setDisabledSButton(disabledSButton)
    }

    else {
      setDisabledSButton(!disabledSButton)
    }
  }

  function StartPowerSupply(){
    if (powerSupply.length !== 0){
      setDisabledPSButton(disabledPSButton)
    }

    else {
      setDisabledPSButton(!disabledPSButton)
    }
  }

  function StartCooler(){
    if (systemCooler.length !== 0){
      setDisabledCButton(disabledCButton)
    }

    else {
      setDisabledCButton(!disabledCButton)
    }
  }

  function StartCase(){
    if (cpuCase.length !== 0){
      setDisabledCSButton(disabledCSButton)
    }

    else {
      setDisabledCSButton(!disabledCSButton)
    }
  }

  function StartMonitor(){
    if (monitor.length !== 0){
      setDisabledMButton(disabledMButton)
    }

    else {
      setDisabledMButton(!disabledMButton)
    }
  }

  function StartKeyboard(){
    if (keyboard.length !== 0){
      setDisabledKButton(disabledKButton)
    }

    else {
      setDisabledKButton(!disabledKButton)
    }
  }

  function StartMouse(){
    if (mouse.length !== 0){
      setDisabledMSButton(disabledMSButton)
    }

    else {
      setDisabledMSButton(!disabledMSButton)
    }
  }


  return (
    <div className="dropdown-area">
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
            <button onClick={DoneProcessor} type="button"  class="button" disabled={disabledPButton} >Next Component / Change selection</button>
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
            <button onClick={DoneMobo} disabled={disabledMBButton} type="button" class="button" >Next Component / Change selection</button>
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
            <button type="button" disabled={disabledRButton} onClick={DoneRAM} class="button">Next Component / Change selection</button>
            <Slides3 />
          </Form.Group>

          <Form.Group controlId="formGroupGraphicsCard">
            <Form.Label>Graphics Card:</Form.Label>
            <Form.Select
              disabled={disabledGPU}
              onClick={StartGPU}
              onChange={(event) => {
                setGraphicsCard(event.target.value);
              }}
            >
              <option value="">Please select a graphics card...</option>
              <option value="NVIDIA GeForce GTX 1050">NVIDIA GeForce GTX 1050 4GB</option>
              <option value="AMD Radeon RX 6600">AMD Radeon RX 6600 8GB </option>
              <option value="NVIDIA GeForce GTX 3060">NVIDIA GeForce GTX 3060 8GB</option>
              <option value="NVIDIA GeForce GTX 1080">NVIDIA GeForce GTX 1080 6GB </option>
              <option value="AMD Radeon RX 580">AMD Radeon RX 580 2GB</option>
            </Form.Select>
            <button type="button" disabled={disabledGButton} onClick={DoneGPU} class="button">Next Component / Change selection</button>
            <Slides4 />
          </Form.Group>

          <Form.Group controlId="formGroupStorage">
            <Form.Label>Storage:</Form.Label>
            <Form.Select
              disabled={disabledStorage}
              onClick={StartStorage}
              onChange={(event) => {
                setStorage(event.target.value);
              }}
            >
              <option value="">Please select a storage...</option>
              <option value="Samsung 980 Pro">Samsung 980 Pro - 2TB</option>
              <option value="WD Black SN750 SSD">WD Black SN750 SSD - 1TB</option>
              <option value="Seagate IronWolf NAS HDD">Seagate IronWolf NAS HDD</option>
              <option value="WD Black SN750 SSD">WD Black SN750 SSD - 1TB</option>
              <option value="Seagate IronWolf NAS HDD">Seagate IronWolf NAS HDD</option>
            </Form.Select>
            <button  type="button" disabled={disabledSButton} onClick={DoneStorage} class="button">Next Component / Change selection</button>
            <Slides5 />
          </Form.Group>

          <Form.Group controlId="formGroupPowerSupply">
            <Form.Label>Power Supply:</Form.Label>
            <Form.Select
              disabled={disabledPowerSupply}
              onClick={StartPowerSupply}
              onChange={(event) => {
                setPowerSupply(event.target.value);
              }}
            >
              <option value="">Please select a Power Supply...</option>
              <option value="Corsair CX450">Corsair CX450</option>
              <option value="XPG Core Reactor 650W">XPG Core Reactor 650W</option>
              <option value="Cooler Master V750 Gold V2">Cooler Master V750 Gold V2</option>
              <option value="Corsair RM850x">Corsair RM850x</option>
              <option value="be quiet! Dark Power Pro 12 1500W">be quiet! Dark Power Pro 12 1500W</option>
            </Form.Select>
            <button type="button" disabled={disabledPSButton} onClick={DonePowerSupply} class="button" >Next Component / Change selection</button>
            <Slides6 />
          </Form.Group>

          <Form.Group controlId="formGroupSystemCooler">
            <Form.Label>System Cooler:</Form.Label>
            <Form.Select
              disabled={disabledCooler}
              onClick={StartCooler}
              onChange={(event) => {
                setSystemCooler(event.target.value);
              }}
            >
              <option value="">Please select a System Cooler...</option>
              <option value="Cooler Master MasterAir MA624">Cooler Master MasterAir MA624</option>
              <option value="Deepcool Assassin III">Deepcool Assassin III</option>
              <option value="Cooler Master MasterAir MA410M">Cooler Master MasterAir MA410M</option>
              <option value="Noctua NH-U14S">Noctua NH-U14S</option>
              <option value="Zalman CNPS10x Performa Black">Zalman CNPS10x Performa Black</option>
            </Form.Select>
            <button type="button" disabled={disabledCButton} onClick={DoneCooler} class="button">Next Component / Change selection</button>
            <Slides7 />
          </Form.Group>
          
      

          <Form.Group controlId="formGroupCPUCase">
            <Form.Label>CPU Case:</Form.Label>
            <Form.Select
              disabled={disabledCase}
              onClick={StartCase}
              onChange={(event) => {
                setCPUCase(event.target.value);
              }}
            >
              <option value="">Please select a CPU Case...</option>
              <option value="Fractal Design Meshify 2 Compact">Fractal Design Meshify 2 Compact</option>
              <option value="Lian Li O11 Air Mini">Lian Li O11 Air Mini</option>
              <option value="Cooler Master HAF 700 Evo">Cooler Master HAF 700 Evo</option>
              <option value="Fractal Design Meshify 2">Fractal Design Meshify 2</option>
              <option value="Phanteks Eclipse P360A">Phanteks Eclipse P360A</option>
            </Form.Select>
            <button type="button" disabled={disabledCase} onClick={DoneCase} class="button" >Next Component / Change selection</button>
            <Slides8 />
          </Form.Group>

          <Form.Group controlId="formGroupMonitor">
            <Form.Label>Monitor:</Form.Label>
            <Form.Select
              disabled={disabledMonitor}
              onClick={StartMonitor}
              aria-label="Default select example"
              id="monitorDrop"
              
              onChange={(event) => {
                setMonitor(event.target.value);
              }}
            >
              <option value="">Please select a Monitor...</option>
              <option value="Dell SE2719HR">Dell SE2719HR</option>
              <option value="Acer XFA240">Acer XFA240</option>
              <option value="HP EliteDisplay S14">HP EliteDisplay S14</option>
              <option value="ViewSonic Elite XG270QC">ViewSonic Elite XG270QC</option>
              <option value="Alienware AW5520QF 55-Inch OLED Gaming Monitor">Alienware AW5520QF 55-Inch OLED Gaming Monitor</option>
            </Form.Select>
            <button type="button" disabled={disabledMonitor} onClick={DoneMonitor} class="button">Next Component / Change selection</button>
            <Slides9 />
          </Form.Group>

          <Form.Group controlId="formGroupKeyboard">
            <Form.Label>Keyboard:</Form.Label>
            <Form.Select
              disabled={disabledKeyboard}
              onClick={StartKeyboard}
              onChange={(event) => {
                setKeyboard(event.target.value);
              }}
            >
              <option value="">Please select a Keyboard...</option>
              <option value="SteelSeries Apex Pro">SteelSeries Apex Pro</option>
              <option value="Razer BlackWidow V3 Pro">Razer BlackWidow V3 Pro</option>
              <option value="Logitech MX Keys">Logitech MX Keys</option>
              <option value="Corsair K95 RGB PLATINUM XT">Corsair K95 RGB PLATINUM XT</option>
              <option value="Logitech K380">Logitech K380</option>
            </Form.Select>
            <button type="button" disabled={disabledKeyboard} onClick={DoneKeyboard} class="button" >Next Component / Change selection</button>
            <Slides10 />
          </Form.Group>

          <Form.Group controlId="formGroupMouse">
            <Form.Label>Mouse:</Form.Label>
            <Form.Select
            
              disabled={disabledMouse}
              onClick={StartMouse}
              onChange={(event) => {
                setMouse(event.target.value);
              }}
            >
              <option value="">Please select a Mouse...</option>
              <option value="Logitech K380">Logitech K380</option>
              <option value="Razer Pro Click">Razer Pro Click</option>
              <option value="Microsoft Modern Mobile Mouse">Microsoft Modern Mobile Mouse</option>
              <option value="Logitech MX Anywhere 3">Logitech MX Anywhere 3</option>
              <option value="Razer Viper 8K">Razer Viper 8K</option>
            </Form.Select>
            <button onClick={createOrders}  class="button" disabled={disabledMouse} >Confirm Order</button>
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
