const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definir el modelo TipoMovimiento
const TipoMovimiento = sequelize.define('TipoMovimiento', {
  id_tipo_movimiento: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_movimiento: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'tipo_movimientos',
  timestamps: false,  // No se habilitan timestamps
});

module.exports = TipoMovimiento;
