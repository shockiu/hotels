import sequelize from '../database/db';
import { DataTypes } from 'sequelize';
import { INVOICES, TYPE_ROOM, STATUS_RESERVATION, CLIENTS, PAYMENT_METHODS } from './index';
export const RESERVATIONS = sequelize.define('reservations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: STATUS_RESERVATION,
            key: 'id' 
    }
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references : {
            model: TYPE_ROOM,
            key: 'id'
        }
    },
    invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: INVOICES,
            key: 'id'
        }
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CLIENTS,
            key: 'id'
        }
    },
    payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PAYMENT_METHODS,
            key: 'id'
        }
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
}, { freezeTableName: true, tableName: 'reservations', modelName: 'reservations' });


RESERVATIONS.belongsTo(INVOICES, { foreignKey: 'invoice_id', targetKey: 'id' });

CLIENTS.hasOne(RESERVATIONS, { foreignKey: 'client_id' });
RESERVATIONS.belongsTo(CLIENTS, { foreignKey:'client_id' });

