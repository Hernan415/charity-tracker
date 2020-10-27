// controllers/rsvps.js

module.exports = (app, models) => {
  // NEW
  app.get('/donations/:donationId/rsvps/new', (req, res) => {
    models.Donation.findByPk(req.params.donationId).then(donation => {
      res.render('rsvps-new', { donation: donation });
    });
  });

  // CREATE
  app.post('/donations/:donationsId/rsvps', (req, res) => {
    req.body.DonationId = req.params.DonationId;
    models.Rsvp.create(req.body).then(rsvp => {
      res.redirect(`/donations/${req.params.donationId}`);
    }).catch((err) => {
        console.log(err)
    });
  });

  // DESTROY
  // DELETE
  app.delete('/donations/:donationId/rsvps/:id', (req, res) => {
      models.Rsvp.findByPk(req.params.id).then(rsvp => {
          rsvp.destroy();
          res.redirect(`/donations/${req.params.donationId}`);
      }).catch((err) => {
          console.log(err);
      });
  });
}
