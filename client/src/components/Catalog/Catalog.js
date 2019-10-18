import React, {useState, useEffect} from 'react';

const Catalog = props => {
    const [filterText, setFilterText] = useState('');
    const [channelIds, setChannelIds] = useState([...props.channels.ids]
		.filter(channelId => props.channels.byId[channelId].name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
        .sort((a, b) => props.channels.byId[a].name.localeCompare(props.channels.byId[b].name)));
    const [channels, setChannels] = useState(channelIds.reduce((accumulator, channelId) => ({
        ...accumulator,
        [channelId]: {
            ...props.channels.byId[channelId],
            playlistIds: props.channels.byId[channelId].playlistIds.sort((a, b) => props.playlists.byId[a].title.localeCompare(props.playlists.byId[b].title))
        }
    }), {}));
    const [playlists, setPlaylists] = useState(props.playlists.ids.reduce((accumulator, playlistId) => ({
        ...accumulator,
        [playlistId]: {
            ...props.playlists.byId[playlistId],
            videoIds: props.playlists.byId[playlistId].videoIds.sort((a, b) => props.videos.byId[a].name.localeCompare(props.videos.byId[b].name))
        }
    }), {}));
    const toggleShowPlaylistsByChannelId = channelId => setChannels({
        ...channels,
        [channelId]: {
            ...channels[channelId],
            showPlaylists: !channels[channelId].showPlaylists
        }
    });
    const toggleShowVideosByPlaylistId = playlistId => setPlaylists({
        ...playlists,
        [playlistId]: {
            ...playlists[playlistId],
            showVideos: !playlists[playlistId].showVideos
        }
    });

    return (
        <div className='catalog'>
            <div className='top-bar'>
                <h3>Top bar</h3>
            </div>
            <div className='catalog-list'>
                {channelIds.map(channelId => 
                    <div className='channel' key={channelId}>
                        <div className='row' onClick={() => toggleShowPlaylistsByChannelId(channelId)}>{channels[channelId].name}</div>
                        {channels[channelId].showPlaylists &&
                            <div className='channel-playlist-list'>
                                {channels[channelId].playlistIds.map(playlistId =>
                                    <div className='playlist' key={playlistId}>
                                        <div className='row' onClick={() => toggleShowVideosByPlaylistId(playlistId)}>{playlists[playlistId].title}</div>
                                        {playlists[playlistId].showVideos &&
                                            <div>
                                                {playlists[playlistId].videoIds.map(videoId =>
                                                    <div className='playlist-video-list' key={videoId}>
                                                        <div className='row'>{props.videos.byId[videoId].name}</div>
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;
