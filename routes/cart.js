const express = require('express');
const router  = express.Router();
const { smstoRestaurant } = require('../twilio/smstoRestaurant')


module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.session.user_id;
    res.render('cart', { userID });
  });

  router.post('/smstoRestaurant', (req, res) => {
    smstoRestaurant()
  });

  return router;
};


