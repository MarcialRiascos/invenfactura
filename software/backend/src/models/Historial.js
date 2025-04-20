const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario'); // Asegúrate de que el modelo Usuario esté correctamente importado
const Accion = require('./Accion'); // Asegúrate de que el modelo Accion esté correctamente importado

// Definir el modelo Historial
const Historial = sequelize.define('Historial', {
  id_historial: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  usuarios_id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  accion: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'historial',
  timestamps: true,  // Si tienes campos de fecha como created_at y updated_at en la tabla
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Definir las relaciones
Historial.belongsTo(Usuario, {
  foreignKey: 'usuarios_id_usuario',
  targetKey: 'id_usuario',
  as: 'usuario',  // Alias para la relación
});

module.exports = Historial;
