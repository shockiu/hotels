"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsRoutes = void 0;
var getTypePayments_1 = require("../../controllers/payments/getTypePayments");
var paymentsRoutes = function (routes) {
    /**
     *
     * RUTAS DE LAS RESERVACIONES
     */
    /**
     * GET
     */
    routes.get('/payments', getTypePayments_1.getPayments);
};
exports.paymentsRoutes = paymentsRoutes;
