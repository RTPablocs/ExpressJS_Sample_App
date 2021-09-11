const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ut.init({
    uid: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    username: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'ut',
  });
  return ut;
};