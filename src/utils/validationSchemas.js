import Joi from "joi";

export const shippingSchema = Joi.object({
  fullName: Joi.string()
    .min(2)
    .max(100)
    .required()
    .pattern(/^[a-zA-Z\s]+$/)
    .messages({
      "string.empty": "Full name is required",
      "string.min": "Full name must be at least 2 characters long",
      "string.max": "Full name must be less than 100 characters",
      "string.pattern.base": "Full name can only contain letters and spaces",
    }),

  address: Joi.string().min(5).max(200).required().messages({
    "string.empty": "Address is required",
    "string.min": "Address must be at least 5 characters long",
    "string.max": "Address must be less than 200 characters",
  }),

  city: Joi.string()
    .min(2)
    .max(100)
    .required()
    .pattern(/^[a-zA-Z\s]+$/)
    .messages({
      "string.empty": "City is required",
      "string.min": "City must be at least 2 characters long",
      "string.pattern.base": "City can only contain letters and spaces",
    }),

  postalCode: Joi.string()
    .pattern(/^\d{5}(-\d{4})?$/)
    .required()
    .messages({
      "string.empty": "Postal code is required",
      "string.pattern.base":
        "Please enter a valid postal code (e.g., 12345 or 12345-6789)",
    }),

  country: Joi.string()
    .valid(
      "Egypt",
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
      "Germany",
      "France",
      "Other"
    )
    .required()
    .messages({
      "any.only": "Please select a valid country",
      "any.required": "Country is required",
    }),
});

export const paymentSchema = Joi.object({
  cardholderName: Joi.string()
    .min(2)
    .max(100)
    .required()
    .pattern(/^[a-zA-Z\s]+$/)
    .messages({
      "string.empty": "Cardholder name is required",
      "string.min": "Cardholder name must be at least 2 characters long",
      "string.pattern.base":
        "Cardholder name can only contain letters and spaces",
    }),

  cardNumber: Joi.string()
    .pattern(/^\d{16}$/)
    .required()
    .messages({
      "string.empty": "Card number is required",
      "string.pattern.base": "Please enter a valid 16-digit card number",
    }),

  expiryDate: Joi.string()
    .pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)
    .required()
    .custom((value, helpers) => {
      const [month, year] = value.split("/");
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;

      if (
        parseInt(year) < currentYear ||
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        return helpers.error("date.expired");
      }

      return value;
    }, "Expiry Date Validation")
    .messages({
      "string.empty": "Expiry date is required",
      "string.pattern.base": "Please enter a valid expiry date (MM/YY)",
      "date.expired": "Card has expired. Please use a valid future date",
    }),

  cvv: Joi.string()
    .pattern(/^\d{3,4}$/)
    .required()
    .messages({
      "string.empty": "CVV is required",
      "string.pattern.base": "Please enter a valid CVV (3-4 digits)",
    }),
});

// Utility function to format Joi errors for React
export const formatJoiErrors = (error) => {
  if (!error) return {};

  const formattedErrors = {};
  error.details.forEach((detail) => {
    formattedErrors[detail.path[0]] = detail.message;
  });

  return formattedErrors;
};

// Utility function to validate data against schema
export const validateData = (schema, data) => {
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    stripUnknown: true,
  });

  return {
    errors: formatJoiErrors(error),
    validatedData: value,
    isValid: !error,
  };
};
