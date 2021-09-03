import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import PolJatim from './jawa-timur.geojson';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWNod2FuMjciLCJhIjoiY2t0NDZ5cHQ3MTEwaTJ2bWxzMWxxb212OSJ9.R7VGO4Ft1Zx9Giih-yeMcw';


export default function App() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(107.6);
const [lat, setLat] = useState(-6.90);
const [zoom, setZoom] = useState(9);

useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v11',
center: [lng, lat],
zoom: zoom
});
});

useEffect(() => {
if (!map.current) return; // wait for map to initialize
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});

return (
<div>
  <div className="sidebar">
    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
  </div>
  <div ref={mapContainer} className="map-container" />
</div>
);
}