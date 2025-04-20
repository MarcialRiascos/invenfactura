const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TipoIdentificacion = sequelize.define('TipoIdentificacion', {
  id_tipo_identificacion: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_identificacion: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'tipo_identificacion',
  timestamps: false, // No hay created_at ni updated_at en esta tabla
});

module.exports = TipoIdentificacion;
