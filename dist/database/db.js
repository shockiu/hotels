"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
require('dotenv').config();
var DATABASE_URL = process.env.DATABASE_URL || '';
var db = new sequelize_1.Sequelize(DATABASE_URL, {
    dialect: 'mysql',
    logging: false,
    port: 3306
});
exports.default = db;
