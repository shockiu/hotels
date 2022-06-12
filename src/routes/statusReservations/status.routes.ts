import { Router } from 'express';
import { getStatusReser } from '../../controllers/statusReservations/getTypeReservations';

export const statusReserRoutes = (routes: Router) => {

    /**
     * 
     * RUTAS DE LAS RESERVACIONES 
     */

    /**
     * GET  
     */
   
    routes.get('/status', getStatusReser);

}