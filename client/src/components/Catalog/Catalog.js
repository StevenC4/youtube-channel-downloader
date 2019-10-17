import React, {useState} from 'react';

const Catalog = props => {
    const [filterText, setFilterText] = useState('');
    const channelIds = [...props.channels.ids]
		.filter(channelId => props.channels.byId[channelId].name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
        .sort((a, b) => props.channels.byId[a].name.localeCompare(props.channels.byId[b].name))
    const channels = {...props.channels.byId};
    Object.keys(channels).forEach(channelId => {
        channels[channelId].playlistIds = channels[channelId].playlistIds.sort((a, b) => props.playlists.byId[a].title.localeCompare(props.playlists.byId[b].title));
    });
    const playlists = {...props.playlists.byId};
    Object.keys(playlists).forEach(playlistId => {
        playlists[playlistId].videoIds = playlists[playlistId].videoIds.sort((a, b) => props.videos.byId[a].name.localeCompare(props.videos.byId[a].name));
    });

    return (
        <div className='catalog'>
            <div className='top-bar'>
                <h3>Top bar</h3>
            </div>
            <div className='catalog-list'>
                {channelIds.map(channelId => 
                    <div className='channel' key={channelId}>
                        <h2>{channels[channelId].name}</h2>
                        <div className='channel-playlist-list'>
                            {channels[channelId].playlistIds.map(playlistId =>
                                <div className='playlist' key={playlistId}>
                                    <h3>{playlists[playlistId].title}</h3>
                                    <div>
                                        {playlists[playlistId].videoIds.map(videoId =>
                                            <div className='playlist-video-list' key={videoId}>
                                                <p>{props.videos.byId[videoId].name}</p>
                                            </div>    
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;
