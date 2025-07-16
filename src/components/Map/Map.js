import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// REMOVA A DEFINIÇÃO DOS ÍCONES DAQUI

const MapComponent = ({ unidades, selectedUnit, onSelectUnit }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_Maps_API_KEY,
  });

  const center = {
    lat: -22.5,
    lng: -47.9,
  };

  // ---- CORREÇÃO: Defina os ícones AQUI DENTRO do componente ----
  // Isso garante que este código só será lido quando o componente renderizar,
  // e o 'isLoaded' abaixo garante que window.google existirá.
  const defaultIcon = {
    url: "./images/redmarker.png",
    scaledSize: isLoaded ? new window.google.maps.Size(35, 35) : null,
  };

  const highlightedIcon = {
    url: "./images/bluemarker.png",
    scaledSize: isLoaded ? new window.google.maps.Size(45, 45) : null,
  };

  if (loadError) {
    return <div>Erro ao carregar o mapa</div>;
  }

  if (!isLoaded) {
    return <div>Carregando Mapa...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7.5}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: true,
      }}
    >
      {unidades.map((unit) => (
        <MarkerF
          key={unit.id}
          position={unit.coordenadas}
          // Agora os ícones são passados corretamente
          icon={
            selectedUnit && selectedUnit.id === unit.id
              ? highlightedIcon
              : defaultIcon
          }
          onClick={() => onSelectUnit(unit)}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
