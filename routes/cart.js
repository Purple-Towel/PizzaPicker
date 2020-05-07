const express = require('express');
const router  = express.Router();
const { smstoClient } = require('../twilio/smstoClient')
const { smstoRestaurant } = require('../twilio/smstoRestaurant')


module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.session.user_id;
    res.render('cart', { userID });
  });

  router.post('/smstoRestaurant', (req, res) => {
    smstoRestaurant()
  });

  router.post('/smstoClient', (req,res) => {
    setTimeout(() =>smstoClient(), 10000)
    // const userID = req.session.user_id;
    // res.redirect('index', { userID });
  });

  return router;
};


