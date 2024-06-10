import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for missing marker icons in Leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function MyMapComponent() {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState([8.514477, 39.269257]); 

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setCoordinates([parseFloat(lat), parseFloat(lon)]);
        } else {
          alert('Location not found');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={handleInputChange}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>

      <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates}></Marker>
      </MapContainer>
    </div>
  );
}

export default MyMapComponent;
