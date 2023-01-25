"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENTS = void 0;
var db_1 = __importDefault(require("../database/db"));
var sequelize_1 = require("sequelize");
exports.CLIENTS = db_1.default.define('clients', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    full_name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
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
}, { freezeTableName: true, tableName: 'clients' });
