import { Router } from 'express';
import { getPayments } from '../../controllers/payments/getTypePayments';

export const paymentsRoutes = (routes: Router) => {

    /**
     * 
     * RUTAS DE LAS RESERVACIONES 
     */

    /**
     * GET  
     */
   
    routes.get('/payments', getPayments);

}