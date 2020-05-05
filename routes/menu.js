const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const userID = req.session.user_id;
    let query = `SELECT * FROM dishes`;
    db.query(query)
      .then(data => {
        const menuItems = data.rows;
        res.render('menu', { menuItems, userID });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
