'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Score.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter your name',
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Please enter your email address',
        },
        validate: {
          isEmail: {
            args: true,
            msg: 'Please enter a valid email address',
          },
        },
      },
      notifications_score: {
        type: DataTypes.REAL,
        defaultValue: 0,
      },
      infractions_score: {
        type: DataTypes.REAL,
        defaultValue: 0,
      },
      time_left: {
        type: DataTypes.REAL,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Score',
    }
  );
  return Score;
};
