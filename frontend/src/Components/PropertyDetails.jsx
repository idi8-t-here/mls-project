import React, { useState } from 'react';

const PropertyDetails = () => {
  const [propertyType, setPropertyType] = useState({
    house: false,
    apartment: false,
    condo: false,
    townhouse: false,
    villa: false,
    land: false,
    commercial: false
  });

  const [location, setLocation] = useState({
    city: '',
    neighborhood: '',
    zipCode: ''
  });

  const [priceRange, setPriceRange] = useState({
    minPrice: '',
    maxPrice: ''
  });

  const [squareFootage, setSquareFootage] = useState({
    minSquareFootage: '',
    maxSquareFootage: ''
  });

  const handlePropertyTypeChange = (e) => {
    const { name, checked } = e.target;
    setPropertyType(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSquareFootageChange = (e) => {
    const { name, value } = e.target;
    setSquareFootage(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Property Details</h2>
      <div>
        <h3>Property Type</h3>
        <label>
          <input type="checkbox" name="house" checked={propertyType.house} onChange={handlePropertyTypeChange} />
          House
        </label>
        {/* Add similar labels for other property types */}
      </div>
      <div>
        <h3>Location</h3>
        <input type="text" name="city" value={location.city} onChange={handleLocationChange} placeholder="City" />
        {/* Add input fields for neighborhood and zip code */}
      </div>
      <div>
        <h3>Price Range</h3>
        <input type="text" name="minPrice" value={priceRange.minPrice} onChange={handlePriceRangeChange} placeholder="Min Price" />
        <input type="text" name="maxPrice" value={priceRange.maxPrice} onChange={handlePriceRangeChange} placeholder="Max Price" />
      </div>
      <div>
        <h3>Square Footage</h3>
        <input type="text" name="minSquareFootage" value={squareFootage.minSquareFootage} onChange={handleSquareFootageChange} placeholder="Min Sq Ft" />
        <input type="text" name="maxSquareFootage" value={squareFootage.maxSquareFootage} onChange={handleSquareFootageChange} placeholder="Max Sq Ft" />
      </div>
      {/* Add additional sections for other filters */}
    </div>
  );
};

export default PropertyDetails;
