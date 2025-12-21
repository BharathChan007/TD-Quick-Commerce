import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cars, customerReviews } from '../data/mockData';
import './CarDetailPage.css';

const CarDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(0);
    const [showBookingModal, setShowBookingModal] = useState(false);

    if (!car) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Car not found</h2>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        );
    }

    const reviews = customerReviews[car.id] || [];

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleBookTestDrive = () => {
        setShowBookingModal(true);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                viewBox="0 0 24 24"
                fill={index < rating ? 'currentColor' : 'none'}
                stroke="currentColor"
                className="star-icon"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ));
    };

    return (
        <div className="car-detail-page">
            {/* Header with Back Button */}
            <div className="detail-header">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Cars
                    </button>
                </div>
            </div>

            <div className="container">
                {/* Image Gallery */}
                <div className="image-gallery-section">
                    <div className="main-image-container">
                        <img
                            src={car.images[selectedImage]}
                            alt={`${car.brand} ${car.model}`}
                            className="main-image"
                        />
                    </div>
                    <div className="thumbnail-container">
                        {car.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${car.brand} ${car.model} - View ${index + 1}`}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Car Details Grid */}
                <div className="detail-grid">
                    {/* Left Column - Info */}
                    <div className="detail-main">
                        {/* Title Section */}
                        <div className="title-section">
                            <div>
                                <div className="car-badges">
                                    <span className="badge badge-primary">{car.year}</span>
                                    <span className="badge badge-success">{car.fuelType}</span>
                                </div>
                                <h1 className="car-detail-title">{car.brand} {car.model}</h1>
                                <div className="car-rating-detail">
                                    <div className="stars">{renderStars(Math.floor(car.rating))}</div>
                                    <span className="rating-text">
                                        {car.rating} ({car.reviews} reviews)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="section-card">
                            <h2 className="section-title">Description</h2>
                            <p className="description-text">{car.description}</p>
                        </div>

                        {/* Specifications */}
                        <div className="section-card">
                            <h2 className="section-title">Specifications</h2>
                            <div className="specs-grid">
                                <div className="spec-detail-item">
                                    <div className="spec-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="spec-label">Transmission</div>
                                        <div className="spec-value">{car.transmission}</div>
                                    </div>
                                </div>

                                <div className="spec-detail-item">
                                    <div className="spec-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="9" cy="7" r="4" strokeWidth="2" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="spec-label">Seating</div>
                                        <div className="spec-value">{car.seatingCapacity} Seats</div>
                                    </div>
                                </div>

                                <div className="spec-detail-item">
                                    <div className="spec-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="spec-label">Mileage</div>
                                        <div className="spec-value">{car.mileage}</div>
                                    </div>
                                </div>

                                <div className="spec-detail-item">
                                    <div className="spec-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="spec-label">Color</div>
                                        <div className="spec-value">{car.color}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="section-card">
                            <h2 className="section-title">Key Features</h2>
                            <div className="features-grid">
                                {car.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="check-icon">
                                            <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Customer Reviews */}
                        <div className="section-card">
                            <h2 className="section-title">Customer Reviews</h2>
                            {reviews.length > 0 ? (
                                <div className="reviews-list">
                                    {reviews.map(review => (
                                        <div key={review.id} className="review-card">
                                            <div className="review-header">
                                                <div className="review-author">
                                                    <div className="author-avatar">
                                                        {review.customerName.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="author-name">{review.customerName}</div>
                                                        <div className="review-date">{new Date(review.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                                    </div>
                                                </div>
                                                <div className="review-rating">
                                                    {renderStars(review.rating)}
                                                </div>
                                            </div>
                                            <p className="review-text">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-reviews">No reviews yet. Be the first to review!</p>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="detail-sidebar">
                        <div className="booking-card card">
                            <div className="booking-price">
                                <div className="price-label">Starting Price</div>
                                <div className="price-amount">{formatPrice(car.price)}</div>
                            </div>

                            <div className="booking-amount-section">
                                <div className="booking-label">Test Drive Booking Amount</div>
                                <div className="booking-value">{formatPrice(car.bookingAmount)}</div>
                            </div>

                            <div className="location-detail">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" />
                                    <circle cx="12" cy="10" r="3" strokeWidth="2" />
                                </svg>
                                <span>{car.location}</span>
                            </div>

                            <button className="btn btn-primary btn-lg book-btn" onClick={handleBookTestDrive}>
                                Book Test Drive
                            </button>

                            <div className="booking-benefits">
                                <h4>What's Included:</h4>
                                <ul>
                                    <li>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        30-minute test drive
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Expert guidance
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Full vehicle inspection
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        No obligation to buy
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {showBookingModal && (
                <div className="modal-overlay" onClick={() => setShowBookingModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowBookingModal(false)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <div className="modal-header">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="success-icon">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="var(--color-success)" />
                                <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="var(--color-success)" />
                            </svg>
                            <h3>Booking Request Submitted!</h3>
                        </div>
                        <div className="modal-body">
                            <p>Your test drive booking request for <strong>{car.brand} {car.model}</strong> has been submitted successfully.</p>
                            <p>Our dealership team will contact you within 24 hours to confirm your preferred date and time.</p>
                            <div className="booking-summary">
                                <div className="summary-item">
                                    <span>Vehicle:</span>
                                    <strong>{car.brand} {car.model} ({car.year})</strong>
                                </div>
                                <div className="summary-item">
                                    <span>Location:</span>
                                    <strong>{car.location}</strong>
                                </div>
                                <div className="summary-item">
                                    <span>Booking Amount:</span>
                                    <strong>{formatPrice(car.bookingAmount)}</strong>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={() => setShowBookingModal(false)}>
                                Got it!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarDetailPage;
