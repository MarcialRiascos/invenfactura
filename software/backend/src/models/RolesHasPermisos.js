const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rol = require('./Rol');  // Asegúrate de que el modelo Rol esté correctamente importado
const Permiso = require('./Permiso');  // Asegúrate de que el modelo Permiso esté correctamente importado

// Definir el modelo RolesHasPermisos
const RolesHasPermisos = sequelize.define('RolesHasPermisos', {
  roles_id_rol: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  permisos_id_permiso: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
}, {
  tableName: 'roles_has_permisos',
  timestamps: false,  // No se habilitan los campos de timestamps
});

// Establecer la relación con el modelo Rol
RolesHasPermisos.belongsTo(Rol, {
  foreignKey: 'roles_id_rol',
  targetKey: 'id_rol',
  as: 'rol',  // Alias para la relación
});

// Establecer la relación con el modelo Permiso
RolesHasPermisos.belongsTo(Permiso, {
  foreignKey: 'permisos_id_permiso',
  targetKey: 'id_permiso',
  as: 'permiso',  // Alias para la relación
});

module.exports = RolesHasPermisos;
