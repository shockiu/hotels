"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reservation_routes_1 = require("./reservation/reservation.routes");
var clients_routes_1 = require("./clients/clients.routes");
var invoices_routes_1 = require("./invoices/invoices.routes");
var payments_routes_1 = require("./payments/payments.routes");
var room_routes_1 = require("./rooms/room.routes");
var status_routes_1 = require("./statusReservations/status.routes");
var routes = (0, express_1.Router)();
/**
 *
 * RESERVATIONS
 * @param routes
 */
(0, reservation_routes_1.reservationsRoutes)(routes);
/**
 *
 * CLIENTS
 * @param routes
 */
(0, clients_routes_1.clientsRoutes)(routes);
/**
 * INVOICES
 * @param routes
 */
(0, invoices_routes_1.invoicesRoutes)(routes);
/**
 * PAYMENTS
 * @param routes
 */
(0, payments_routes_1.paymentsRoutes)(routes);
/**
 * ROOMS
 * @param routes
 */
(0, room_routes_1.roomsRoutes)(routes);
/**
 * STATUS
 * @param routes
 */
(0, status_routes_1.statusReserRoutes)(routes);
exports.default = routes;
