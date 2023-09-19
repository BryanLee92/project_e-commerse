import React from "react";
const Sidebar=({ tag, isActive })=>{
  const options = [
    "Casual Shirts",
    "Sweatshirts",
    "Bra Tops",
    "Fleece",
    "Shorts",
    "Long Pants",
    "Jeans",
    "Wide Leg Pants",
  ];
  return (
    <div className="side-container">
      <div>
        <h2 className="side-header">
          <strong>Tops</strong>
        </h2>
        <hr />
        {options.slice(0, 4).map((option) => (
          <p
            key={option}
            className={`side-options ${
              option === isActive ? "side-options__active" : ""
            }`}
            onClick={() => tag(option)}
          >
            {option}
          </p>
        ))}
      </div>
      <br />
      <div>
        <h2 className="side-header">
          <strong>Bottoms</strong>
        </h2>
        <hr />
        {options.slice(4).map((option) => (
          <p
            key={option}
            className={`side-options ${
              option === isActive ? "side-options__active" : ""
            }`}
            onClick={() => tag(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;