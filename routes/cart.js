const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.session.user_id;
    let query = `SELECT * FROM order_lines`;
    db.query(query)
      .then(data => {
        const orderLines = data.rows;
        res.render('cart', { orderLines, userID });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    res.render('cart', { userID });
  });
  return router;
};
