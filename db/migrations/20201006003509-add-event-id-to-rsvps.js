// migration

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Rsvps', 'DonationId', Sequelize.INTEGER).then(() => {
      return queryInterface.addConstraint('Rsvps', ['DonationId'], {
        type: 'foreign key',
        name: 'event_rsvps',
        references: { //Required field
          table: 'donations',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Rsvps', 'DonationId');
  }
  };
