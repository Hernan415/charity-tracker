// controllers/Contacts.js

module.exports = (app, models) => {
  // NEW
  app.get('/donations/:donationId/contacts/new', (req, res) => {
    models.Donation.findByPk(req.params.donationId).then(donation => {
      res.render('contacts-new', { donation: donation });
    });
  });

  // CREATE
  app.post('/donations/:donationsId/contacts', (req, res) => {
    req.body.DonationId = req.params.DonationId;
    models.Contact.create(req.body).then(contact => {
      res.redirect(`/donations/${req.params.donationId}`);
    }).catch((err) => {
        console.log(err)
    });
  });

  // DESTROY
  // DELETE
  app.delete('/donations/:donationId/contacts/:id', (req, res) => {
      models.Contact.findByPk(req.params.id).then(contact => {
          contact.destroy();
          res.redirect(`/donations/${req.params.donationId}`);
      }).catch((err) => {
          console.log(err);
      });
  });
}
