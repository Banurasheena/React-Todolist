import React, { Component, Fragment } from "react";
import SimpleState from "./Components/Basics/SimpleState";
import Navbar from "./Components/Layout/Navbar";
import Slider from "./Components/Layout/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
        <SimpleState />
      </div>
    );
  }
}

export default App;
