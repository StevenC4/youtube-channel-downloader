const router = require('express').Router();
const youtubeRoutes = require('./youtube');

router.use('/youtube', youtubeRoutes);

module.exports = router;