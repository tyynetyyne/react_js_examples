import React from "react";
import "./styles.css";
import NameAndAddress from "./NameAndAddress";
import ToggleButton from "./ToggleButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tiina Partanen",
      email: "tiina.s.partanen@tampere.fi",
      link: "https://www.linkedin.com/in/tiina-partanen-2078852/",
      show: true
    };
  }
  handleClick() {
    // return () => {
    console.log("button");
    this.setState({ show: this.state.show ? false : true });
    // };
  }
  render() {
    return (
      <div className="App">
        <h1>Ensimmäinen harjoitus</h1>
        <NameAndAddress
          name={this.state.name}
          email={this.state.email}
          show={this.state.show}
          link={this.state.link}
        />
        <ToggleButton
          show={this.state.show}
          clickHandler={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

export default App;
