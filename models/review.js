'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.makgeolli, { foreignKey: 'makgeolli_id' });
      review.belongsTo(models.user, { foreignKey: 'user_id' });
    }
  };
  review.init({
    makgeolli_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    star: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};