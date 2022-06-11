
import { Router } from 'express';
import { getReservations } from '../../controllers/reservations/getReservations';

export const reservationsRoutes = (routes: Router) => {

    /**
     * 
     * RUTAS DE OBTENCION DE PARTIDOS 
     */

    /**
     * GET  
     */
   
    routes.get('/reservations', getReservations);

    /**
     * 
     * POST
     */

    /**
     * 
     * PUT
     */

    /**
     * 
     * DELETE   
     */

}