import React from "react";

function ToggleButton({ show, clickHandler, buttonNumber }) {
  let text = "";
  if (!show) {
    text = "Näytä";
  } else {
    text = "Piilota";
  }
  return (
    <div class="toggleButton">
      <button onClick={e => clickHandler(buttonNumber)}>{text}</button>
    </div>
  );
}

export default ToggleButton;
