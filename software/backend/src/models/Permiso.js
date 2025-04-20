const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Modulo = require('./Modulo');  // Asegúrate de importar el modelo Modulo

// Definir el modelo Permiso
const Permiso = sequelize.define('Permiso', {
  id_permiso: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  permiso: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  modulos_id_modulo: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: 'permisos',
  timestamps: false,  // No se habilitan los campos de timestamps
});

// Definir la relación con el modelo Modulo
Permiso.belongsTo(Modulo, {
  foreignKey: 'modulos_id_modulo',
  targetKey: 'id_modulo',
  as: 'modulo',  // Alias para la relación
});

module.exports = Permiso;
