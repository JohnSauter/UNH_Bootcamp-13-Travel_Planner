const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Traveller = require('./Traveller');
const Location = require('./Location');

class Trips extends Model { }

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL(65,2),
      allowNull: true
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Traveller,
        key: 'id'
      },
      allowNull: false,
      unique: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Location,
        key: 'id'
      },
      allowNull: false,
      unique: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);

module.exports = Trips;
