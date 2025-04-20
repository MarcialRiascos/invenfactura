'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('modulos', [
      { modulo: 'categorias' },
      { modulo: 'estados' },
      { modulo: 'historial' },
      { modulo: 'modulos' },
      { modulo: 'movimientos' },
      { modulo: 'permisos' },
      { modulo: 'productos' },
      { modulo: 'proveedores' },
      { modulo: 'roles' },
      { modulo: 'roles_has_permisos' },
      { modulo: 'tipo_identificacion' },
      { modulo: 'tipo_movimientos' },
      { modulo: 'usuarios' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modulos', null, {});
  }
};