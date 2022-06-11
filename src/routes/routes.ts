import { Router } from 'express';
import { reservationsRoutes } from './hotel/hotel.routes';

const routes = Router();

/**
 * 
 * RESERVATIONS
 * @param routes
 */
reservationsRoutes(routes);




export default routes;