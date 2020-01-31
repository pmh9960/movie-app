import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("do constructor");
  }

  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    console.log("do render");
    return (
      <div>
        <h1>
          Hello!<p>number: {this.state.count}</p>
        </h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("do componentDidMount");
  }
  componentDidUpdate() {
    console.log("do componentDidUpdate");
  }
}

export default App;
