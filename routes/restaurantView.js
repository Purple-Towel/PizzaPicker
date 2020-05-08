const express = require('express');
const router  = express.Router();
const { smstoClient, smstoclientInitial } = require('../twilio/smstoClient');


module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.session.user_id;
    res.render('restaurantView', { userID });
  });


  router.post('/smstoClient', (req,res) => {
    setTimeout(() =>smstoClient(), (req.body.time) * 1000);
    smstoclientInitial(req.body.time);
  });
  return router;
};

//time delay input is in seconds
//*60000 for minutes
