const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Proveedor = require('./Proveedor');  // Asegúrate de importar el modelo Proveedor
const Categoria = require('./Categoria');  // Asegúrate de importar el modelo Categoria
const Usuario = require('./Usuario');  // Asegúrate de importar el modelo Usuario

// Definir el modelo Producto
const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  categorias_id_categoria: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad_actual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad_minima: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ubicacion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  proveedores_id_proveedor: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  usuarios_id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: 'productos',
  timestamps: true,  // Habilitar timestamps
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Definir las relaciones con los modelos Proveedor, Categoria y Usuario
Producto.belongsTo(Proveedor, {
  foreignKey: 'proveedores_id_proveedor',
  targetKey: 'id_proveedor',
  as: 'proveedor',  // Alias para la relación
});

Producto.belongsTo(Categoria, {
  foreignKey: 'categorias_id_categoria',
  targetKey: 'id_categoria',
  as: 'categoria',  // Alias para la relación
});

Producto.belongsTo(Usuario, {
  foreignKey: 'usuarios_id_usuario',
  targetKey: 'id_usuario',
  as: 'usuario',  // Alias para la relación
});

module.exports = Producto;
