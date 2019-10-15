import React from 'react';

const Playlist = props => {
    return (
        <div>
            <h2>{props.playlist.title}</h2>
            <p>{props.playlist.description}</p>
        </div>
    )
};

export default Playlist;
