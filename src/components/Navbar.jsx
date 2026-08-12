import sneakers from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import "../styles/Navbar.css";

import { useContext, useState } from "react";
import { productContext } from "../context/ProductContext";
import Cart from "./Cart";

const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

function Navbar() {
  const { cart } = useContext(productContext);

  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <button
            className="menu-button"
            onClick={() => setShowMenu(true)}
          >
            <img src={menu} />
          </button>

          <img className="logo" src={sneakers} alt="Sneakers" />
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li className="nav-items" key={index}>
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-section">
          <div className="cart-wrapper">
            <div className="cart" onClick={() => setShowCart((prev) => !prev)}>
              <img src={cartIcon} alt="Cart" />

              {cartCount > 0 && (
                <span className="cart-item-count">{cartCount}</span>
              )}
            </div>

            {showCart && <Cart />}
          </div>

          <div className="avatar">
            <img src={avatar} alt="Profile" />
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <button
              className="close-menu"
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
            >
              ×
            </button>

            <ul className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <li
                  className="mobile-nav-item"
                  key={index}
                  onClick={() => setShowMenu(false)}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
