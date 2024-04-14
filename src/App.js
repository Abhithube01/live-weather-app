import React, { useState } from "react";
import "./App.css";
import CurrentLocation from "./currentLocation";

function App()
{
  return (
    //react.fragment used as a <></> or to wrap/group multiple elements without adding extra node to DOM 
    <React.Fragment> 
      <div className="container">
          <CurrentLocation/>
        <div className="footer-info">
          <a href="https://github.com/Abhithube01/Live-Weather-App-React_JS/tree/main/weatherapp">
            Download Source Code
          </a>{" "}
          | Developed by{" "}
          <a href="https://github.com/Abhithube01">
            Abhinav Thube
            </a>{" "}
        </div>
      </div>
    </React.Fragment>
  )
}
export default App;