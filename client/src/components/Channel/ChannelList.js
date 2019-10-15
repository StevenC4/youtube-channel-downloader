import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const ChannelList = props => {
	const handleClick = _e => props.setModalOpenState(true, 'Select a channel to download');

	// TODO: Sort channels by alphabetical order
	return (
		<div>
			<nav className='tile-container'>
				<div className='utilities'>
					<label>
						Filter:
						<input className='filter' type='text'></input>
					</label>
					<div className='addButton' onClick={handleClick}>+ Add Channel</div>
				</div>
				<div className='tiles'> 
					{props.channels.ids.map(channelId =>
						<div key={channelId} className='tile'>
							<NavLink to={`${props.match.url}/${channelId}`}>
								<div className='title'>{props.channels.byId[channelId].name}</div>
								<div className='channelPublished'>{props.channels.byId[channelId].playlistIds.length} playlist{props.channels.byId[channelId].playlistIds.length === 1 ? '' : 's'}</div>
								<div className='channelPublished'>{moment.unix(props.channels.byId[channelId].published).format('LLL')}</div>
							</NavLink>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
}

export default ChannelList;
