import React, {useState} from 'react';

const ChannelDownloadSelector = props => {
    // TODO: when the component loads, focus on the imput immediately
    const [channelId, setChannelId] = useState('');
    const handleChange = e => setChannelId(e.target.value);
    const handleClick = _e => props.findYoutubeChannel(this.state.channelId);
    const handleKeyDown = e => e.key === 'Enter' && props.findYoutubeChannel(this.state.channelId);

    return (
        <div className='channelDownloadSelector'>
            <label htmlFor='channel-download-selector-input'>Enter the channel Id:</label>
            <input
                id='channel-download-selector-input'
                className='channelDownloadSelectorInput'
                value={channelId}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <div
                className='channelDownloadSelectorButton'
                onClick={handleClick}
            >Search</div>
        </div>
    );
};

export default ChannelDownloadSelector;
