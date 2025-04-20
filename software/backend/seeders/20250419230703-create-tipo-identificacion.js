'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipo_identificacion', [
      { tipo_identificacion: 'Cédula de Ciudadanía' },
      { tipo_identificacion: 'Cédula de Extranjería' },
      { tipo_identificacion: 'Pasaporte' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipo_identificacion', {
      tipo_identificacion: ['Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte'],
    }, {});
  }
};
