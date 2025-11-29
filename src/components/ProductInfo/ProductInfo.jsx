import { useState } from 'react';
import { Badge, Button, Form, Row, Col } from 'react-bootstrap';
import { FaStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../../context/cartContext/useCart';
import { useWishlist } from '../../context/wishlistContext/useWishlist';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './ProductInfo.css';

const ProductInfo = ({ product, className = '', hideDescription = false, hideQuantityAndActions = false }) => {
    const { addToCart, cartItems, updateQuantity } = useCart();
    const { wishlist, toggleWishlist } = useWishlist();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const isInCart = product && cartItems.some(item => item.id === product.id);
    const isInWishlist = product && wishlist.some(item => item.id === product.id);

    const handleAddToCart = () => {
        if (product) {
            if (isInCart) {
                const existingItem = cartItems.find(item => item.id === product.id);
                const newQuantity = existingItem.quantity + quantity;
                updateQuantity(product.id, newQuantity);
                
                toast.success(
                    `Added ${quantity} more ${quantity > 1 ? 'items' : 'item'} to cart!`
                );
            } else {
                for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                }
                
                toast.success(
                    `Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to cart!`
                );
            }
        }
    };

    const handleQuantityChange = (value) => {
        const numValue = parseInt(value);
        if (numValue > 0 && numValue <= 20) {
            setQuantity(numValue);
        }
    };

    const incrementQuantity = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleWishlistToggle = () => {
        if (product) {
            toggleWishlist(product);
        }
    };

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    if (!product) return null;

    return (
        <div className={`product-info-container ${className}`}>
            {/* Category Badge */}
            <Badge bg="primary" className="mb-3 category-badge">
                {product.category}
            </Badge>
            
            {/* Product Title */}
            <h1 className="product-title">{product.title}</h1>
            
            {/* Rating Section */}
            <div className="rating-section mb-3">
                <div className="d-flex align-items-center gap-2">
                    <div className="rating-badge">
                        <FaStar className="star-icon" />
                        <span className="rating-value">{product.rating?.rate || 0}</span>
                    </div>
                    <span className="review-count">
                        ({product.rating?.count || 0} reviews)
                    </span>
                </div>
            </div>

            {/* Simple Price Section */}
            <div className="simple-price-section mb-4">
                <div className="price-card">
                    <div className="price-info">
                        <span className="price-label">Price:</span>
                        <h2 className="simple-price">${product.price}</h2>
                    </div>
                    <Badge bg="success" className="stock-badge">
                        ✓ In Stock
                    </Badge>
                </div>
            </div>

            {/* Conditional Quantity Card */}
            {!hideQuantityAndActions && (
            <div className="quantity-card mb-4">
                <div className="card-header">
                    <Form.Label className="quantity-label mb-0">Select Quantity</Form.Label>
                </div>
                <div className="card-body">
                    <div className="quantity-controls mb-3">
                        <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={decrementQuantity}
                            disabled={quantity <= 1}
                            className="quantity-btn"
                        >
                            −
                        </Button>
                        <Form.Control
                            type="number"
                            value={quantity}
                            onChange={(e) => handleQuantityChange(e.target.value)}
                            min="1"
                            max="20"
                            className="quantity-input"
                        />
                        <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={incrementQuantity}
                            disabled={quantity >= 20}
                            className="quantity-btn"
                        >
                            +
                        </Button>
                    </div>
                    <small className="text-muted d-block mb-3">Maximum 20 items per order</small>
                    
                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <Row className="g-2 mb-3">
                            <Col sm={8}>
                                <Button 
                                    variant="primary" 
                                    size="lg"
                                    className="w-100 add-to-cart-btn"
                                    onClick={handleAddToCart}
                                >
                                    <FaShoppingCart className="me-2" />
                                    Add to Cart
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Button 
                                    variant={isInWishlist ? "danger" : "outline-danger"}
                                    size="lg"
                                    className="w-100 wishlist-btn"
                                    onClick={handleWishlistToggle}
                                    title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                                >
                                    {isInWishlist ? <FaHeart /> : <FaRegHeart />}
                                </Button>
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Col xs={12}>
                                <Button 
                                    variant="outline-success" 
                                    size="lg"
                                    className="w-100 buy-now-btn"
                                    onClick={() => {
                                        if (!isInCart) {
                                            for (let i = 0; i < quantity; i++) {
                                                addToCart(product);
                                            }
                                        }
                                        navigate('/cart');
                                    }}
                                >
                                    Buy Now
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            )}

            {/* Conditional Description Section */}
            {!hideDescription && (
                <div className="description-section">
                    <h6 className="section-title">About this item</h6>
                    <div className="description-preview">
                        {product.description.length > 200 ? 
                            `${product.description.substring(0, 200)}...` : 
                            product.description
                        }
                    </div>
                    {product.description.length > 200 && (
                        <Button 
                            variant="link" 
                            className="description-toggle"
                            onClick={toggleDescription}
                        >
                            Read more
                        </Button>
                    )}
                    {isDescriptionExpanded && (
                        <div className="description-full mt-2">
                            <div className="product-description">
                                {product.description}
                            </div>
                            <Button 
                                variant="link" 
                                className="description-toggle"
                                onClick={toggleDescription}
                            >
                                Show Less ↑
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductInfo;