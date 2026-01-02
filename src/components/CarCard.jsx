import { useNavigate } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
    const navigate = useNavigate();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleClick = () => {
        navigate(`/car/${car.id}`);
    };

    return (
        <div className="car-card card card-clickable" onClick={handleClick}>
            <div className="car-image-container">
                <img src={car.images[0]} alt={`${car.brand} ${car.model}`} className="car-image" />
                <div className="car-badge-container">
                    <span className="badge badge-primary">{car.year}</span>
                    <span className="badge badge-success">{car.fuelType}</span>
                </div>
            </div>

            <div className="car-content">
                <div className="car-header">
                    <h3 className="car-title">{car.brand} {car.model}</h3>
                    <div className="car-rating">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="star-icon">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span>{car.rating}</span>
                        <span className="text-light">({car.reviews})</span>
                    </div>
                </div>

                <div className="car-specs">
                    <div className="spec-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>{car.transmission}</span>
                    </div>
                    <div className="spec-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="9" cy="7" r="4" strokeWidth="2" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>{car.seatingCapacity} Seats</span>
                    </div>
                    <div className="spec-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>{car.mileage}</span>
                    </div>
                </div>

                <div className="car-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" strokeWidth="2" />
                    </svg>
                    <span>{car.location}</span>
                </div>

                <div className="car-footer">
                    <div className="car-pricing">
                        <div className="price-label text-light text-sm">Test Drive Booking</div>
                        <div className="price-value">{formatPrice(car.bookingAmount)}</div>
                    </div>
                    <button className="btn btn-primary view-details-btn" onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                    }}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
