
import { Router } from 'express';
import { getReservations } from '../../controllers/reservations/getReservations';
import { createReservation } from '../../controllers/reservations/createReservation';
// import {  } from '../../controllers/reservations/modifyReservation';

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
    routes.post('/reservations', createReservation);
    /**
     * 
     * PUT
     */

    /**
     * 
     * DELETE   
     */

}