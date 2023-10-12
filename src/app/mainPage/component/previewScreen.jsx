import React from "react";

const PreviewScreen=({ image, toggleViewBtn })=>{
  return (
    <>
      <div className="keen-slider__slide">
        <img
          src={image.imageUrl}
          alt={image.name}
          style={{ width: "100%", height: "100%" }}
          className="img-fluid"
        />
        <div className="col-sm-12 col-md-100 position-relative">
          <div className="position-absolute bottom-0 start-0 w-100 text-white bg-dark bg-gradient bg-opacity-25 p-5 keen-slider__status">
            <h3>{image.name}</h3>
            <p>{image.description}</p>
            <div className="keen-slider__view">
              <h3>RM {image.price.toFixed(2)}</h3>
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
      </div>
    </>
  );
}
export default PreviewScreen;