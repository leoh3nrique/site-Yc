import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import useWindowSize from "../../../../hooks/useWindowSize";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const MapComponent = ({ unidades, selectedUnit, onSelectUnit }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_Maps_API_KEY,
  });

  const center = {
    lat: -22.5,
    lng: -47.9,
  };

  const defaultIcon = {
    url: "./images/utils/redmarker.png",
    scaledSize: isLoaded ? new window.google.maps.Size(35, 35) : null,
  };

  const highlightedIcon = {
    url: "./images/utils/bluemarker.png",
    scaledSize: isLoaded ? new window.google.maps.Size(45, 45) : null,
  };

  const { width } = useWindowSize();

  const isMobile = width < 900;

  const zoomLevel = isMobile ? 6.5 : 7.5;

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
      zoom={zoomLevel}
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
