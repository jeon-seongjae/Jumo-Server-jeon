'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        'likes', // name of Target model
        'makgeolli_id', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          // setting foreign key relationship
          references: {
            model: 'makgeollis', // name of Source model
            key: 'id',
          },
          // setting when primary key is updated or deleted
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      )
      .then(() =>
        queryInterface.addColumn(
          'likes', // name of Target model
          'user_id', // name of the key we're adding
          {
            type: Sequelize.INTEGER,

            references: {
              model: 'users', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        )
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('likes', 'makgeolli_id');
    await queryInterface.removeColumn('likes', 'user_id');
  }
};
