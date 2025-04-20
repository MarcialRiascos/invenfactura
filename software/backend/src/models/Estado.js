const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Estado = sequelize.define('Estado', {
  id_estado: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  estado: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'estados',
  timestamps: false, // Esta tabla no tiene created_at ni updated_at
});

module.exports = Estado;
