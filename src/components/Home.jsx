import { useContext, useState } from "react";
import { productContext } from "../context/ProductContext";
import "../styles/Home.css";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";
import cartIcon from "../images/icon-cart.svg";
import Overlay from "./Overlay";
import Navbar from "./Navbar";

function Home() {
  const { products, addToCart } = useContext(productContext);
  const { productImgs, title, description, price, rate, discountedPrice } =
    products[0];
  const [showImage, setShowImage] = useState(productImgs?.[0] ?? null);
  const [showOverlay, setShowOverlay] = useState(false);

  const [qty, setQty] = useState(1);

  return (
    <>
      <Navbar />
      <div className="product-display-box">
        <div className="product-all">
          <img
            onClick={() => {
              setShowOverlay(true);
            }}
            className="thumbnail-preview"
            src={showImage}
          />
          <div className="product-thumbnail-selection">
            {productImgs.map((img, index) => (
              <div
                key={index}
                className={`thumbnail-wrapper ${showImage === img ? "selected" : ""}`}
                onClick={() => setShowImage(img)}
              >
                <img
                  className="thumbnail-selection"
                  src={img}
                  alt={`thumbnail-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-info">
          <h5>SNEAKER COMPANY</h5>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <div className="price-rate">
            <span>${price.toFixed(2)}</span>
            <span>{rate}%</span>
          </div>
          <p className="discountedPrice">${discountedPrice.toFixed(2)}</p>
          <div className="add-and-quantiy-button">
            <button className="quantity-count-btn">
              <img
                onClick={() => setQty((q) => Math.max(q - 1, 0))}
                src={iconMinus}
              />
              <span>{qty}</span>
              <img onClick={() => setQty((q) => q + 1)} src={iconPlus} />
            </button>
            <button
              onClick={() => addToCart(products[0], qty)}
              disabled={qty === 0}
              className="add-to-cart-btn"
            >
              <img src={cartIcon} />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>

      {showOverlay && (
        <Overlay
          productImgs={productImgs}
          showImage={showImage}
          setShowImage={setShowImage}
          setShowOverlay={setShowOverlay}
        />
      )}
    </>
  );
}

export default Home;
