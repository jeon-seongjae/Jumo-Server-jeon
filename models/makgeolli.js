'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class makgeolli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      makgeolli.belongsTo(models.brewery, { foreignKey: 'brewery_id' });
    }
  };
  makgeolli.init({
    brewery_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    area: DataTypes.STRING,
    content: DataTypes.INTEGER,
    explain: DataTypes.STRING,
    material: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'makgeolli',
  });
  return makgeolli;
};