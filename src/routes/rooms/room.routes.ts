import { Router } from 'express';
import { getRooms } from '../../controllers/rooms/getTypeRooms';

export const roomsRoutes = (routes: Router) => {

    /**
     * 
     * RUTAS DE LAS RESERVACIONES 
     */

    /**
     * GET  
     */
   
    routes.get('/rooms', getRooms);

}