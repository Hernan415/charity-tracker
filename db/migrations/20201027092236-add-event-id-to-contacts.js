// migration

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'Contacts',
      'DonationId',
      {
        type: Sequelize.INTEGER,
        references: { //Required field
          model: 'Donations',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'DonationId');
  }
};
