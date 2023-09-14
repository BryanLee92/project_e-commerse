import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function PreviewScreen({ images, setIsView, handleProductBtn }) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  if (images.length > 0) {
    return (
      <div ref={sliderRef} className="keen-slider">
        {images.map((image) => (
          <div key={image.id} className="keen-slider__slide">
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
                    setIsView(true);
                    handleProductBtn(image.id);
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="keen-slider">
        <p className="error-Message"></p>
      </div>
    );
  }
}
