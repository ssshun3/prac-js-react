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
        <button className="button" onClick={handleButtonClick}>
          A
        </button>
        <button className="button" onClick={handleButtonClick}>
          B
        </button>
        <button className="button" onClick={handleButtonClick}>
          C
        </button>
      </div>
    </div>
  );
}
