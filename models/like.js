'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      like.belongsTo(models.makgeolli, { foreignKey: 'makgeolli_id' });
      like.belongsTo(models.user, { foreignKey: 'user_id' });
    }
  };
  like.init({
    makgeolli_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};