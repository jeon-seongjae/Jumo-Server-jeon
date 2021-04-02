'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brewery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      brewery.belongsTo(models.makgeolli, { foreignKey: 'makgeolli_id' });
    }
  };
  brewery.init({
    makgeolli_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.INTEGER,
    kinds: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brewery',
  });
  return brewery;
};