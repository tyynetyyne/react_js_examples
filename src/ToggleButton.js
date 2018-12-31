import React from "react";

function ToggleButton({ show, clickHandler }) {
  let text = "";
  if (!show) {
    text = "Näytä";
  } else {
    text = "Piilota";
  }
  return (
    <button class="toggleButton" onClick={clickHandler}>
      {text}
    </button>
  );
}

export default ToggleButton;
