const router = require('express').Router();
const db = require('../../config');

// Read all movies
router.get('/', (req, res) => {
    console.log('movie route hit');
    const sql = `SELECT id, movie_name AS title FROM movies`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

module.exports = router;