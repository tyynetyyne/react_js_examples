import React from "react";

function ToggleButton(show) {
  if (show) {
    return <button class="toggleButton">Piilota</button>;
  } else {
    return <button class="toggleButton">Näytä</button>;
  }
}

export default ToggleButton;
