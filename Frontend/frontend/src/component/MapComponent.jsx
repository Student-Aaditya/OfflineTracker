import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Header from "./Header";
import '../App.css'
import "leaflet/dist/leaflet.css";

function MapComponent() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error(err);
          setError("Unable to fetch your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!position) return <p>Fetching your location...</p>;

  return (
    <>
            <div className=" w-full bg-[url('/images.jpeg')] bg-cover bg-center mb-2">

    <Header/>
    </div>
   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. 📍 
    </Popup>
  </Marker>
</MapContainer>
    </>
  );
}

export default MapComponent;
