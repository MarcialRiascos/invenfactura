const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Producto = require('./Producto');  // Asegúrate de importar el modelo Producto
const TipoMovimiento = require('./TipoMovimiento');  // Asegúrate de importar el modelo TipoMovimiento
const Usuario = require('./Usuario');  // Asegúrate de importar el modelo Usuario

// Definir el modelo Movimiento
const Movimiento = sequelize.define('Movimiento', {
  id_movimiento: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_movimientos_id_tipo_movimiento: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  productos_id_producto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  lote: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  cantidad_movimiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  motivo_movimiento: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  usuarios_id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  fecha_vencimiento: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  usuarios_id_usuario1: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: 'movimientos',
  timestamps: true,  // Habilitar timestamps
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Definir las relaciones con los modelos Producto, TipoMovimiento y Usuario
Movimiento.belongsTo(Producto, {
  foreignKey: 'productos_id_producto',
  targetKey: 'id_producto',
  as: 'producto',  // Alias para la relación
});

Movimiento.belongsTo(TipoMovimiento, {
  foreignKey: 'tipo_movimientos_id_tipo_movimiento',
  targetKey: 'id_tipo_movimiento',
  as: 'tipoMovimiento',  // Alias para la relación
});

Movimiento.belongsTo(Usuario, {
  foreignKey: 'usuarios_id_usuario',
  targetKey: 'id_usuario',
  as: 'usuario',  // Alias para la relación
});

Movimiento.belongsTo(Usuario, {
  foreignKey: 'usuarios_id_usuario1',
  targetKey: 'id_usuario',
  as: 'usuario1',  // Alias para la relación
});

module.exports = Movimiento;
