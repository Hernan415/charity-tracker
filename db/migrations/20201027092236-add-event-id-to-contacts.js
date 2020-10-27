// migration

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Contacts', 'DonationId', Sequelize.INTEGER).then(() => {
      return queryInterface.addConstraint('Contacts', ['DonationId'], {
        type: 'foreign key',
        name: 'donation_contact',
        references: { //Required field
          table: 'Donations',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'DonationId');
  }
};
