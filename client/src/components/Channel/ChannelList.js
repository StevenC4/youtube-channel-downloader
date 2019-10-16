import React, {useState} from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const ChannelList = props => {
	const [filterText, setFilterText] = useState('');
	const handleClick = _e => props.setModalOpenState(true, 'Select a channel to download');
	const handleChange = e => setFilterText(e.target.value);
	const channelIds = [...props.channels.ids]
		.filter(channelId => props.channels.byId[channelId].name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
		.sort((a, b) => props.channels.byId[a].name.localeCompare(props.channels.byId[b].name))
	return (
		<div>
			<nav className='tile-container'>
				<div className='utilities'>
					<div className='spacer'></div>
					<input className='filter' type='text' placeholder='Filter channels...' value={filterText} onChange={handleChange}></input>
					<div className='spacer'>
						<div className='addButton' onClick={handleClick}>+ Add Channel</div>
					</div>
				</div>
				<div className='tiles'> 
					{channelIds.map(channelId =>
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
