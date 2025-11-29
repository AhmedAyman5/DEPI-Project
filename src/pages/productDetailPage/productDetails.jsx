import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/productsContext/useProducts';
import { Container, Row, Col, Alert, Breadcrumb, Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaHome, FaInfoCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Loader } from '../exportPages';
import { ImageGallery, ProductInfo, ProductFeatures } from '../../components/exportComponents';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, isLoading, error: productsError } = useProducts();
    
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    useEffect(() => {
        if (products.length > 0) {
            const productData = products.find(p => p.id === parseInt(id));
            
            if (productData) {
                setProduct({
                    ...productData,
                    images: [
                        productData.image,
                        productData.image, 
                        productData.image,
                        productData.image
                    ]
                });
                setError(null);
            } else {
                setError('Product not found');
                toast.error('Product not found');
            }
        } else if (productsError) {
            setError('Failed to load product details');
            toast.error('Failed to load product details');
        }
    }, [id, products, productsError]);

    if (isLoading) return <Loader />;

    if (error || !product) {
        return (
            <Container className="py-5">
                <Alert variant="danger" className="text-center shadow-lg border-0 rounded-4">
                    <div className="py-4">
                        <h2 className="mb-3">Product Not Found</h2>
                        <p className="lead mb-4">{error || 'The product you are looking for does not exist.'}</p>
                        <Button 
                            variant="primary" 
                            size="lg"
                            onClick={() => navigate('/products')}
                            className="px-4"
                        >
                            <FaArrowLeft className="me-2" />
                            Back to Products
                        </Button>
                    </div>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="product-details-container py-4">
            <Breadcrumb className="mb-4 modern-breadcrumb">
                <Breadcrumb.Item 
                    onClick={() => navigate('/')} 
                    className="breadcrumb-link"
                >
                    <FaHome className="me-1" />
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item 
                    onClick={() => navigate('/products')} 
                    className="breadcrumb-link"
                >
                    Products
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {product.category}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="fw-semibold">
                    {product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row className="g-4 mb-4">
                <Col lg={6}>
                    <ImageGallery 
                        images={product.images} 
                        productTitle={product.title}
                        className="shadow-lg"
                    />
                </Col>
                <Col lg={6}>
                    <ProductInfo 
                        product={product}
                        hideDescription={true}
                        className="h-100"
                    />
                </Col>
            </Row>
            <Row className="mb-5">
                <Col xs={12}>
                    <Card className="description-card shadow-sm">
                        <Card.Header className="bg-light border-0">
                            <div className="d-flex align-items-center gap-2">
                                <FaInfoCircle className="text-primary" />
                                <h5 className="mb-0 fw-bold">Product Description</h5>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <div className={`description-content ${isDescriptionExpanded ? 'expanded' : ''}`}>
                                {product.description}
                            </div>
                            {product.description.length > 300 && (
                                <Button 
                                    variant="link" 
                                    className="description-toggle p-0 mt-3"
                                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                                >
                                    {isDescriptionExpanded ? 'Show Less ↑' : 'Read More ↓'}
                                </Button>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ProductFeatures product={product} />
        </Container>
    );
};

export default ProductDetails;