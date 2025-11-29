import { useState } from 'react';
import { paymentSchema, validateData } from '../../../utils/validationSchemas';
import './PaymentForm.css';

const PaymentForm = ({ data, onChange, onNext, onBack }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }

    onChange({
      target: {
        name,
        value: formattedValue
      }
    });

    if (touched[name] && errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    let valueToValidate = data[field];
    if (field === 'cardNumber') {
      valueToValidate = data[field].replace(/\s/g, '');
    }
    
    const fieldSchema = paymentSchema.extract(field);
    const { error } = fieldSchema.validate(valueToValidate);
    
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error.details[0].message }));
    } else {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationData = {
      ...data,
      cardNumber: data.cardNumber.replace(/\s/g, '')
    };
    
    const { errors: validationErrors, isValid } = validateData(paymentSchema, validationData);
    setErrors(validationErrors);
    
    setTouched({
      cardholderName: true,
      cardNumber: true,
      expiryDate: true,
      cvv: true
    });

    if (isValid) {
      onNext();
    }
  };

  const getFieldClass = (fieldName) => {
    if (!touched[fieldName]) return 'form-control form-control-lg';
    return errors[fieldName] 
      ? 'form-control form-control-lg is-invalid' 
      : 'form-control form-control-lg is-valid';
  };

  return (
    <div className="card border-0 shadow-lg checkout-form-card">
      <div className="card-header bg-primary text-white py-3">
        <h5 className="card-title mb-0">
          <i className="fas fa-credit-card me-2"></i>
          Payment Information
        </h5>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="cardholderName" className="form-label fw-semibold">
              Cardholder Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={getFieldClass('cardholderName')}
              id="cardholderName"
              name="cardholderName"
              value={data.cardholderName}
              onChange={handleInputChange}
              onBlur={() => handleBlur('cardholderName')}
              required
              placeholder="Name on card"
            />
            {errors.cardholderName && touched.cardholderName && (
              <div className="invalid-feedback d-block">{errors.cardholderName}</div>
            )}
            {!errors.cardholderName && touched.cardholderName && (
              <div className="valid-feedback d-block">✓ Looks good!</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="cardNumber" className="form-label fw-semibold">
              Card Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={getFieldClass('cardNumber')}
              id="cardNumber"
              name="cardNumber"
              value={data.cardNumber}
              onChange={handleInputChange}
              onBlur={() => handleBlur('cardNumber')}
              required
              placeholder="1234 5678 9012 3456"
              maxLength="19"
            />
            {errors.cardNumber && touched.cardNumber && (
              <div className="invalid-feedback d-block">{errors.cardNumber}</div>
            )}
            {!errors.cardNumber && touched.cardNumber && (
              <div className="valid-feedback d-block">✓ Looks good!</div>
            )}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="expiryDate" className="form-label fw-semibold">
                Expiry Date (MM/YY) <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={getFieldClass('expiryDate')}
                id="expiryDate"
                name="expiryDate"
                value={data.expiryDate}
                onChange={handleInputChange}
                onBlur={() => handleBlur('expiryDate')}
                required
                placeholder="MM/YY"
                maxLength="5"
              />
              {errors.expiryDate && touched.expiryDate && (
                <div className="invalid-feedback d-block">{errors.expiryDate}</div>
              )}
              {!errors.expiryDate && touched.expiryDate && (
                <div className="valid-feedback d-block">✓ Looks good!</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="cvv" className="form-label fw-semibold">
                CVV <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={getFieldClass('cvv')}
                id="cvv"
                name="cvv"
                value={data.cvv}
                onChange={handleInputChange}
                onBlur={() => handleBlur('cvv')}
                required
                placeholder="123"
                maxLength="4"
              />
              {errors.cvv && touched.cvv && (
                <div className="invalid-feedback d-block">{errors.cvv}</div>
              )}
              {!errors.cvv && touched.cvv && (
                <div className="valid-feedback d-block">✓ Looks good!</div>
              )}
            </div>
          </div>

          <div className="d-flex gap-3 mt-4">
            <button type="button" className="btn btn-outline-secondary btn-lg flex-fill" onClick={onBack}>
              <i className="fas fa-arrow-left me-2"></i>
              Back to Shipping
            </button>
            <button type="submit" className="btn btn-primary btn-lg flex-fill">
              Continue to Review <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;