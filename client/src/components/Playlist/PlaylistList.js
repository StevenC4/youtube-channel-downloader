import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const PlaylistList = props => {
	const handleClick = _e => props.setModalOpenState(true, 'Select a playlist to download');

	return (
		<div>
			<nav className='tile-container'>
				<div className='utilities'>
					<div className='addButton' onClick={handleClick}>+ Add Playlist</div>
				</div>
				<div className='tiles'>
					{props.playlists.ids.map(playlistId =>
						<div key={playlistId} className='tile'>
							<NavLink to={`${props.match.url}/${playlistId}`}>
								<div className='title'>{props.playlists.byId[playlistId].title}</div>
								<div className='channelPublished'>{props.playlists.byId[playlistId].videoIds.length} video{props.playlists.byId[playlistId].videoIds.length === 1 ? '' : 's'}</div>
								<div className='channelPublished'>{moment(props.playlists.byId[playlistId].published).format('LLL')}</div>
							</NavLink>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
}

export default PlaylistList;
