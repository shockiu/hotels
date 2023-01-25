"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusReserRoutes = void 0;
var getTypeReservations_1 = require("../../controllers/statusReservations/getTypeReservations");
var statusReserRoutes = function (routes) {
    /**
     *
     * RUTAS DE LAS RESERVACIONES
     */
    /**
     * GET
     */
    routes.get('/status', getTypeReservations_1.getStatusReser);
};
exports.statusReserRoutes = statusReserRoutes;
