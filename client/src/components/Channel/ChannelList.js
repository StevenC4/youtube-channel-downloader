import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const ChannelList = props => {
	const handleClick = _e => props.setModalOpenState(true, 'Select a channel to download');

	return (
		<div>
			<nav className='channels'>
				<div className='addChannelButton' onClick={handleClick}>+ Add Channel</div>
				<ul>
					{props.channels.ids.map(channelId =>
						<li key={channelId} className='channelInfoBox'>
							<NavLink to={`${props.match.url}/${channelId}`}>
								<div className='channelName'>{props.channels.byId[channelId].name}</div>
								<div className='channelPublished'>{props.channels.byId[channelId].playlistIds.length} playlist{props.channels.byId[channelId].playlistIds.length === 1 ? '' : 's'}</div>
								<div className='channelPublished'>{moment.unix(props.channels.byId[channelId].published).format('LLL')}</div>
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</div>
	);
}

export default ChannelList;
