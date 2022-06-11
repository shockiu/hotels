import sequelize from '../database/db';
import { DataTypes } from 'sequelize';

import { INVOICES } from './invoices';

export const RESERVATIONS = sequelize.define('reservations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    day_stay: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, { freezeTableName: true, tableName: 'reservations' });


RESERVATIONS.belongsTo(INVOICES, { foreignKey: 'invoice_id', targetKey: 'id' });