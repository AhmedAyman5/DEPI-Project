import { useCart } from '../../context/cartContext/useCart';
import './AddToCartButton.css';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './AddToCartButton.css';

const AddToCartButton = ({ product, quantity = 1, variant = 'primary', size = 'md', className = '' }) => {
  const { addToCart, cartItems, updateQuantity } = useCart();

  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      // If product is already in cart, get current quantity and add the selected quantity
      const existingItem = cartItems.find(item => item.id === product.id);
      const newQuantity = existingItem.quantity + quantity;
      updateQuantity(product.id, newQuantity);
    } else {
      // If product is not in cart, add it with the selected quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
    
    toast.success(
      `Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to cart!`,
      {
        icon: '🛒',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 2000,
      }
    );
  };

  return (
    <Button 
      variant={variant}
      size={size}
      onClick={handleAddToCart}
      className={`add-to-cart-btn ${className}`}
      aria-label={`Add ${product.title} to cart`}
    >
      <FaShoppingCart className="me-2" />
      {isInCart ? 'Add More' : 'Add to Cart'}
    </Button>
  );
};

export default AddToCartButton;