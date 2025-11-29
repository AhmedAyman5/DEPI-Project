import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageGallery.css';

const ImageGallery = ({ images = [], productTitle = '', className = '' }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    // If no images provided or only one image, create array with single image
    const imageArray = Array.isArray(images) && images.length > 0 ? images : [images || ''];

    const handlePrevious = () => {
        setSelectedImage(prev => 
            prev === 0 ? imageArray.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedImage(prev => 
            prev === imageArray.length - 1 ? 0 : prev + 1
        );
    };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <Card className={`image-gallery-card ${className}`}>
            <Card.Body className="p-0">
                {/* Main Image Container */}
                <div className="main-image-container">
                    <div className="image-wrapper">
                        <img 
                            src={imageArray[selectedImage]} 
                            alt={`${productTitle} - View ${selectedImage + 1}`}
                            className={`main-product-image ${isZoomed ? 'zoomed' : ''}`}
                            onClick={toggleZoom}
                        />
                        
                        {/* Zoom Overlay */}
                        <div className="image-overlay">
                            <button 
                                className="btn btn-light btn-sm zoom-btn"
                                onClick={toggleZoom}
                                title={isZoomed ? 'Zoom Out' : 'Zoom In'}
                            >
                                <FaExpand />
                            </button>
                        </div>

                        {/* Navigation Arrows (only show if multiple images) */}
                        {imageArray.length > 1 && (
                            <>
                                <button 
                                    className="btn btn-light btn-sm nav-btn nav-btn-left"
                                    onClick={handlePrevious}
                                    title="Previous Image"
                                >
                                    <FaChevronLeft />
                                </button>
                                <button 
                                    className="btn btn-light btn-sm nav-btn nav-btn-right"
                                    onClick={handleNext}
                                    title="Next Image"
                                >
                                    <FaChevronRight />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Image Counter */}
                    {imageArray.length > 1 && (
                        <div className="image-counter">
                            {selectedImage + 1} / {imageArray.length}
                        </div>
                    )}
                </div>
                
                {/* Thumbnail Gallery (only show if multiple images) */}
                {imageArray.length > 1 && (
                    <div className="thumbnail-container">
                        <Row className="g-2 justify-content-center">
                            {imageArray.map((img, index) => (
                                <Col xs="auto" key={index}>
                                    <div 
                                        className={`thumbnail-item ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`${productTitle} - Thumbnail ${index + 1}`} 
                                        />
                                        {selectedImage === index && (
                                            <div className="thumbnail-overlay">
                                                ✓
                                            </div>
                                        )}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default ImageGallery;