const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    req.session.user_id = '1';
    console.log('HEY CONSOLE')
  });
  return router;
}
