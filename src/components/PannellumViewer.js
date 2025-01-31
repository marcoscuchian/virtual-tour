import React, { useEffect, useRef, useState } from 'react';
import './PannellumViewer.css';

const PannellumViewer = ({ currentScene, setScene }) => {
  const viewerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!currentScene) return; 
    let viewer;
    if (viewerRef.current && window.pannellum) {
      viewer = window.pannellum.viewer(viewerRef.current, {
        type: 'equirectangular',
        panorama: currentScene.panorama,
        autoLoad: true,
        gyroscopeControl: true,
        draggable: true,
        touchZoom: true,
        mouseZoom: false,
        autoRotate: 5,
        keyboardZoom: false,
        showFullscreenCtrl: true,
        hotSpots: currentScene.hotspots.map((hotspot) => ({
          ...hotspot,
          cssClass: hotspot.cssClass,
          clickHandlerFunc: () => {
            if (hotspot.type === 'scene') {
              setScene(hotspot.sceneId);
            } else {
              window.open(hotspot.URL, '_blank');
            }
          },
        })),
      });

      viewer.on('load', () => setIsLoaded(true));
      viewer.on('error', (e) => console.error('Pannellum error:', e));

      return () => {
        if (viewer) {
          viewer.destroy();
        }
      };
    }
  }, [currentScene, setScene]);

  return (
    <div className="pannellum-container">
      <div
        ref={viewerRef}
        className={`pannellum-viewer ${isLoaded ? '' : 'loading'}`}
      ></div>
      {!isLoaded && <div className="loading-indicator">Cargando...</div>}
    </div>
  );
};

export default PannellumViewer;
