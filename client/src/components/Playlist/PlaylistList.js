import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const PlaylistList = props => {
	const handleClick = _e => props.setModalOpenState(true, 'Select a playlist to download');

	return (
		<div>
			<nav className='channels'>
				<div className='addChannelButton' onClick={handleClick}>+ Add Playlist</div>
				<ul>
					{props.playlists.ids.map(playlistId =>
						<li key={playlistId} className='channelInfoBox'>
							<NavLink to={`${props.match.url}/${playlistId}`}>
								<div className='channelName'>{props.playlists.byId[playlistId].title}</div>
								<div className='channelPublished'>{props.playlists.byId[playlistId].videoIds.length} video{props.playlists.byId[playlistId].videoIds.length === 1 ? '' : 's'}</div>
								<div className='channelPublished'>{moment(props.playlists.byId[playlistId].published).format('LLL')}</div>
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</div>
	);
}

export default PlaylistList;
