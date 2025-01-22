const tours = [
    {
      id: 'illusion',
      name: 'Hotel Illusion',
      scenes: [
        {
          id: 'illusion_room',
          panorama: '/images/habitacion.jpg',
          hotspots: [
            {
              pitch: 0,
              yaw: 60,
              text: 'Ir habitacion 2222',
              type: 'scene',
              sceneId: 'illusion_room_3',
              cssClass: 'hotspot-room',
            },
            // {
            //   pitch: 10,
            //   yaw: -30,
            //   text: 'Subir las escaleras',
            //   type: 'scene',
            //   sceneId: 'illusion_room_3',
            //   cssClass: 'hotspot-back',
            // },
            // {
            //   pitch: 0,
            //   yaw: 30,
            //   text: 'Informacion de la habitacion',
            //   type: 'scene',
            //   sceneId: 'illusion_room_3',
            //   cssClass: 'hotspot-sign',
            // },
            // {
            //   pitch: 0,
            //   yaw: 0,
            //   text: 'Informacion de la habitacion',
            //   type: 'scene',
            //   sceneId: 'illusion_room_3',
            //   cssClass: 'hotspot-start-two',
            // },
            // {
            //   pitch: 0,
            //   yaw: 88,
            //   text: 'Ir habitacion 3333',
            //   type: 'scene',
            //   sceneId: 'illusion_lobby',
            //   cssClass: 'hotspot-lobby',
            // },
            // {
            //   pitch: -11,
            //   yaw: 100,
            //   text: 'Venir..',
            //   type: 'scene',
            //   sceneId: 'illusion_lobby',
            //   cssClass: 'hotspot-walk',
            // },
          ],
        },
        {
          id: 'illusion_lobby',
          panorama: '/images/habitacion.jpg',
          hotspots: [
            {
              pitch: -5,
              yaw: 30,
              text: 'Volver a la Habitación',
              type: 'scene',
              sceneId: 'illusion_room',
              cssClass: 'hotspot-back',
            },
          ],
        },
        {
          id: 'illusion_room_3',
          panorama: '/images/habitacion2.jpg',
          hotspots: [
            {
              pitch: -5,
              yaw: 30,
              text: 'Volver a la Habitación',
              type: 'scene',
              sceneId: 'illusion_room',
              cssClass: 'hotspot-back',
            },
          ],
        },
      ],
    },
    {
      id: 'express',
      name: 'Hotel Express',
      scenes: [
        {
          id: 'express_room',
          panorama: '/images/xpresslobi.png',
          hotspots: [
            {
              pitch:0,
              yaw: -40,
              type: 'scene',
              text: 'Ver comededor',
              sceneId: 'express_lobby',
              cssClass: 'hotspot-room',
            },
            {
              pitch:0,
              yaw: -30,
              type: 'scene',
              text: 'Ver entre Lobby',
              sceneId: 'express_entrelobby',
              cssClass: 'hotspot-room',
            },
          ],
        },
        {
          id: 'express_entrelobby',
          panorama: '/images/PanoramaInterior.png',
          hotspots: [
            {
              pitch: -10,
              yaw: 40,
              text: 'Volver a la Habitación',
              type: 'scene',
              sceneId: 'express_room',
              cssClass: 'hotspot-back',
            },
          ],
        },
        {
          id: 'express_lobby',
          panorama: '/images/comedorxpress.jpg',
          hotspots: [
            {
              pitch: -10,
              yaw: 40,
              text: 'Volver a la Habitación',
              type: 'scene',
              sceneId: 'express_room',
              cssClass: 'hotspot-back',
            },
          ],
        },
      ],
    },
    {
      id: 'minirooms',
      name: 'Hotel Minirooms',
      scenes: [
        {
          id: 'minirooms_room',
          panorama: '/images/imageninsta.jpg',
          hotspots: [
            {
              pitch: 0,
              yaw: -10,
              text: 'Ir al Lobby',
              type: 'scene',
              sceneId: 'minirooms_lobby',
              cssClass: 'hotspot-lobby',
            },
          ],
        },
        {
          id: 'minirooms_lobby',
          panorama: '/images/minirooms-lobby.jpg',
          hotspots: [
            {
              pitch: 5,
              yaw: 15,
              text: 'Volver a la Habitación',
              type: 'scene',
              sceneId: 'minirooms_room',
              cssClass: 'hotspot-back',
            },
          ],
        },
      ],
    },
  ];
  
  export default tours;
  