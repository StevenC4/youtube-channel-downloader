import React from 'react';
import PlaylistViewer from 'components/Playlist/PlaylistViewer';

const ChannelViewer = props => {
    return (
        <div>
            <h2>{props.channel.name}</h2>
            <h3>Playlists:</h3>
            {props.channel.playlistIds.map(playlistId =>
                <PlaylistViewer
                    key={playlistId}
                    playlist={props.playlists.byId[playlistId]}
                />)
            }
        </div>
    );
}

export default ChannelViewer;
