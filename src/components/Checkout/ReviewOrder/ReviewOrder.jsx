import { useCart } from '../../../context/cartContext/useCart';
import './ReviewOrder.css';

const ReviewOrder = ({ shippingData, paymentData, onPlaceOrder, onBack }) => {
  const { cartItems, totalPrice } = useCart();

  const maskCardNumber = (cardNumber) => {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    return '•••• •••• •••• ' + cleanNumber.slice(-4);
  };

  return (
    <div className="card border-0 shadow-lg review-order-card">
      <div className="card-header bg-success text-white py-3">
        <h5 className="card-title mb-0">
          <i className="fas fa-clipboard-check me-2"></i>
          Review Your Order
        </h5>
      </div>
      <div className="card-body p-4">
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card h-100 border">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="fas fa-truck me-2"></i>
                  Shipping Information
                </h6>
              </div>
              <div className="card-body">
                <p className="mb-1"><strong>{shippingData.fullName}</strong></p>
                <p className="mb-1 text-muted">{shippingData.address}</p>
                <p className="mb-1 text-muted">
                  {shippingData.city}, {shippingData.postalCode}
                </p>
                <p className="mb-0 text-muted">{shippingData.country}</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100 border">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="fas fa-credit-card me-2"></i>
                  Payment Information
                </h6>
              </div>
              <div className="card-body">
                <p className="mb-1"><strong>{paymentData.cardholderName}</strong></p>
                <p className="mb-1 text-muted">{maskCardNumber(paymentData.cardNumber)}</p>
                <p className="mb-0 text-muted">Expires: {paymentData.expiryDate}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card border">
          <div className="card-header bg-light">
            <h6 className="mb-0">
              <i className="fas fa-shopping-cart me-2"></i>
              Order Items
            </h6>
          </div>
          <div className="card-body">
            {cartItems.map(item => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                <div className="d-flex align-items-center">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="rounded me-3 review-item-image"
                  />
                  <div>
                    <strong className="d-block">{item.title}</strong>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                </div>
                <span className="fw-bold text-primary">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            
            <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
              <strong className="fs-5">Total Amount:</strong>
              <strong className="text-success fs-4">${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </div>
        
        <div className="d-flex gap-3 mt-4">
          <button type="button" className="btn btn-outline-secondary btn-lg flex-fill" onClick={onBack}>
            <i className="fas fa-arrow-left me-2"></i>
            Back to Payment
          </button>
          <button type="button" className="btn btn-success btn-lg flex-fill" onClick={onPlaceOrder}>
            <i className="fas fa-check me-2"></i>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;