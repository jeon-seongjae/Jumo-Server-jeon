'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.review, { foreignKey: 'review_id' });
      user.belongsTo(models.like, { foreignKey: 'like_id' });
    }
  };
  user.init({
    review_id: DataTypes.INTEGER,
    like_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};