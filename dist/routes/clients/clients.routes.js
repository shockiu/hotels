"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsRoutes = void 0;
var getListClients_1 = require("../../controllers/clients/getListClients");
var clientsRoutes = function (routes) {
    /**
     *
     * RUTAS DE LAS RESERVACIONES
     */
    /**
     * GET
     */
    routes.get('/clients', getListClients_1.getClients);
};
exports.clientsRoutes = clientsRoutes;
