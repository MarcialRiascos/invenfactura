const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Importar los modelos relacionados
const TipoIdentificacion = require('./TipoIdentificacion');
const Rol = require('./Rol');
const Estado = require('./Estado');

// Definir el modelo Usuario
const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  telefono_dos: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  tipo_identificacion_id_tipo_identificacion: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  numero_identificacion: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  roles_id_rol: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  estados_id_estado: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: 'usuarios',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Definir las relaciones
Usuario.belongsTo(TipoIdentificacion, {
  foreignKey: 'tipo_identificacion_id_tipo_identificacion',
  targetKey: 'id_tipo_identificacion',
  as: 'tipoIdentificacion',
});

Usuario.belongsTo(Rol, {
  foreignKey: 'roles_id_rol',
  targetKey: 'id_rol',
  as: 'rol',
});

Usuario.belongsTo(Estado, {
  foreignKey: 'estados_id_estado',
  targetKey: 'id_estado',
  as: 'estado',
});

module.exports = Usuario;
