const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definir el modelo Modulo
const Modulo = sequelize.define('Modulo', {
  id_modulo: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  modulo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'modulos',
  timestamps: false,  // No se habilitan los campos de timestamps
});

module.exports = Modulo;
