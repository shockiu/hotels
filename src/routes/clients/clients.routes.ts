import { Router } from 'express';
import { getClients } from '../../controllers/clients/getListClients';

export const clientsRoutes = (routes: Router) => {

    /**
     * 
     * RUTAS DE LAS RESERVACIONES 
     */

    /**
     * GET  
     */
   
    routes.get('/clients', getClients);

}