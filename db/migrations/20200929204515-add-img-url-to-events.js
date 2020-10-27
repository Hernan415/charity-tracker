'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('events', 'imgUrl', { type: Sequelize.STRING });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('events', 'imgUrl');
  }
};
