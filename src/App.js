import React from "react";
import "./styles.css";
import NameAndAddress from "./NameAndAddress";
import ToggleButton from "./ToggleButton";

function App() {
  return (
    <div className="App">
      <h1>Ensimmäinen harjoitus</h1>
      <NameAndAddress
        name="Tiina Partanen"
        email="tiina.s.partanen@tampere.fi"
      />
      <ToggleButton show="true" />
    </div>
  );
}

export default App;
