'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', [
      {
        rol: 'Administrador',  // Rol Administrador
      },
      {
        rol: 'Operador',  // Rol Operador
      },
      {
        rol: 'Supervisor',  // Rol Supervisor
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar los roles si es necesario revertir
    await queryInterface.bulkDelete('roles', null, {});
  },
};