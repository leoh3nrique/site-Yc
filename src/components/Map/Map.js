import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Corrigindo o problema do ícone padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Ícones personalizados
const defaultIcon = L.icon({
  iconUrl: './images/redmarker.png',
  shadowUrl: markerShadow,
  iconSize: [35, 35],
  iconAnchor: [12, 41],
});

const highlightedIcon = L.icon({
  iconUrl: './images/bluemarker.png',
  shadowUrl: markerShadow,
  iconSize: [45, 45],
  iconAnchor: [12, 41],
});

const MapComponent = ({ unidades, selectedUnit, onSelectUnit }) => {
  const center = [-22.5, -47.9];

  return (
    <MapContainer
      center={center}
      zoom={7}
      style={{ height: "650px", width: "100%", borderRadius: "10px", boxShadow: "0 10px 25px rgba(0,0,0,0.07)" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {unidades.map((unit) => (
        <Marker
          key={unit.id}
          position={[unit.coordenadas.lat, unit.coordenadas.lng]}
          icon={selectedUnit && selectedUnit.id === unit.id ? highlightedIcon : defaultIcon}
          eventHandlers={{
            // Quando o marcador é clicado, a função do componente pai é chamada
            click: () => onSelectUnit(unit),
          }}
        >
            <Popup>{unit.nome}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;