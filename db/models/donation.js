'use strict';

const sequelize = require('sequelize');

// models/todo.js
module.exports = (sequelize, DataTypes) => {
  const Donation = sequelize.define('Donation', {
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  }, {});

  Donation.associate = function(models) {
    Donation.hasMany(models.Contact);
  };

  return Donation;
};
