const express = require('express');
const router  = express.Router();
const { smstoClient } = require('../twilio/smstoClient')


module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.session.user_id;
    res.render('restaurantView', { userID });
  });

  router.post('/smstoClient', (req,res) => {
    setTimeout(() =>smstoClient(), 10000)
  });
  return router;
};
