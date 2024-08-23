import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import the default marker icon images from Leaflet
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";

// Fix for broken marker icons
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

const Map = ({
  loc1,
  loc2,
}: {
  loc1?: { lat: number | null; lon: number | null; name: string | null };
  loc2?: { lat: number | null; lon: number | null; name: string | null };
}) => {
  // Component to fit the map bounds
  const FitMapToBounds = () => {
    const map = useMap();

    useEffect(() => {
      if (loc1?.lat && loc2?.lat && loc1?.lon && loc2?.lon) {
        const bounds = L.latLngBounds(
          [loc1.lat, loc1.lon],
          [loc2.lat, loc2.lon]
        );
        map.fitBounds(bounds, { padding: [50, 50] }); //
      } else if (loc1?.lat && loc1?.lon) {
        map.setView([loc1.lat, loc1.lon], 13); // Zoom to loc1 if only loc1 is provided
      } else if (loc2?.lat && loc2?.lon) {
        map.setView([loc2.lat, loc2.lon], 13); // Zoom to loc2 if only loc2 is provided
      }
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%", marginTop: "40px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {loc1?.lat && loc1?.lon && (
        <Marker position={[loc1.lat, loc1.lon]} icon={defaultIcon}>
          <Popup>
            <span style={{ fontWeight: "bold" }}>{loc1.name}</span> <br /> Lat:{" "}
            {loc1.lat}
            <br /> Lon: {loc1.lon}
          </Popup>
        </Marker>
      )}
      {loc2?.lat && loc2?.lon && (
        <Marker position={[loc2?.lat, loc2?.lon]} icon={defaultIcon}>
          <Popup>
            <span style={{ fontWeight: "bold" }}>{loc2.name}</span> <br /> Lat:
            {loc2.lat}
            <br /> Lon:{loc2.lon}
          </Popup>
        </Marker>
      )}
      <FitMapToBounds />
    </MapContainer>
  );
};

export default Map;
