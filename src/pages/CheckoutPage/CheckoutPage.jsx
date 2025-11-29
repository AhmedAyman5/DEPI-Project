import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cartContext/useCart';
import { CheckoutProgress, PaymentForm, ReviewOrder, ShippingForm } from '../../components/exportComponents';
import './CheckoutPage.css';


const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [shippingData, setShippingData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const [paymentData, setPaymentData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const { clearCart, cartItems } = useCart();
  const navigate = useNavigate();


  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevData => ({ ...prevData, [name]: value }));
  };


  const handleStepClick = (stepIndex) => {
    if (stepIndex <= currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  const handleShippingSubmit = () => {
    setCurrentStep(1);
  };

  const handlePaymentSubmit = () => {
    setCurrentStep(2);
  };

  const handlePlaceOrder = () => {
    console.log("Order Placed:", { shippingData, paymentData, items: cartItems });
    clearCart();
    navigate('/confirmation');
  };

  const steps = [
    <ShippingForm
      data={shippingData}
      onChange={handleShippingChange}
      onNext={handleShippingSubmit}
    />,
    <PaymentForm
      data={paymentData}
      onChange={handlePaymentChange}
      onNext={handlePaymentSubmit}
      onBack={() => setCurrentStep(0)}
    />,
    <ReviewOrder
      shippingData={shippingData}
      paymentData={paymentData}
      onPlaceOrder={handlePlaceOrder}
      onBack={() => setCurrentStep(1)}
    />
  ];

  return (
    <div className="container pt-4 pb-5">
      <h1 className="">Checkout</h1>
      <CheckoutProgress
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {steps[currentStep]}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;