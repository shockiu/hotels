"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsRoutes = void 0;
var getTypeRooms_1 = require("../../controllers/rooms/getTypeRooms");
var roomsRoutes = function (routes) {
    /**
     *
     * RUTAS DE LAS RESERVACIONES
     */
    /**
     * GET
     */
    routes.get('/rooms', getTypeRooms_1.getRooms);
};
exports.roomsRoutes = roomsRoutes;
