import sequelize from '../database/db';
import { DataTypes } from 'sequelize';

import { RESERVATIONS } from './reservations';

export const STATUS_RESERVATION = sequelize.define('status_reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, { freezeTableName: true, tableName: 'status_reservation' });

STATUS_RESERVATION.hasMany(RESERVATIONS, { foreignKey: 'status' });