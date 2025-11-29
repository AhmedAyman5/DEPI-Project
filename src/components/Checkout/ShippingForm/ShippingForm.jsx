import { useState } from 'react';
import { shippingSchema, validateData } from '../../../utils/validationSchemas';
import './ShippingForm.css';

const ShippingForm = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    const fieldSchema = shippingSchema.extract(field);
    const { error } = fieldSchema.validate(data[field]);
    
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error.details[0].message }));
    } else {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { errors: validationErrors, isValid } = validateData(shippingSchema, data);
    setErrors(validationErrors);
    
    setTouched({
      fullName: true,
      address: true,
      city: true,
      postalCode: true,
      country: true
    });

    if (isValid) {
      onNext();
    }
  };

  const handleInputChange = (e) => {
    onChange(e);
    
    const { name } = e.target;
    if (touched[name] && errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
          <i className="fas fa-truck me-2"></i>
          Shipping Information
        </h5>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit} noValidate>
          <div className="row">
            <div className="col-12 mb-3">
              <label htmlFor="fullName" className="form-label fw-semibold">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={getFieldClass('fullName')}
                id="fullName"
                name="fullName"
                value={data.fullName}
                onChange={handleInputChange}
                onBlur={() => handleBlur('fullName')}
                required
                placeholder="Enter your full name"
              />
              {errors.fullName && touched.fullName && (
                <div className="invalid-feedback d-block">{errors.fullName}</div>
              )}
              {!errors.fullName && touched.fullName && (
                <div className="valid-feedback d-block">✓ Looks good!</div>
              )}
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="address" className="form-label fw-semibold">
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={getFieldClass('address')}
                id="address"
                name="address"
                value={data.address}
                onChange={handleInputChange}
                onBlur={() => handleBlur('address')}
                required
                placeholder="Street address, apartment number"
              />
              {errors.address && touched.address && (
                <div className="invalid-feedback d-block">{errors.address}</div>
              )}
              {!errors.address && touched.address && (
                <div className="valid-feedback d-block">✓ Looks good!</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="form-label fw-semibold">
                City <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={getFieldClass('city')}
                id="city"
                name="city"
                value={data.city}
                onChange={handleInputChange}
                onBlur={() => handleBlur('city')}
                required
                placeholder="Your city"
              />
              {errors.city && touched.city && (
                <div className="invalid-feedback d-block">{errors.city}</div>
              )}
              {!errors.city && touched.city && (
                <div className="valid-feedback d-block">✓ Looks good!</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="postalCode" className="form-label fw-semibold">
                Postal Code <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={getFieldClass('postalCode')}
                id="postalCode"
                name="postalCode"
                value={data.postalCode}
                onChange={handleInputChange}
                onBlur={() => handleBlur('postalCode')}
                required
                placeholder="12345"
              />
              {errors.postalCode && touched.postalCode && (
                <div className="invalid-feedback d-block">{errors.postalCode}</div>
              )}
              {!errors.postalCode && touched.postalCode && (
                <div className="valid-feedback d-block">✓ Looks good!</div>
              )}
            </div>

            <div className="col-12 mb-4">
              <label htmlFor="country" className="form-label fw-semibold">
                Country <span className="text-danger">*</span>
              </label>
              <select
                className={getFieldClass('country')}
                id="country"
                name="country"
                value={data.country}
                onChange={handleInputChange}
                onBlur={() => handleBlur('country')}
                required
              >
                <option value="">Select your country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Other">Other</option>
              </select>
              {errors.country && touched.country && (
                <div className="invalid-feedback d-block">{errors.country}</div>
              )}
              {!errors.country && touched.country && (
                <div className="valid-feedback d-block">✓ Looks good!</div>
              )}
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg py-3 fw-semibold">
              Continue to Payment <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;