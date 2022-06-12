import { Router } from 'express';
import { getInvoices } from '../../controllers/invoices/getInvoices';

export const invoicesRoutes = (routes: Router) => {

    /**
     * 
     * RUTAS DE LAS RESERVACIONES 
     */

    /**
     * GET  
     */
   
    routes.get('/invoices', getInvoices);

}