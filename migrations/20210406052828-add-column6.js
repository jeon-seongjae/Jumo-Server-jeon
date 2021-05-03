'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        'makgeollis', // name of Target model
        'image', // name of the key we're adding
        {
          type: Sequelize.STRING
        }
      )
      .then(() => {
        queryInterface
          .addColumn(
            'breweries', // name of Target model
            'image', // name of the key we're adding
            {
              type: Sequelize.STRING
            }
          )
      }
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('makgeollis', 'image');
    await queryInterface.removeColumn('breweries', 'image');
  }
};
