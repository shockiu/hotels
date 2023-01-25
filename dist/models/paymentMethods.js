"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_METHODS = void 0;
var db_1 = __importDefault(require("../database/db"));
var sequelize_1 = require("sequelize");
var reservations_1 = require("./reservations");
exports.PAYMENT_METHODS = db_1.default.define('payment_methods', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, { freezeTableName: true, tableName: 'payment_methods' });
exports.PAYMENT_METHODS.hasMany(reservations_1.RESERVATIONS, { foreignKey: 'id' });
reservations_1.RESERVATIONS.belongsTo(exports.PAYMENT_METHODS, { foreignKey: 'payment_id' });
