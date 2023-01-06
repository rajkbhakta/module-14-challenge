const router = require('express').Router();
const movieRoutes = require('./movies');

router.use('/movies', movieRoutes);
//TODO: add reviews router

module.exports=router;