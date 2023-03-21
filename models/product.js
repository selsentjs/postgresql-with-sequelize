'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
     type: DataTypes.STRING,
     allowNull:false
    },
    quantity:{
      type: DataTypes.REAL,
      allowNull: false
    }, 
    department: {
      type: DataTypes.STRING,
      allowNull:false
    },
    createdAt: {
      
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      
      type: DataTypes.DATE,
      allowNull: false
    }
   
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
  });
  return Product;
};