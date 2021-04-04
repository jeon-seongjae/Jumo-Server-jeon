'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        'users', // name of Target model
        'review_id', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          // setting foreign key relationship
          references: {
            model: 'reviews', // name of Source model
            key: 'id',
          },
          // setting when primary key is updated or deleted
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      )
      .then(() =>
        queryInterface.addColumn(
          'users', // name of Target model
          'like_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,

            references: {
              model: 'likes', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        )
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'review_id');
    await queryInterface.removeColumn('users', 'like_id');
  }
};
