'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estados', [
      {
        estado: 'Activo',
      },
      {
        estado: 'Inactivo',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estados', {
      estado: ['Activo', 'Inactivo']
    }, {});
  }
};