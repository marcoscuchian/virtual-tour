const tours = [
    {
      id: 'illusion',
      name: 'Hotel Illusion',
      scenes: [
        {
          id: 'illusion_room',
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
              text: 'Volver al Lobby',
              type: 'scene',
              sceneId: 'express_room',
              cssClass: 'hotspot-room',
            },
          ],
        },
      ],
    },
    {
      id: 'minirooms',
      name: 'Hotel Minirooms',
      scenes: [
        // id: 'minirooms_room',
        {
          id: 'minirooms_room',
          name_show: 'Lobby',
          show_button: true,
          panorama: '/images/lobbifinal.png',
          hotspots: [
            {
              pitch: -90,
              yaw: 0,
              type: 'scene',
              sceneId: 'illusion_room_3',
              cssClass: 'hotspot-logo',
            },
            {
              pitch: 0,
              yaw: -85,
              text: 'Mini rooms',
              type: 'scene',
              sceneId: 'bajar_a_minirooms',
              cssClass: 'hotspot-minirooms',
            },
            {
              pitch: 0,
              yaw: -50,
              text: 'Comedor',
              type: 'scene',
              sceneId: 'comedor_minirooms',
              cssClass: 'hotspot-room',
            },
          ],
        },
        // id: 'comedor_minirooms',  
        {
          // ---------
          id: 'comedor_minirooms',  
          name_show:'Comedor',  
          show_button: true,
          panorama: '/images/comedor.png',
          hotspots: [
            {
              pitch: -90,
              yaw: 0,
              type: 'scene',
              sceneId: 'illusion_room_3',
              cssClass: 'hotspot-logo',
            },
            {
              pitch: 0,
              yaw: -150,
              text: 'Mini rooms',
              type: 'scene',
              sceneId: 'bajar_a_minirooms',
              cssClass: 'hotspot-minirooms',
            },
            {
              pitch: 0,
              yaw: -200,
              text: 'Volver al lobby',
              type: 'scene',
              sceneId: 'minirooms_room',
              cssClass: 'hotspot-room',
            },

          ],
          // ------
        },
        // id: 'bajar_a_minirooms (en las escaleras)',
        {
          id: 'bajar_a_minirooms',
          name_show: 'Minirooms pasillo',
          show_button: true,
          panorama: '/images/minirompasillo.png',
          hotspots: [
            {
              pitch: -90,
              yaw: 0,
              type: 'scene',
              sceneId: 'illusion_room_3',
              cssClass: 'hotspot-logo',
            },
            {
              pitch: 0,
              yaw:-160,
              text: 'Volver al Lobby',
              type: 'scene',
              sceneId: 'minirooms_room',
              cssClass: 'hotspot-room',
            },
            {
              pitch: 10,
              yaw:-77,
              text: 'Ver Habitacion S-02',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            },
            {
              pitch: 10,
              yaw:-47,
              text: 'Ver Habitacion S-03',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            },
            {
              pitch: 10,
              yaw:-225,
              text: 'Ver Habitacion S-01',
              type: 'scene',
              sceneId: 'minirooms_room',
              cssClass: 'hotspot-room',
            },
            {
              pitch: 3,
              yaw:-297,
              text: 'Ver Habitacion S-18',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            },
            {
              pitch: -16,
              yaw:-297,
              text: 'Caminar',
              type: 'scene',
              sceneId: 'minirooms_pasillo_18',
              cssClass: 'hotspot-walk',
            },
            {
              pitch: -9,
              yaw:-30,
              text: 'Caminar',
              type: 'scene',
              sceneId: 'minirooms_pasillo_18',
              cssClass: 'hotspot-walk',
            },
          ],
        },
        // id: 'minirooms_pasillo_18',
        {
          id: 'minirooms_pasillo_18',
          name_show: 'minirooms_pasillo_18',
          // probando minirompasillo18
          panorama: '/images/minirompasillo18.png',
          hotspots: [
            {
              pitch: -90,
              yaw: 0,
              type: 'scene',
              sceneId: 'minirooms_room',
              cssClass: 'hotspot-logo',
            },

            {
              pitch:-10,
              yaw:88,
              text: 'Caminar',
              type: 'scene',
              sceneId: 'minirooms_pasillo_18',
              cssClass: 'hotspot-walk',
            }, 
            {
              pitch:0,
              yaw:60,
              text: 'Ver Habitacion 10',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            }, 
            {
              pitch:0,
              yaw:76,
              text: 'Ver Habitacion 09',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            }, 
            {
              pitch:0,
              yaw:160,
              text: 'Ver Habitacion 18',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            }, 
            {
              pitch:0,
              yaw:105,
              text: 'Ver Habitacion 19',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            }, 
            {
              pitch:5,
              yaw:246,
              text: 'Ver Habitacion 17',
              type: 'scene',
              sceneId: 'minirooms_room_normal',
              cssClass: 'hotspot-room',
            }, 
            {
              pitch:-17,
              yaw:266,
              text: 'Caminar',
              type: 'scene',
              sceneId: 'minirooms_pasillo_18',
              cssClass: 'hotspot-walk',
            }, 
            {
              pitch:-16,
              yaw:0,
              text: 'Caminar',
              type: 'scene',
              sceneId: 'bajar_a_minirooms',
              cssClass: 'hotspot-walk',
            }, 
          ],
        },
        // id: 'minirooms_room_normal',
        {
          id: 'minirooms_room_normal',
          name_show:'Habitacion dos personas',
          show_button: true,
          panorama: '/images/miniromnormal.png',
          hotspots: [
            {
              pitch: -90,
              yaw: 0,
              type: 'scene',
              sceneId: 'VOLVER!',
              cssClass: 'hotspot-logo',
            },
            {
              pitch: -180,
              yaw: 0,
              text: 'Volver',
              type: 'scene',
              sceneId: 'bajar_a_minirooms',
              cssClass: 'hotspot-room',
            },
          ],
        }        
      ],
    },
  ];
  
  export default tours;
  