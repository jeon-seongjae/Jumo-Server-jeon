'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        'makgeollis', // name of Target model
        'brewery_id', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          // setting foreign key relationship
          references: {
            model: 'breweries', // name of Source model
            key: 'id',
          },
          // setting when primary key is updated or deleted
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('makgeollis', 'brewery_id');
  }
};
