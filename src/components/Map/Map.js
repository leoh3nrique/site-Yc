import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import redMarker from "../../assets/redmarker.png";
// import blueMarker from "../../assets/bluemarker.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { unidades } from "../../data";

// Centro do mapa
const center = [-22.264802613742013, -47.910597245261826];

// Definindo os markers usando L.divIcon e classes customizadas
const defaultIcon = L.icon({
  iconUrl: "./images/redmarker.png",
  shadowUrl: markerShadow,
  iconSize: [35, 35],
  iconAnchor: [10, 10],
});

// Ícone destacado com estilos inline
const highlightedIcon = L.icon({
  iconUrl: "./images/bluemarker.png",
  shadowUrl: markerShadow,
  iconSize: [43, 43],
  iconAnchor: [12, 12],
});

const MapComponent = ({ selectedUnit, setSelectedUnit }) => {
  return (
    <MapContainer
      center={center}
      zoom={7}
      style={{ height: "600px", width: "40%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {unidades.map((unit) => (
        <Marker
          key={unit.id}
          position={[unit.coordenadas.lat, unit.coordenadas.lng]}
          icon={
            selectedUnit && selectedUnit.id === unit.id
              ? highlightedIcon
              : defaultIcon
          }
          eventHandlers={{
            click: () => setSelectedUnit(unit),
          }}
        ></Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
