import React, {useState} from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const PlaylistList = props => {
	const [filterText, setFilterText] = useState('');
	const handleClick = _e => props.setModalOpenState(true, 'Select a playlist to download');
	const handleChange = e => setFilterText(e.target.value);
	const playlistIds = [...props.playlists.ids]
		.filter(playlistId => props.playlists.byId[playlistId].title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
		.sort((a, b) => props.playlists.byId[a].title.localeCompare(props.playlists.byId[b].title))

	return (
		<div>
			<nav className='tile-container'>
				<div className='utilities'>
					<div className='spacer'></div>
					<input className='filter' type='text' placeholder='Filter playlists...' value={filterText} onChange={handleChange}></input>
					<div className='spacer'>
					<div className='addButton' onClick={handleClick}>+ Add Playlist</div>
					</div>
				</div>
				<div className='tiles'>
					{playlistIds.map(playlistId =>
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
