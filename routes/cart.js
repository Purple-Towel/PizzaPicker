const express = require('express');
const router  = express.Router();
const { smstoRestaurant } = require('../twilio/smstoRestaurant')


module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.session.user_id;
    res.render('cart', { userID });
  });

  router.post("/", (req, res) => {
    const totalOrder = req.body.orderInMemory;

    for (let line of totalOrder) {
      db.query(`
        INSERT INTO order_lines (order_id, dish_id, quantity)
        VALUES (1, $1, $2, $3, $4);
      `, [line[0].ID, line[1]])
      .then(res => console.log(res.rows));
    }
  });

  return router;
};


