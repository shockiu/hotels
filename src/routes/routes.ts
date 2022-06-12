import { Router } from 'express';
import { reservationsRoutes } from './reservation/reservation.routes';

const routes = Router();

/**
 * 
 * RESERVATIONS
 * @param routes
 */
reservationsRoutes(routes);




export default routes;