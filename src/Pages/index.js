import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div>
      <video autoPlay loop muted id="videoTag">
        <source src="./Resources/vidBack.WEBM" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
