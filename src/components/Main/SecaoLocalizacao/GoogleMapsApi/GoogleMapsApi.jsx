import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function GoogleMapsAPI() {
    
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -23.55052, // Latitude do centro do mapa
        lng: -46.633308 // Longitude do centro do mapa
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDFfsyYunm87Sz8V90C70xV1phlamqGPUY">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapsAPI;