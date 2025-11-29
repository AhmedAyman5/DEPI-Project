import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus,
  faShippingFast,
  faLock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import './CartPage.css';
import { useCart } from "../../context/cartContext/useCart";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, itemCount } = useCart();
  const handleQuantityChange = (itemId, value) => {
    const newQuantity = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 1;
    updateQuantity(itemId, Math.max(1, newQuantity));
  };

  if (cartItems.length === 0) {
    return (
      <div className="container pt-5">
        <div
          className="card text-center mt-5 p-5 shadow-lg border-0 empty-cart-card"
        >
          <div className="card-body py-5">
            <div className="empty-cart-icon mb-4">
              🛒
            </div>
            <h2
              className="card-title mb-3 text-dark"
              style={{ fontWeight: "600" }}
            >
              Your Cart is Empty
            </h2>
            <p className="lead mb-4 text-muted" style={{ fontSize: "1.1rem" }}>
              Discover amazing products and fill your cart with goodness!
            </p>
            <Link
              to="/products"
              className="btn btn-primary px-5 py-3 start-shopping-btn"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-4 mb-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="display-5 fw-bold text-dark">Shopping Cart</h1>
            <span className="badge bg-primary fs-6 px-3 py-2">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mb-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card mb-4 shadow-sm border-0 cart-item-card"
            >
              <div className="row g-0 align-items-center">
                <div className="col-md-3 p-3">
                  <div className="position-relative">
                    <img
                      src={item.image}
                      className="img-fluid rounded-3 cart-item-image"
                      alt={item.title}
                    />
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5
                        className="card-title mb-0 fw-semibold"
                        style={{ lineHeight: "1.4" }}
                      >
                        {item.title}
                      </h5>
                      <button
                        className="btn btn-link text-danger p-0 remove-btn fs-3"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                    <p className="text-black-50 text-truncate pe-5">{item.description}</p>
                    <p className="card-text text-primary h4 fw-bold mb-3">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <label
                          htmlFor={`quantity-${item.id}`}
                          className="form-label mb-0 fw-semibold text-muted"
                        ></label>
                        <div className="input-group quantity-input shadow-sm">
                          <button
                            className="btn btn-outline-secondary border-0"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            style={{
                              borderRadius: "10px 0 0 10px",
                              backgroundColor:
                                item.quantity <= 1 ? "#f8f9fa" : "white",
                            }}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <input
                            id={`quantity-${item.id}`}
                            type="text"
                            className="form-control text-center border-0 quantity-input-field"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                            min="1"
                            aria-label={`Quantity for ${item.title}`}
                          />
                          <button
                            className="btn btn-outline-secondary border-0"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            style={{ borderRadius: "0 10px 10px 0" }}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>

                      <div className="text-end mt-2 mt-md-0">
                        <div className="text-muted small">Subtotal</div>
                        <strong className="text-success h5 mb-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div
            className="card shadow-lg border-0 sticky-top order-summary-card"
          >
            <div className="card-body p-4">
              <h5
                className="card-title mb-4 fw-bold text-center"
                style={{ fontSize: "1.5rem" }}
              >
                Order Summary
              </h5>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <span className="text-muted">Items ({itemCount}):</span>
                  <span className="fw-bold fs-5">${totalPrice.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <span className="text-muted">Shipping:</span>
                  <span className="fw-bold text-success fs-6">
                    <FontAwesomeIcon
                      icon={faShippingFast}
                      className="me-1"
                    />{" "}
                    FREE
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <span className="text-muted">Tax:</span>
                  <span className="fw-bold text-muted fs-6">
                    Calculated at checkout
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-2">
                  <strong className="fs-4">Total:</strong>
                  <strong className="text-primary fs-3">
                    ${totalPrice.toFixed(2)}
                  </strong>
                </div>
              </div>

              <div className="d-grid gap-3">
                <Link
                  to="/checkout"
                  className="btn py-2 fw-bold border-0 checkout-btn"
                >
                  <FontAwesomeIcon icon={faLock} className="me-2" />
                  Checkout
                </Link>

                <Link
                  to="/products"
                  className="btn btn-outline-primary py-2 fw-semibold continue-shopping-btn"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;