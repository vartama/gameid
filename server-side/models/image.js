'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Product, { foreignKey: 'productId' })
      // define association here
    }
  }
  Image.init({
    productId: DataTypes.INTEGER,
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Image link is required' },
        notEmpty: { msg: 'Image link is required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};