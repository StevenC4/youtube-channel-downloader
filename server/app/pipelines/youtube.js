const youtubeMiddlewares = require('../middlewares/youtube');

module.exports.getChannel = [
	youtubeMiddlewares.setChannelParams,
	youtubeMiddlewares.getVideoList,
	youtubeMiddlewares.return
];
