import React, { useEffect } from 'react';

const PannellumTour = ({ closeTour }) => {
  useEffect(() => {
    // Asegurarse de que Pannellum se cargue
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
    script.onload = () => {
      if (window.pannellum) {
        // Inicializa Pannellum
        window.pannellum.viewer('panorama', {
          "default": {
            "firstScene": "habitacion",
            "sceneFadeDuration": 1000,
            "autoLoad": true,
            "gyroscopeControl": true,
            "showControls": true
          },
          "scenes": {
            "habitacion": {
              "type": "equirectangular",
              "panorama": "https://hotelsbyillusion.com/wp-content/uploads/2024/09/ILLUSION-GROUP-Logos-8.png",
              "hotSpots": [
                {
                  "pitch": 0,
                  "yaw": 60,
                  "type": "scene",
                  "text": "Ir a la otra habitación (1)",
                  "sceneId": "otra_habitacion"
                },
                {
                  "pitch": 0,
                  "yaw": 89,
                  "type": "scene",
                  "text": "Ir a la otra habitación (2)",
                  "sceneId": "otra_habitacion2"
                }
              ]
            },
            "otra_habitacion": {
              "type": "equirectangular",
              "panorama": "https://hotelsbyillusion.com/wp-content/uploads/2024/09/ILLUSION-GROUP-Logos-9.png",
              "hotSpots": [
                {
                  "pitch": 0,
                  "yaw": -20,
                  "type": "scene",
                  "text": "Volver a la habitación principal",
                  "sceneId": "habitacion"
                }
              ]
            },
            "otra_habitacion2": {
              "type": "equirectangular",
              "panorama": "https://hotelsbyillusion.com/wp-content/uploads/2024/09/ILLUSION-GROUP-Logos-9.png",
              "hotSpots": [
                {
                  "pitch": 0,
                  "yaw": -10,
                  "type": "scene",
                  "text": "Volver a la habitación principal",
                  "sceneId": "habitacion"
                },
                {
                  "pitch": 0,
                  "yaw": 120,
                  "type": "scene",
                  "text": "Ir a la segunda habitación",
                  "sceneId": "otra_habitacion"
                }
              ]
            }
          }
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="panorama" style={{ width: "100%", height: "100%" }}>
      <button
        onClick={closeTour}
        style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 9999 }}
      >
        Salir
      </button>
      <button
        onClick={() => window.history.back()}
        style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 9999 }}
      >
        Volver Atrás
      </button>
    </div>
  );
};

export default PannellumTour;
