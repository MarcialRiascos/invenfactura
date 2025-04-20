'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtener los módulos de la tabla 'modulos'
    const modulos = await queryInterface.sequelize.query('SELECT * FROM modulos', { type: Sequelize.QueryTypes.SELECT });

    // Crear los permisos CRUD para cada módulo
    const permisos = modulos.flatMap(modulo => [
      { permiso: `crear_${modulo.modulo.toLowerCase()}`, modulos_id_modulo: modulo.id_modulo },
      { permiso: `ver_${modulo.modulo.toLowerCase()}`, modulos_id_modulo: modulo.id_modulo },
      { permiso: `actualizar_${modulo.modulo.toLowerCase()}`, modulos_id_modulo: modulo.id_modulo },
      { permiso: `eliminar_${modulo.modulo.toLowerCase()}`, modulos_id_modulo: modulo.id_modulo }
    ]);

    // Insertar los permisos en la tabla 'permisos'
    await queryInterface.bulkInsert('permisos', permisos, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar los permisos en caso de rollback
    await queryInterface.bulkDelete('permisos', null, {});
  }
};
