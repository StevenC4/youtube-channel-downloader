const config = require('../../config');
const {google} = require('googleapis');
const youtube = google.youtube({
	version: 'v3',
	auth: config.get('youtube.dataApi.v3.token')
});

const defaultSearchParams = {
	part: 'snippet,id',
	type: 'video',
	maxResults: 20
};

module.exports.setChannelParams = (req, _res, next) => {
	req.searchParams = {channelId: req.params.channelId};
	next();
};

module.exports.getVideoList = async (req, _res, next) => {
	const response = await youtube.search.list({
		...defaultSearchParams,
		...req.searchParams
	});
	console.log(response.data.items);
	next();
}

module.exports.return = (req, res, _next) => {
	res.json(req.returnValue);
}
