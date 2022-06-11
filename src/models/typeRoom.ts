import sequelize from '../database/db';
import { DataTypes } from 'sequelize';

import { RESERVATIONS } from './reservations';

export const TYPE_ROOM = sequelize.define('type_room', {
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
}, { freezeTableName: true, tableName: 'type_room' });

TYPE_ROOM.hasMany(RESERVATIONS, { foreignKey: 'room_id' });