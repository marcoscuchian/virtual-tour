import React, { useEffect, useRef, useState } from 'react';
import './PannellumViewer.css'; 

const PannellumViewer = ({ currentScene, setScene }) => {
  const viewerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (viewerRef.current && window.pannellum) {
      setIsLoaded(false); 

      const viewer = window.pannellum.viewer(viewerRef.current, {
        type: 'equirectangular',
        panorama: currentScene.panorama,
        autoLoad: true,
        hotSpots: currentScene.hotspots.map((hotspot) => ({
          ...hotspot,
          cssClass: hotspot.cssClass,
          clickHandlerFunc:
            hotspot.type === 'scene'
              ? () => setScene(hotspot.sceneId)
              : () => window.open(hotspot.URL, '_blank'),
        })),
      });

      viewer.on('load', () => setIsLoaded(true));

      return () => {
        viewer.destroy();
      };
    }
  }, [currentScene, setScene]);

  return (
    <div className="pannellum-container">
      <div
        ref={viewerRef}
        className={`pannellum-viewer ${isLoaded ? '' : 'loading'}`}
      ></div>
    </div>
  );
};

export default PannellumViewer;
