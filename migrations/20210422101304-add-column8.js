'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
      .addColumn(
        'reviews', // name of Target model
        'username', // name of the key we're adding
        {
          type: Sequelize.STRING
        }
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('reviews', 'username');
  }
};
