import React, { useState } from "react";
import "../html-js/style.css";

export function Page() {
  const [screenState, setScreenState] = useState("Alp");

  const handleButtonClick = (e) => {
    setScreenState(e.target.textContent);
  };

  return (
    <div>
      <div className="screen">{screenState}</div>
      <div className="button-container">
        {["A", "B", "C"].map((buttonText) => (
          <button
            key={buttonText}
            className="button"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}
