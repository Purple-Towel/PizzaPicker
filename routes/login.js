const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    let query = `SELECT id, name FROM users
    WHERE id = 1`;
    db.query(query)
      .then(data => {
        const user = data.rows[0];
        req.session.user_id = user.id;
        res.redirect('/');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}
