const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definir el modelo Categoria
const Categoria = sequelize.define('Categoria', {
  id_categoria: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  categoria: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'categorias',
  timestamps: false,  // Deshabilitar timestamps
});

module.exports = Categoria;
