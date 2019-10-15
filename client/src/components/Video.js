import React from 'react';
import moment from 'moment';

const Video = props => {
    return (
        <div>
            <p>{props.video.name}</p>
            <p className='videoPublished'>{moment.unix(props.video.published).format('LLL')}</p>
            <iframe
                id={`ytplayer-${props.videoId}`}
                type='text/html'
                width='320'
                height='180'
                title={props.video.name}
                src={`https://www.youtube.com/embed/${props.video.id}?autoplay=0&origin=http://localhost`}
                frameBorder='0'></iframe>
        </div>
    );
}

export default Video;
