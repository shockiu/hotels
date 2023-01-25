"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationsRoutes = void 0;
var getReservations_1 = require("../../controllers/reservations/getReservations");
var createReservation_1 = require("../../controllers/reservations/createReservation");
var modifyReservation_1 = require("../../controllers/reservations/modifyReservation");
var deleteReservation_1 = require("../../controllers/reservations/deleteReservation");
var reservationsRoutes = function (routes) {
    /**
     *
     * RUTAS DE LAS RESERVACIONES
     */
    /**
     * GET
     */
    routes.get('/reservations', getReservations_1.getReservations);
    /**
     *
     * POST
     */
    routes.post('/reservations', createReservation_1.createReservation);
    /**
     *
     * PUT
     */
    routes.put('/reservations/:id', modifyReservation_1.modifyReservation);
    /**
     *
     * DELETE
     */
    routes.delete('/reservations/:id', deleteReservation_1.deleteReservation);
};
exports.reservationsRoutes = reservationsRoutes;
