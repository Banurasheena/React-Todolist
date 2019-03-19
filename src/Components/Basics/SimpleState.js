import React, { Component} from "react";
import image3 from '../Layout/images/woman.jpeg'


class SimpleState extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "hello",
      world: "World",
      hands: 2,
      legs: 2
    };
    this.name = "Anura";
    this.age = 30;
    this.changeState = this.changeState.bind(this);
    this.changeStateWorld = this.changeStateWorld.bind(this);
    this.t= this.changeStateHand.bind(this);
  }
  changeState() {
    if (this.state.world == "World") {
      this.setState({ greeting: "Habari" });
    } else if (this.state.world == "Earth") {
      this.setState({ greeting: "This is Kenya" });
    }
  }
  changeStateWorld() {
    this.setState({ world: "Earth" });
  }

  componentDidMount() {
    this.changeState();
  }

  changeStateHand =()=> {
    this.setState({ hands: 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.hands}</h1>
        <h1>
          {this.state.greeting} {this.state.world}
        </h1>
        <button onClick={this.changeState}>Click me to change greeting</button>
        <button onClick={this.changeStateWorld}>
          Click me to change world
        </button>
        <h3>{this.name}</h3>
        <h3>{this.age}</h3>

        <button onClick={this.changeStateHand}>hands button</button>
        <img className="carousel-image" src={image3} alt="image3"/>
      </div>
    );
  }
}

export default SimpleState;