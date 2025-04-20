const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario');  // Asegúrate de que el modelo Usuario esté correctamente importado

// Definir el modelo Proveedor
const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_empresa: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  nombre_contacto: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  telefono_dos: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  direccion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  usuarios_id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: 'proveedores',
  timestamps: true,  // Habilitar timestamps
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Definir la relación con el modelo Usuario
Proveedor.belongsTo(Usuario, {
  foreignKey: 'usuarios_id_usuario',
  targetKey: 'id_usuario',
  as: 'usuario',  // Alias para la relación
});

module.exports = Proveedor;
