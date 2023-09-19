import React from "react";

const PreviewScreen=({ image, toggleViewBtn })=>{
  return (
    <>
      <div className="keen-slider__slide">
        <img
          src={image.imageUrl}
          alt={image.name}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="keen-slider__status">
          <h3>{image.name}</h3>
          <p>{image.description}</p>
          <br />
          <div className="keen-slider__view">
            <h4>{image.price}</h4>
            <button
              className="keen-slider__button"
              onClick={() => {
                toggleViewBtn(image);
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PreviewScreen;