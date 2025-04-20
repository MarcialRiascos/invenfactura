const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rol = sequelize.define('Rol', {
  id_rol: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  rol: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'roles',
  timestamps: false, // No hay created_at ni updated_at en esta tabla
});

module.exports = Rol;
