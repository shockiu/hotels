import sequelize from '../database/db';
import { DataTypes } from 'sequelize';

import { RESERVATIONS } from './reservations';

export const CLIENTS = sequelize.define('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    full_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
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
},  { freezeTableName: true, tableName: 'clients' });

CLIENTS.hasMany(RESERVATIONS, { foreignKey: 'client_id' });
