"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESERVATIONS = void 0;
var db_1 = __importDefault(require("../database/db"));
var sequelize_1 = require("sequelize");
var index_1 = require("./index");
exports.RESERVATIONS = db_1.default.define('reservations', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: index_1.STATUS_RESERVATION,
            key: 'id'
        }
    },
    room_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: index_1.TYPE_ROOM,
            key: 'id'
        }
    },
    invoice_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: index_1.INVOICES,
            key: 'id'
        }
    },
    client_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: index_1.CLIENTS,
            key: 'id'
        }
    },
    payment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: index_1.PAYMENT_METHODS,
            key: 'id'
        }
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    day_stay: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, { freezeTableName: true, tableName: 'reservations', modelName: 'reservations' });
exports.RESERVATIONS.belongsTo(index_1.INVOICES, { foreignKey: 'invoice_id', targetKey: 'id' });
index_1.CLIENTS.hasOne(exports.RESERVATIONS, { foreignKey: 'client_id' });
exports.RESERVATIONS.belongsTo(index_1.CLIENTS, { foreignKey: 'client_id' });
