import sequelize from '../database/db';
import { DataTypes } from 'sequelize';
import { RESERVATIONS } from './reservations';

export const PAYMENT_METHODS = sequelize.define('payment_methods', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type:{
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
}, { freezeTableName: true, tableName: 'payment_methods' });

PAYMENT_METHODS.hasMany(RESERVATIONS, { foreignKey: 'payment_id' });