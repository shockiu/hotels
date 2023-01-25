"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoicesRoutes = void 0;
var getInvoices_1 = require("../../controllers/invoices/getInvoices");
var invoicesRoutes = function (routes) {
    /**
     *
     * RUTAS DE LAS RESERVACIONES
     */
    /**
     * GET
     */
    routes.get('/invoices', getInvoices_1.getInvoices);
};
exports.invoicesRoutes = invoicesRoutes;
