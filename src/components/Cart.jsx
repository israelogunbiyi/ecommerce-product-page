import { useContext } from "react";
import { productContext } from "../context/ProductContext";
import trashIcon from "../images/icon-delete.svg";
import "../styles/Cart.css";

function Cart() {
  const { cart, removeItem, clearCart } = useContext(productContext);

  return (
    <div className="cart-dropdown">
      <h3 className="cart-title">Cart</h3>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  className="cart-item-thumbnail"
                  src={item.productImgs[0]}
                  alt={item.title}
                />
                <div className="cart-item-details">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">
                    ${item.discountedPrice.toFixed(2)} x {item.quantity}{" "}
                    <strong>
                      ${(item.discountedPrice * item.quantity).toFixed(2)}
                    </strong>
                  </p>
                </div>
                <img
                  className="cart-item-delete"
                  src={trashIcon}
                  onClick={() => removeItem(item.id)}
                  alt="remove"
                />
              </div>
            ))}
          </div>
          <button onClick={clearCart} className="checkout-btn">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
