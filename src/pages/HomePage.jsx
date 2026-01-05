import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import CarCard from '../components/CarCard';
import { cars, carBrands } from '../data/mockData';
import './HomePage.css';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [filteredCars, setFilteredCars] = useState(cars);

    useEffect(() => {
        let result = cars;

        // Filter by search term
        if (searchTerm) {
            result = result.filter(car =>
                car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by selected brands
        if (selectedBrands.length > 0) {
            result = result.filter(car => selectedBrands.includes(car.brand));
        }

        setFilteredCars(result);
    }, [searchTerm, selectedBrands]);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Your dream car is closer than ever—browse premium car'0s and book a test drive in Minutes.</h1>
                        <div className="location-indicator">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" />
                                <circle cx="12" cy="10" r="3" strokeWidth="2" />
                            </svg>
                            <span>Showing cars near you</span>
                        </div>
                    </div>
                    <SearchBar onSearch={setSearchTerm} />
                </div>
            </div>

            {/* Main Content */}
            <div className="container">
                <div className="main-content">
                    {/* Sidebar - Filter Panel */}
                    <aside className="sidebar">
                        <FilterPanel
                            brands={carBrands}
                            selectedBrands={selectedBrands}
                            onFilterChange={setSelectedBrands}
                        />
                    </aside>

                    {/* Car Listings */}
                    <main className="car-listings">
                        <div className="listings-header">
                            <h2>Available Cars</h2>
                            <p className="results-count">
                                {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'} found
                            </p>
                        </div>

                        {filteredCars.length > 0 ? (
                            <div className="car-grid">
                                {filteredCars.map(car => (
                                    <CarCard key={car.id} car={car} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="no-results-icon">
                                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <h3>No cars found</h3>
                                <p>Try adjusting your search or filters</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
