import React, { useState } from 'react';
import './Widget.css';
import HotelButton from './HotelButton';
import PannellumViewer from './PannellumViewer';
import tours from './constants/constants';

function Widget() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTour, setActiveTour] = useState(null);
  const [currentScene, setCurrentScene] = useState(null);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    }
  };

  const closeWidget = () => {
    setIsFullscreen(false);
    setActiveTour(null);
    setCurrentScene(null);
    if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const goBack = () => {
    setActiveTour(null);
    setCurrentScene(null);
  };

  const startTour = (tourId) => {
    const selectedTour = tours.find((tour) => tour.id === tourId);
    setActiveTour(selectedTour);
    setCurrentScene(selectedTour.scenes[0]);
  };

  const changeScene = (sceneId) => {
    const nextScene = activeTour.scenes.find((scene) => scene.id === sceneId);
    if (nextScene) setCurrentScene(nextScene);
  };

  const ilussionImg = 'https://hotelsbyillusion.com/wp-content/uploads/2024/09/ILLUSION-GROUP-Logos-8.png';
  const expressImg = 'https://hotelsbyillusion.com/wp-content/uploads/2024/09/ILLUSION-GROUP-Logos-9.png';
  const miniroomsImg = 'https://hotelsbyillusion.com/wp-content/uploads/2024/09/ILLUSION-GROUP-Logos-10.png';
  const widgetIconImg = 'https://hotelsbyillusion.com/wp-content/uploads/2024/12/5201125.png';

  return (
    <div className={`widget ${isFullscreen ? 'fullscreen' : ''}`}>
      {!isFullscreen && (
        <button onClick={toggleFullscreen} className="widget-button">
          <img src={widgetIconImg} alt="Abrir widget TOUR" className="widget-icon" />
        </button>
      )}
      {isFullscreen && !activeTour && (
        <div className="widget-content">
          <div className="images-container">
            {tours.map((tour) => (
              <div key={tour.id} className="image-item">
                <HotelButton
                  imageSrc={
                    tour.id === 'illusion'
                      ? ilussionImg
                      : tour.id === 'express'
                      ? expressImg
                      : miniroomsImg
                  }
                  alt={tour.name}
                  onClick={() => startTour(tour.id)}
                />
              </div>
            ))}
          </div>
          <button onClick={closeWidget} className="close-button" title="Cerrar contenido">
            <span className="close-icon">×</span>
          </button>
        </div>
      )}
      {isFullscreen && activeTour && currentScene && (
        <div className="tour-viewer">
          <PannellumViewer
            currentScene={currentScene}
            setScene={changeScene}
          />
          <button onClick={goBack} className="back-button" title="Volver al menú">
            Volver al menú
          </button>
          <button onClick={closeWidget} className="close-button" title="Cerrar widget">
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default Widget;
