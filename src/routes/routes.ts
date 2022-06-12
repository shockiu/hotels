import { Router } from 'express';
import { reservationsRoutes } from './reservation/reservation.routes';
import { clientsRoutes } from './clients/clients.routes';
import { invoicesRoutes } from './invoices/invoices.routes';
import { paymentsRoutes } from './payments/payments.routes';
import { roomsRoutes } from './rooms/room.routes';
import { statusReserRoutes } from './statusReservations/status.routes';

const routes = Router();

/**
 * 
 * RESERVATIONS
 * @param routes
 */
reservationsRoutes(routes);

/**
 * 
 * CLIENTS
 * @param routes
 */
clientsRoutes(routes);

/**
 * INVOICES
 * @param routes
 */
invoicesRoutes(routes);


/**
 * PAYMENTS
 * @param routes
 */
paymentsRoutes(routes);

/**
 * ROOMS
 * @param routes
 */
roomsRoutes(routes);

/**
 * STATUS
 * @param routes
 */
statusReserRoutes(routes);


export default routes;