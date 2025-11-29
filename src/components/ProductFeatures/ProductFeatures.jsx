import { Card, Row, Col } from 'react-bootstrap';
import { FaTruck, FaUndo, FaHeart, FaTag, FaGlobe } from 'react-icons/fa';
import { FaShieldHalved } from "react-icons/fa6";
import './ProductFeatures.css';

const ProductFeatures = ({ product, className = '' }) => {
    const features = [
        {
            icon: <FaTruck />,
            title: 'Free Shipping',
            description: 'On orders over $50'
        },
        {
            icon: <FaUndo />,
            title: '30-Day Returns',
            description: 'Easy return policy'
        },
        {
            icon: <FaShieldHalved />,
            title: '2-Year Warranty',
            description: 'Full coverage'
        },
        {
            icon: <FaHeart />,
            title: '24/7 Support',
            description: 'Customer service'
        }
    ];

    const productDetails = [
        { label: 'Category', value: product?.category || 'N/A' },
        { label: 'SKU', value: `SKU-${product?.id || '000'}` },
        { label: 'Brand', value: `${product?.category || 'Generic'} Brand` },
        { label: 'Availability', value: 'In Stock' },
        { label: 'Shipping', value: '1-3 business days' },
        { label: 'Weight', value: '0.5 kg' }
    ];

    return (
        <Row className={`g-4 product-features-container ${className}`}>
            {/* Features Card */}
            <Col md={6}>
                <Card className="features-card h-100">
                    <Card.Header className="features-header">
                        <h5 className="mb-0">
                            <FaTag className="me-2 text-primary" />
                            Product Features
                        </h5>
                    </Card.Header>
                    <Card.Body className="p-4">
                        <Row className="g-3">
                            {features.map((feature, index) => (
                                <Col xs={6} key={index} className="text-center">
                                    <div className="feature-item">
                                        <div className="feature-icon-wrapper">
                                            {feature.icon}
                                        </div>
                                        <h6 className="feature-title">{feature.title}</h6>
                                        <p className="feature-description">{feature.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            
            {/* Product Details Card */}
            <Col md={6}>
                <Card className="details-card h-100">
                    <Card.Header className="details-header">
                        <h5 className="mb-0">
                            <FaGlobe className="me-2 text-success" />
                            Product Details
                        </h5>
                    </Card.Header>
                    <Card.Body className="p-4">
                        <div className="details-list">
                            {productDetails.map((detail, index) => (
                                <div key={index} className="detail-row">
                                    <div className="detail-label">{detail.label}:</div>
                                    <div className="detail-value">{detail.value}</div>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ProductFeatures;