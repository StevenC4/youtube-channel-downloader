const youtubePipelines = require('../../../pipelines/youtube');
const router = require('express').Router();

router.get('/channel/:channelId', youtubePipelines.getChannel);

module.exports = router;
