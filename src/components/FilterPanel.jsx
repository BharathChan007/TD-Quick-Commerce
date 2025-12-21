import { useState } from 'react';
import './FilterPanel.css';

const FilterPanel = ({ brands, selectedBrands, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBrandToggle = (brand) => {
        const newSelectedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        onFilterChange(newSelectedBrands);
    };

    const handleClearAll = () => {
        onFilterChange([]);
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button className="filter-toggle md-hide" onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 4h18M3 12h18M3 20h18" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Filters
                {selectedBrands.length > 0 && (
                    <span className="filter-count">{selectedBrands.length}</span>
                )}
            </button>

            {/* Filter Panel */}
            <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
                <div className="filter-header">
                    <h3>Filter by Brand</h3>
                    {selectedBrands.length > 0 && (
                        <button onClick={handleClearAll} className="clear-all-btn">
                            Clear All
                        </button>
                    )}
                    <button className="close-btn md-hide" onClick={() => setIsOpen(false)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                <div className="filter-content">
                    {brands.map(brand => (
                        <label key={brand} className="filter-option">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandToggle(brand)}
                            />
                            <span className="checkbox-custom"></span>
                            <span className="brand-name">{brand}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && <div className="filter-overlay md-hide" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default FilterPanel;
