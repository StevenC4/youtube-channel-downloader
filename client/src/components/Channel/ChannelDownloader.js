import React, {useState} from 'react';

const ChannelDownloader = props => {
    const [channel, setChannel] = useState(null);

    const findYoutubeChannel = async channelId => {
        // const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`); // TODO: replace this with a proxied API call to the YouTube data api 3
        // TODO: parse this out into the state
    }

    return (
        <div className='channelDownloaderModalContents'>
            <h2>Download a channel</h2>
            <hr />
            {!channel &&
                <ChannelDownloadSelector
                    channels={props.channels}
                    findYoutubeChannel={findYoutubeChannel}
                />
            }
            {channel && <p>Channel selected!</p>}
        </div>
    );
}

export default ChannelDownloader;
