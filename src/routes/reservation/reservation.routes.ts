
import { Router } from 'express';
import { getReservations } from '../../controllers/reservations/getReservations';
import { createReservation } from '../../controllers/reservations/createReservation';
import { modifyReservation } from '../../controllers/reservations/modifyReservation';
import { deleteReservation } from '../../controllers/reservations/deleteReservation';

export const reservationsRoutes = (routes: Router) => {

    /**
     * 
     * RUTAS DE LAS RESERVACIONES 
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
    routes.put('/reservations/:id', modifyReservation);

    /**
     * 
     * DELETE   
     */
    routes.delete('/reservations/:id', deleteReservation);

}