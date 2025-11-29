import { Link } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const orderNumber = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card text-center confirmation-card">
            <div className="card-body py-5">
              <div className="confirmation-icon text-success mb-3">✓</div>
              <h2 className="card-title">Order Confirmed!</h2>
              <p className="card-text lead">
                Thank you for your purchase. Your order has been successfully placed.
              </p>
              
              <div className="alert alert-info mt-4">
                <strong>Order Number:</strong> {orderNumber}
              </div>
              
              <p>
                You will receive an email confirmation shortly. 
                Your items will be shipped within 2-3 business days.
              </p>
              
              <div className="mt-4">
                <Link to="/products" className="btn btn-primary me-2">
                  Continue Shopping
                </Link>
                <Link to="/" className="btn btn-outline-secondary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;