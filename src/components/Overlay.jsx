import "../styles/Overlay.css";
import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-previous.svg";
import { useState } from "react";

function Overlay({ productImgs, showImage, setShowImage, setShowOverlay }) {
  const [activeButton, setActiveButton] = useState(null);
  const currentIndex = productImgs.indexOf(showImage);

  const nextImage = () => {
    if (currentIndex < productImgs.length - 1) {
      setShowImage(productImgs[currentIndex + 1]);
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      setShowImage(productImgs[currentIndex - 1]);
    }
  };
  return (
    <div className="overlay">
      <div className="overlay-product">
        <button className="close-overlay" onClick={() => setShowOverlay(false)}>
          ×
        </button>
        <SlideButton
          className="slide-button-left"
          content={iconPrev}
          isActive={activeButton === "left"}
          onClick={() => {
            previousImage();
            setActiveButton("left");
          }}
        />
        <SlideButton
          className="slide-button-right"
          content={iconNext}
          isActive={activeButton === "right"}
          onClick={() => {
            nextImage();
            setActiveButton("right");
          }}
        />
        <img className="overlay-main-image" src={showImage} alt="Product" />

        <div className="overlay-thumbnails">
          {productImgs.map((img, index) => (
            <div
              key={index}
              className={`overlay-thumbnail ${
                showImage === img ? "selected" : ""
              }`}
              onClick={() => setShowImage(img)}
            >
              <img src={img} alt={`thumbnail-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideButton({ content, className, isActive, onClick }) {
  return (
    <button
      className={`${className} ${isActive ? "active-button" : ""}`}
      onClick={onClick}
    >
      <img className="slide-button-icon" src={content} alt="Slide" />
    </button>
  );
}

export default Overlay;
