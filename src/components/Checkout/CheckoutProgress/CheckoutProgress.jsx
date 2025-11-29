import './CheckoutProgress.css';

const CheckoutProgress = ({ currentStep, onStepClick }) => {
  const steps = [
    { name: 'Shipping', icon: '🚚' },
    { name: 'Payment', icon: '💳' },
    { name: 'Review', icon: '📋' }
  ];
  
  return (
    <div className="checkout-progress mb-5">
      <div className="d-flex justify-content-between align-items-center position-relative">
        <div className="progress-line"></div>

        <div 
          className="progress-fill"
          style={{
            right: `calc(50px + ${(2 - currentStep) / 2 * 100}%)`
          }}
        ></div>

        {steps.map((step, index) => (
          <div key={step.name} className="step-container">
            <button
              className={`step-circle btn ${index === currentStep ? 'btn-primary' : 
                index < currentStep ? 'btn-success' : 'btn-outline-secondary'} 
                rounded-circle d-flex align-items-center justify-content-center`}
              onClick={() => onStepClick(index)}
              disabled={index > currentStep}
            >
              {index < currentStep ? '✓' : step.icon}
            </button>
            <span className={`mt-2 fw-semibold ${index === currentStep ? 'text-primary' : 
              index < currentStep ? 'text-success' : 'text-muted'}`}>
              {step.name}
            </span>
            <span className="text-muted small">Step {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProgress;