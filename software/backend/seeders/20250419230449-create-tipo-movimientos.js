'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipo_movimientos', [
      { tipo_movimiento: 'Entrada' },
      { tipo_movimiento: 'Salida' },
      { tipo_movimiento: 'Ajuste' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipo_movimientos', {
      tipo_movimiento: ['Entrada', 'Salida', 'Ajuste'],
    }, {});
  }
};